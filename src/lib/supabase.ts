import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (będą użyte później)
export type Database = {
  public: {
    Tables: {
      user_skills: {
        Row: {
          id: string
          user_id: string
          skill_id: string
          status: 'planned' | 'learning' | 'completed'
          started_at: string | null
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          skill_id: string
          status: 'planned' | 'learning' | 'completed'
          started_at?: string | null
          completed_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          skill_id?: string
          status?: 'planned' | 'learning' | 'completed'
          started_at?: string | null
          completed_at?: string | null
          created_at?: string
        }
      }
      custom_skills: {
        Row: {
          id: string
          user_id: string
          name: string
          category: string
          difficulty: string
          description: string
          icon: string
          learning_time: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          category: string
          difficulty: string
          description: string
          icon: string
          learning_time?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          category?: string
          difficulty?: string
          description?: string
          icon?: string
          learning_time?: string | null
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          username: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
