import { useState, useEffect } from 'react'
import type { Status } from '@/data/skills'
import { skillsData } from '@/data/skills'

type SkillStatuses = Record<string, Status>

const STORAGE_KEY = 'dev-skills-tracker'

export function useSkills() {
  const [skillStatuses, setSkillStatuses] = useState<SkillStatuses>(() => {
    if (typeof window === 'undefined') return {}
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skillStatuses))
  }, [skillStatuses])

  const updateSkillStatus = (skillId: string, status: Status) => {
    setSkillStatuses(prev => ({
      ...prev,
      [skillId]: status
    }))
  }

  const getProgress = () => {
    const total = skillsData.length
    const completed = Object.values(skillStatuses).filter(s => s === 'completed').length
    const learning = Object.values(skillStatuses).filter(s => s === 'learning').length
    const planned = Object.values(skillStatuses).filter(s => s === 'planned').length
    const percentage = total > 0 ? (completed / total) * 100 : 0

    return { total, completed, learning, planned, percentage }
  }

  const resetProgress = () => {
    setSkillStatuses({})
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    skillStatuses,
    updateSkillStatus,
    getProgress,
    resetProgress
  }
}
