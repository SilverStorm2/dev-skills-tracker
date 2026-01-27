import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from '@/contexts/AuthContext'
import type { Status } from '@/data/skills'
import { skillsData } from '@/data/skills'

type SkillStatuses = Record<string, Status>

const STORAGE_KEY = 'dev-skills-tracker'

export function useSkills() {
  const { user } = useAuth()
  const [skillStatuses, setSkillStatuses] = useState<SkillStatuses>({})
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)

  // Load data on mount or when user changes
  useEffect(() => {
    if (user) {
      loadFromSupabase()
    } else {
      loadFromLocalStorage()
    }
  }, [user])

  // Migrate localStorage to Supabase on first login
  useEffect(() => {
    if (user && Object.keys(skillStatuses).length === 0) {
      migrateLocalStorageToSupabase()
    }
  }, [user])

  const loadFromLocalStorage = () => {
    setLoading(true)
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        setSkillStatuses(JSON.parse(saved))
      } catch (e) {
        console.error('Error parsing localStorage:', e)
      }
    }
    setLoading(false)
  }

  const loadFromSupabase = async () => {
    if (!user) return

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('user_skills')
        .select('skill_id, status')
        .eq('user_id', user.id)

      if (error) throw error

      const statuses: SkillStatuses = {}
      data?.forEach((item) => {
        statuses[item.skill_id] = item.status as Status
      })

      setSkillStatuses(statuses)
      console.log('✅ Loaded skills from Supabase:', data?.length || 0)
    } catch (error) {
      console.error('❌ Error loading skills from Supabase:', error)
      // Fallback to localStorage
      loadFromLocalStorage()
    } finally {
      setLoading(false)
    }
  }

  const migrateLocalStorageToSupabase = async () => {
    if (!user) return

    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return

    try {
      const localStatuses: SkillStatuses = JSON.parse(saved)
      const entries = Object.entries(localStatuses)

      if (entries.length === 0) return

      setSyncing(true)
      console.log('🔄 Migrating localStorage to Supabase...', entries.length, 'skills')

      const skillsToInsert = entries.map(([skill_id, status]) => ({
        user_id: user.id,
        skill_id,
        status,
        started_at: status !== 'planned' ? new Date().toISOString() : null,
        completed_at: status === 'completed' ? new Date().toISOString() : null,
      }))

      const { error } = await supabase
        .from('user_skills')
        .upsert(skillsToInsert, { onConflict: 'user_id,skill_id' })

      if (error) throw error

      // Clear localStorage after successful migration
      localStorage.removeItem(STORAGE_KEY)
      console.log('✅ Migration complete! LocalStorage cleared.')

      // Reload from Supabase to confirm
      await loadFromSupabase()
    } catch (error) {
      console.error('❌ Error migrating to Supabase:', error)
    } finally {
      setSyncing(false)
    }
  }

  const updateSkillStatus = async (skillId: string, status: Status) => {
    // Optimistic update
    const newStatuses = { ...skillStatuses, [skillId]: status }
    setSkillStatuses(newStatuses)

    if (user) {
      // Update Supabase
      try {
        const now = new Date().toISOString()
        const { error } = await supabase.from('user_skills').upsert(
          {
            user_id: user.id,
            skill_id: skillId,
            status,
            started_at:
              status !== 'planned' && !skillStatuses[skillId]
                ? now
                : undefined,
            completed_at: status === 'completed' ? now : null,
          },
          { onConflict: 'user_id,skill_id' }
        )

        if (error) throw error
        console.log('✅ Updated skill in Supabase:', skillId, status)
      } catch (error) {
        console.error('❌ Error updating skill:', error)
        // Revert optimistic update on error
        setSkillStatuses(skillStatuses)
      }
    } else {
      // Update localStorage for non-logged users
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newStatuses))
      console.log('💾 Updated skill in localStorage:', skillId, status)
    }
  }

  const getProgress = () => {
    const total = skillsData.length
    const completed = Object.values(skillStatuses).filter(
      (s) => s === 'completed'
    ).length
    const learning = Object.values(skillStatuses).filter(
      (s) => s === 'learning'
    ).length
    const planned = Object.values(skillStatuses).filter(
      (s) => s === 'planned'
    ).length
    const percentage = total > 0 ? (completed / total) * 100 : 0

    return { total, completed, learning, planned, percentage }
  }

  const resetProgress = async () => {
    if (user) {
      try {
        const { error } = await supabase
          .from('user_skills')
          .delete()
          .eq('user_id', user.id)

        if (error) throw error
        setSkillStatuses({})
        console.log('✅ Reset progress in Supabase')
      } catch (error) {
        console.error('❌ Error resetting progress:', error)
      }
    } else {
      setSkillStatuses({})
      localStorage.removeItem(STORAGE_KEY)
      console.log('💾 Reset progress in localStorage')
    }
  }

  return {
    skillStatuses,
    updateSkillStatus,
    getProgress,
    resetProgress,
    loading,
    syncing,
  }
}
