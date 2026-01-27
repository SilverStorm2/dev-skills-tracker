# AI Agent Instructions - Dev Skills Tracker v2.0 (Supabase Auth)

> **Mission**: Add Supabase authentication and database integration to existing Dev Skills Tracker application following numbered tasks below.

---

## 🎯 Overview

**Goal**: Transform single-user localStorage app into multi-user cloud-synced application with authentication.

**Constraints**:
- Time budget: 8 hours
- Must migrate existing localStorage data
- Backward compatible (works offline)
- Student-friendly code with comments

**Tech Stack**: React 19 + TypeScript 5 + Vite 7 + Tailwind CSS 3 + shadcn/ui + **Supabase**

**Existing features to preserve**:
- ✅ All 23 skills from `skills.ts`
- ✅ Category filtering
- ✅ Progress tracking
- ✅ Skill details modal
- ✅ Current UI/UX

**New features to add**:
- 🆕 User registration/login
- 🆕 Cloud sync of progress
- 🆕 Custom skills per user (future)
- 🆕 User profile
- 🆕 Multi-device support

---

## 📋 Task List

### T0: Supabase Project Setup ✅ COMPLETED

**Objective**: Create Supabase project and obtain credentials

✅ **Your Supabase credentials**:
- **Project URL**: `https://qhvbbhrdlhsvkmwjlvmc.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodmJiaHJkbGhzdmttd2psdm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDYxMjAsImV4cCI6MjA4NTEyMjEyMH0.6RQhmIWPHShE0orGYuE8kYupiNux_uUdkeoeMaD_gsc`

**Status**: ✅ Project already created!

---

### T1: Install Supabase Dependencies

**Objective**: Add Supabase client library to project

**Commands**:
```bash
npm install @supabase/supabase-js
```

**Files to create**:

1. **`.env.local`** (root directory - obok package.json):
```env
VITE_SUPABASE_URL=https://qhvbbhrdlhsvkmwjlvmc.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFodmJiaHJkbGhzdmttd2psdm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDYxMjAsImV4cCI6MjA4NTEyMjEyMH0.6RQhmIWPHShE0orGYuE8kYupiNux_uUdkeoeMaD_gsc
```

2. **`.env.example`** (root directory):
```env
# Supabase Configuration
# Get these values from: https://supabase.com/dashboard/project/qhvbbhrdlhsvkmwjlvmc/settings/api

VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

3. **Update `.gitignore`** (dodaj na końcu pliku):
```gitignore
# Environment variables
.env.local
.env
```

**Deliverables**:
- [ ] Package `@supabase/supabase-js` zainstalowany
- [ ] Plik `.env.local` utworzony z danymi
- [ ] Plik `.env.example` utworzony
- [ ] `.env.local` dodany do `.gitignore`

**Verification**:
```bash
# Sprawdź czy pakiet jest zainstalowany
npm list @supabase/supabase-js

# Sprawdź czy .env.local istnieje
cat .env.local

# Zrestartuj dev server
npm run dev
```

**Next step**: Przejdź do T2 → Create Supabase Client

---

### T2: Create Supabase Client

**Objective**: Initialize Supabase client for use across app

**Files to create**:

**`src/lib/supabase.ts`** (nowy plik):
```typescript
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
```

**Deliverables**:
- [ ] Plik `src/lib/supabase.ts` utworzony
- [ ] Brak błędów TypeScript
- [ ] Możesz zaimportować: `import { supabase } from '@/lib/supabase'`

**Verification**:
```typescript
// Dodaj tymczasowo w src/App.tsx na górze:
import { supabase } from '@/lib/supabase'
console.log('Supabase client:', supabase)

// Sprawdź w konsoli przeglądarki - powinieneś zobaczyć obiekt Supabase
```

**Next step**: Przejdź do T3 → Create Database Schema

---

### T3: Create Database Schema

**Objective**: Set up tables in Supabase for user data

**Steps**:
1. Otwórz Supabase Dashboard: https://supabase.com/dashboard/project/qhvbbhrdlhsvkmwjlvmc
2. W lewym menu kliknij **SQL Editor**
3. Kliknij **New query**
4. Wklej poniższy SQL kod
5. Kliknij **Run** (lub Ctrl+Enter)

**SQL Migration** (skopiuj całość):

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User skills progress table
create table public.user_skills (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  skill_id text not null,
  status text check (status in ('planned', 'learning', 'completed')) not null,
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  unique(user_id, skill_id)
);

-- Custom skills created by users (future feature)
create table public.custom_skills (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  name text not null,
  category text not null,
  difficulty text not null,
  description text not null,
  icon text default '🚀',
  learning_time text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.user_skills enable row level security;
alter table public.custom_skills enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

-- User skills policies
create policy "Users can view own skills"
  on user_skills for select
  using ( auth.uid() = user_id );

create policy "Users can insert own skills"
  on user_skills for insert
  with check ( auth.uid() = user_id );

create policy "Users can update own skills"
  on user_skills for update
  using ( auth.uid() = user_id );

create policy "Users can delete own skills"
  on user_skills for delete
  using ( auth.uid() = user_id );

-- Custom skills policies
create policy "Users can view own custom skills"
  on custom_skills for select
  using ( auth.uid() = user_id );

create policy "Users can insert own custom skills"
  on custom_skills for insert
  with check ( auth.uid() = user_id );

create policy "Users can update own custom skills"
  on custom_skills for update
  using ( auth.uid() = user_id );

create policy "Users can delete own custom skills"
  on custom_skills for delete
  using ( auth.uid() = user_id );

-- Function to create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, new.email);
  return new;
end;
$$;

-- Trigger to create profile on user signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Indexes for performance
create index user_skills_user_id_idx on user_skills(user_id);
create index user_skills_skill_id_idx on user_skills(skill_id);
create index custom_skills_user_id_idx on custom_skills(user_id);
```

**Deliverables**:
- [ ] SQL wykonany bez błędów
- [ ] Tabele widoczne w **Table Editor**: `profiles`, `user_skills`, `custom_skills`
- [ ] RLS enabled (zielony status w Table Editor)

**Verification**:
1. Idź do **Table Editor** w Supabase Dashboard
2. Powinnaś zobaczyć 3 tabele: `profiles`, `user_skills`, `custom_skills`
3. Kliknij na każdą tabelę → sprawdź czy RLS jest "enabled" (zielony)
4. Kliknij na `user_skills` → zakładka **Policies** → powinno być 4 policies

**Troubleshooting**:
- Jeśli błąd "relation already exists" - tabele już istnieją, możesz pominąć
- Jeśli błąd z permissions - upewnij się że jesteś owner projektu

**Next step**: Przejdź do T4 → Create Auth Context

---

### T4: Create Auth Context

**Objective**: Provide authentication state across app with React Context

**Files to create**:

1. **Najpierw utwórz folder**: `src/contexts/`

2. **`src/contexts/AuthContext.tsx`** (nowy plik):
```typescript
import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithGitHub: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        emailRedirectTo: window.location.origin,
      }
    })
    if (error) throw error
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })
    if (error) throw error
  }

  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: window.location.origin,
      },
    })
    if (error) throw error
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    signInWithGoogle,
    signInWithGitHub,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
```

**Deliverables**:
- [ ] Folder `src/contexts/` utworzony
- [ ] Plik `src/contexts/AuthContext.tsx` utworzony
- [ ] Brak błędów TypeScript
- [ ] Export `useAuth` i `AuthProvider` działa

**Verification**:
```typescript
// Sprawdź import w src/App.tsx:
import { useAuth } from '@/contexts/AuthContext'
// Nie powinno być błędu
```

**Next step**: Przejdź do T5 → Create Auth Components

---

### T5: Create Auth Components

**Objective**: Build UI for login, registration, and user menu

**Files to create**:

1. **Najpierw utwórz folder**: `src/components/Auth/`

2. **`src/components/Auth/LoginForm.tsx`**:
```typescript
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Github, Mail } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function LoginForm({ onToggle }: { onToggle: () => void }) {
  const { signIn, signInWithGoogle, signInWithGitHub } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await signIn(email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logowanie nie powiodło się')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logowanie Google nie powiodło się')
      setLoading(false)
    }
  }

  const handleGitHubSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      await signInWithGitHub()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logowanie GitHub nie powiodło się')
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Zaloguj się</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Kontynuuj swoją naukę
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="twoj@email.pl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Hasło</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Logowanie...' : 'Zaloguj się'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Lub kontynuuj z
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={handleGoogleSignIn}
          disabled={loading}
          type="button"
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button
          variant="outline"
          onClick={handleGitHubSignIn}
          disabled={loading}
          type="button"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>

      <div className="text-center text-sm">
        Nie masz konta?{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-primary underline-offset-4 hover:underline"
          disabled={loading}
        >
          Zarejestruj się
        </button>
      </div>
    </div>
  )
}
```

3. **`src/components/Auth/RegisterForm.tsx`**:
```typescript
import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

export function RegisterForm({ onToggle }: { onToggle: () => void }) {
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Hasło musi mieć minimum 6 znaków')
      setLoading(false)
      return
    }

    try {
      await signUp(email, password)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Rejestracja nie powiodła się')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center space-y-4">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="text-2xl font-bold">Sprawdź swoją skrzynkę!</h2>
        <p className="text-sm text-muted-foreground">
          Wysłaliśmy link aktywacyjny na adres <strong>{email}</strong>
        </p>
        <Button onClick={onToggle} variant="outline" className="mt-4">
          Wróć do logowania
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Utwórz konto</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Zacznij śledzić swój postęp
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <Input
            id="register-email"
            type="email"
            placeholder="twoj@email.pl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password">Hasło</Label>
          <Input
            id="register-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Rejestracja...' : 'Zarejestruj się'}
        </Button>
      </form>

      <div className="text-center text-sm">
        Masz już konto?{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-primary underline-offset-4 hover:underline"
          disabled={loading}
        >
          Zaloguj się
        </button>
      </div>
    </div>
  )
}
```

4. **`src/components/Auth/AuthModal.tsx`**:
```typescript
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

type AuthModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {isLogin ? 'Logowanie' : 'Rejestracja'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {isLogin
              ? 'Zaloguj się do swojego konta'
              : 'Utwórz nowe konto'}
          </DialogDescription>
        </DialogHeader>

        {isLogin ? (
          <LoginForm onToggle={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggle={() => setIsLogin(true)} />
        )}
      </DialogContent>
    </Dialog>
  )
}
```

5. **`src/components/Auth/UserMenu.tsx`**:
```typescript
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, User, Settings } from 'lucide-react'

export function UserMenu() {
  const { user, signOut } = useAuth()

  if (!user) return null

  const getInitials = () => {
    const email = user.email || 'U'
    return email.charAt(0).toUpperCase()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.user_metadata?.avatar_url} alt={user.email || ''} />
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.user_metadata?.username || 'User'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <User className="mr-2 h-4 w-4" />
          <span>Profil</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings className="mr-2 h-4 w-4" />
          <span>Ustawienia</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Wyloguj się</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

**Deliverables**:
- [ ] Folder `src/components/Auth/` utworzony
- [ ] 4 pliki komponentów utworzone
- [ ] Brak błędów TypeScript
- [ ] Komponenty można zaimportować

**Verification**:
```typescript
// Sprawdź importy:
import { AuthModal } from '@/components/Auth/AuthModal'
import { UserMenu } from '@/components/Auth/UserMenu'
// Nie powinno być błędów
```

⚠️ **UWAGA**: Te komponenty używają shadcn/ui komponentów których jeszcze nie masz. W następnym kroku je zainstalujemy!

**Next step**: Przejdź do T6 → Install shadcn/ui Components

---

### T6: Install shadcn/ui Components

**Objective**: Add missing UI components needed for authentication

**Commands** (wykonaj po kolei):

```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
npx shadcn@latest add alert
npx shadcn@latest add input
npx shadcn@latest add label
```

**Deliverables**:
- [ ] Wszystkie 6 komponentów zainstalowanych
- [ ] Pliki w `src/components/ui/`
- [ ] Brak błędów przy importach

**Verification**:
```bash
# Sprawdź czy pliki istnieją:
ls src/components/ui/

# Powinny być: dialog.tsx, dropdown-menu.tsx, avatar.tsx, 
# alert.tsx, input.tsx, label.tsx
```

**Troubleshooting**:
- Jeśli `npx shadcn@latest` nie działa, użyj: `npx shadcn-ui@latest`
- Jeśli pyta o konfigurację - wybierz domyślne opcje (Enter)

**Next step**: Przejdź do T7 → Update useSkills Hook

---

### T7: Update useSkills Hook for Supabase

**Objective**: Replace localStorage-only logic with Supabase sync + localStorage fallback

**Files to modify**:

**`src/hooks/useSkills.ts`** (zastąp CAŁĄ zawartość pliku):
```typescript
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
```

**Deliverables**:
- [ ] Plik `src/hooks/useSkills.ts` zaktualizowany
- [ ] Brak błędów TypeScript
- [ ] Hook używa Supabase gdy zalogowany, localStorage gdy nie

**Verification**:
```typescript
// W komponencie:
const { loading, syncing } = useSkills()
console.log('Loading:', loading, 'Syncing:', syncing)
```

**What changed**:
- ✅ Dodano `useAuth()` do wykrywania użytkownika
- ✅ `loadFromSupabase()` - ładowanie z bazy danych
- ✅ `migrateLocalStorageToSupabase()` - automatyczna migracja przy pierwszym logowaniu
- ✅ `updateSkillStatus()` - zapisuje do Supabase lub localStorage
- ✅ Fallback do localStorage gdy offline/niezalogowany

**Next step**: Przejdź do T8 → Update App.tsx

---

### T8: Update App.tsx with Authentication UI

**Objective**: Add login button, user menu, and auth modal to main app

**Files to modify**:

**`src/App.tsx`** (zastąp CAŁĄ zawartość pliku):
```typescript
import { useState } from 'react'
import { LogIn } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { SkillCard } from '@/components/SkillCard'
import { SkillModal } from '@/components/SkillModal'
import { AuthModal } from '@/components/Auth/AuthModal'
import { UserMenu } from '@/components/Auth/UserMenu'
import { useAuth } from '@/contexts/AuthContext'
import { useSkills } from '@/hooks/useSkills'
import { skillsData, categories, type Skill } from '@/data/skills'

function App() {
  const { user, loading: authLoading } = useAuth()
  const { skillStatuses, updateSkillStatus, getProgress, loading: skillsLoading } = useSkills()
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory)

  const progress = getProgress()

  // Loading state
  if (authLoading || skillsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Ładowanie...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background page-glow">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Dev Skills Tracker | Web Development
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Śledź swoją ścieżkę web developera - od podstaw do mastera
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {user ? (
                <UserMenu />
              ) : (
                <Button onClick={() => setAuthModalOpen(true)} size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Zaloguj się</span>
                </Button>
              )}
            </div>
          </div>
          
          {!user && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                💡 <strong>Zaloguj się</strong> aby synchronizować swój postęp w chmurze i mieć dostęp z każdego urządzenia!
              </p>
            </div>
          )}
        </div>
      </header>

      <div className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Twój postęp</span>
            <span className="text-sm text-muted-foreground">
              {progress.completed}/{progress.total} skills
            </span>
          </div>
          <Progress value={progress.percentage} className="h-2" />

          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-500">
                {progress.learning}
              </div>
              <div className="text-xs text-muted-foreground">Learning</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-500">
                {progress.completed}
              </div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-500">
                {progress.planned}
              </div>
              <div className="text-xs text-muted-foreground">Planned</div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="mb-6 flex-wrap h-auto">
            <TabsTrigger value="all">
              📚 <span className="hidden sm:inline">All</span> ({skillsData.length})
            </TabsTrigger>
            {categories.map(cat => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.icon} <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map(skill => (
              <SkillCard
                key={skill.id}
                skill={skill}
                status={skillStatuses[skill.id]}
                onStatusChange={(status) => updateSkillStatus(skill.id, status)}
                onDetailsClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
        </Tabs>
      </main>

      <SkillModal
        skill={selectedSkill}
        open={selectedSkill !== null}
        onOpenChange={(open) => !open && setSelectedSkill(null)}
        status={selectedSkill ? skillStatuses[selectedSkill.id] : undefined}
        onStatusChange={(status) => {
          if (selectedSkill) {
            updateSkillStatus(selectedSkill.id, status)
          }
        }}
      />

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  )
}

export default App
```

**Deliverables**:
- [ ] App.tsx zaktualizowany
- [ ] Przycisk "Zaloguj się" widoczny gdy niezalogowany
- [ ] UserMenu widoczne gdy zalogowany
- [ ] Auth modal działa

**What changed**:
- ✅ Import `useAuth()` i komponentów Auth
- ✅ Dodany przycisk logowania w headerze
- ✅ Dodane `UserMenu` dla zalogowanych
- ✅ Dodany banner zachęcający do logowania
- ✅ Stan `authModalOpen` do kontroli modala
- ✅ Loading state podczas ładowania auth

**Next step**: Przejdź do T9 → Update main.tsx

---

### T9: Wrap App with AuthProvider

**Objective**: Provide auth context to entire application

**Files to modify**:

**`src/main.tsx`** (zastąp CAŁĄ zawartość):
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
```

**Deliverables**:
- [ ] main.tsx zaktualizowany
- [ ] AuthProvider owija całą aplikację
- [ ] Brak błędów w konsoli

**Verification**:
```bash
# Uruchom aplikację:
npm run dev

# Otwórz http://localhost:5173
# Sprawdź konsolę - nie powinno być błędów
# Sprawdź czy widzisz przycisk "Zaloguj się"
```

**What changed**:
- ✅ Import `AuthProvider`
- ✅ Wrap `<App />` w `<AuthProvider>`

**Next step**: Przejdź do T10 → Testing

---

### T10: Testing & Verification

**Objective**: Verify all features work end-to-end

**Test Checklist**:

#### 1️⃣ **Anonymous User (niezalogowany)**
- [ ] Otwórz app w trybie incognito
- [ ] Widzisz przycisk "Zaloguj się"
- [ ] Widzisz niebieski banner o logowaniu
- [ ] Możesz dodać skill do "Planned"
- [ ] Postęp zapisuje się w localStorage (odśwież stronę - powinien zostać)
- [ ] Otwórz DevTools → Application → Local Storage → sprawdź `dev-skills-tracker`

#### 2️⃣ **Registration (rejestracja)**
- [ ] Kliknij "Zaloguj się"
- [ ] Kliknij "Zarejestruj się" na dole modala
- [ ] Wpisz email i hasło (min 6 znaków)
- [ ] Potwierdź hasło
- [ ] Kliknij "Zarejestruj się"
- [ ] Powinien pokazać się ekran "Sprawdź swoją skrzynkę!"
- [ ] Sprawdź email - powinien przyjść link aktywacyjny od Supabase
- [ ] Kliknij link w emailu

#### 3️⃣ **Login (logowanie)**
- [ ] Po kliknięciu linku z emaila - zostaniesz zalogowany
- [ ] LUB wróć do app i kliknij "Zaloguj się" → wpisz email/hasło
- [ ] Po zalogowaniu przycisk "Zaloguj się" zamienia się na avatar
- [ ] Banner znika (bo jesteś zalogowany)

#### 4️⃣ **Data Migration (migracja danych)**
- [ ] Jeśli miałeś skills w localStorage PRZED logowaniem:
  - [ ] Otwórz konsolę przeglądarki (F12)
  - [ ] Sprawdź czy widzisz: `🔄 Migrating localStorage to Supabase...`
  - [ ] Sprawdź czy widzisz: `✅ Migration complete!`
  - [ ] Twoje stare skills z localStorage powinny być teraz w Supabase

#### 5️⃣ **Supabase Sync (synchronizacja)**
- [ ] Dodaj nowy skill do "Learning"
- [ ] Sprawdź konsolę - powinno być: `✅ Updated skill in Supabase`
- [ ] Idź do Supabase Dashboard → Table Editor → `user_skills`
- [ ] Sprawdź czy widzisz swoje skills w tabeli

#### 6️⃣ **Multi-device (wiele urządzeń)**
- [ ] Zaloguj się na tym samym koncie w INNEJ przeglądarce
- [ ] Sprawdź czy widzisz te same skills
- [ ] Dodaj skill w jednej przeglądarce
- [ ] Odśwież drugą przeglądarkę - skill powinien się pojawić

#### 7️⃣ **User Menu**
- [ ] Kliknij na swój avatar w prawym górnym rogu
- [ ] Powinieneś zobaczyć dropdown z:
  - [ ] Email
  - [ ] "Profil" (disabled)
  - [ ] "Ustawienia" (disabled)
  - [ ] "Wyloguj się"

#### 8️⃣ **Logout (wylogowanie)**
- [ ] Kliknij "Wyloguj się"
- [ ] Avatar znika, wraca przycisk "Zaloguj się"
- [ ] Banner wraca
- [ ] Skills znikają (bo nie jesteś zalogowany)
- [ ] Możesz nadal używać app z localStorage

#### 9️⃣ **Offline Mode**
- [ ] Zaloguj się
- [ ] W DevTools → Network → zaznacz "Offline"
- [ ] Spróbuj dodać skill - dostaniesz błąd w konsoli
- [ ] Odznacz "Offline"
- [ ] Skill powinien się zsynchronizować

---

**Troubleshooting**:

### ❌ "Missing Supabase environment variables"
**Rozwiązanie**:
```bash
# Sprawdź czy .env.local istnieje:
cat .env.local

# Jeśli nie - stwórz go z danymi z T1
# Zrestartuj dev server:
npm run dev
```

### ❌ "Row Level Security policy violation"
**Rozwiązanie**:
1. Idź do Supabase Dashboard → Table Editor → `user_skills`
2. Kliknij "RLS" (powinno być zielone "enabled")
3. Jeśli nie ma policies - uruchom ponownie SQL z T3

### ❌ Email nie przychodzi
**Rozwiązanie**:
1. Sprawdź spam
2. W Supabase Dashboard → Authentication → Settings → Email Templates
3. Sprawdź czy SMTP jest skonfigurowane (domyślnie Supabase wysyła)
4. W fazie dev możesz wyłączyć potwierdzenie email:
   - Auth → Settings → Email Auth → Disable "Enable email confirmations"

### ��� OAuth (Google/GitHub) nie działa
**To normalne** - OAuth wymaga dodatkowej konfiguracji (T11 - opcjonalne)

### ❌ LocalStorage nie migruje
**Sprawdź**:
```typescript
// W konsoli przeglądarki:
localStorage.getItem('dev-skills-tracker')

// Jeśli null - nie ma danych do migracji
// Jeśli widzisz JSON - wyloguj się, zaloguj ponownie, sprawdź konsole
```

---

**Success Criteria** ✅:
- [ ] Możesz się zarejestrować
- [ ] Możesz się zalogować
- [ ] Skills zapisują się do Supabase
- [ ] Skills ładują się z Supabase po odświeżeniu
- [ ] Możesz się wylogować
- [ ] App działa bez logowania (localStorage)

**Next step**: (Opcjonalnie) T11 → OAuth Setup

---

### T11: OAuth Setup (OPCJONALNE)

**Objective**: Enable Google and GitHub login

⚠️ **To jest zaawansowane** - możesz pominąć jeśli chcesz tylko email/password.

#### **Google OAuth**

1. **Google Cloud Console**:
   - Idź do: https://console.cloud.google.com
   - Utwórz nowy projekt (lub użyj istniejącego)
   - W menu → APIs & Services → Credentials
   - Kliknij "Create Credentials" → OAuth 2.0 Client ID
   - Application type: Web application
   - Authorized redirect URIs: `https://qhvbbhrdlhsvkmwjlvmc.supabase.co/auth/v1/callback`
   - Skopiuj **Client ID** i **Client Secret**

2. **Supabase Configuration**:
   - Idź do: https://supabase.com/dashboard/project/qhvbbhrdlhsvkmwjlvmc/auth/providers
   - Znajdź "Google" w liście providerów
   - Włącz toggle "Enable Sign in with Google"
   - Wklej Client ID
   - Wklej Client Secret
   - Kliknij Save

3. **Test**:
   - Otwórz app
   - Kliknij "Zaloguj się" → "Google"
   - Powinieneś zostać przekierowany do Google login

#### **GitHub OAuth**

1. **GitHub Developer Settings**:
   - Idź do: https://github.com/settings/developers
   - Kliknij "New OAuth App"
   - Application name: `Dev Skills Tracker`
   - Homepage URL: `http://localhost:5173`
   - Authorization callback URL: `https://qhvbbhrdlhsvkmwjlvmc.supabase.co/auth/v1/callback`
   - Kliknij "Register application"
   - Skopiuj **Client ID**
   - Kliknij "Generate a new client secret" → skopiuj **Client Secret**

2. **Supabase Configuration**:
   - Idź do: https://supabase.com/dashboard/project/qhvbbhrdlhsvkmwjlvmc/auth/providers
   - Znajdź "GitHub"
   - Włącz toggle
   - Wklej Client ID i Client Secret
   - Save

3. **Test**:
   - Kliknij "Zaloguj się" → "GitHub"
   - Authorize app
   - Zostaniesz zalogowany

---

**Deliverables**:
- [ ] (Optional) Google OAuth działa
- [ ] (Optional) GitHub OAuth działa

**Next step**: Gotowe! 🎉

---

## 🎉 Gratulacje!

Jeśli dotarłeś tutaj - **masz działający system autentykacji z Supabase!** 🚀

---

## 📚 Co dalej?

### **Polecane usprawnienia**:

1. **Password Reset** (resetowanie hasła):
```typescript
// W LoginForm.tsx dodaj:
const resetPassword = async (email: string) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  })
  if (error) throw error
}
```

2. **Custom Skills** (własne technologie):
   - Pozwól użytkownikom dodawać własne skills
   - Zapisuj w tabeli `custom_skills`
   - Wyświetlaj obok domyślnych

3. **Profile Page** (strona profilu):
   - Edycja username
   - Upload avatara (Supabase Storage)
   - Statystyki nauki

4. **Real-time Sync**:
```typescript
// Realtime subscriptions
supabase
  .channel('user_skills')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'user_skills' },
    (payload) => console.log('Change!', payload)
  )
  .subscribe()
```

---

## 🐛 Known Issues

- OAuth redirect może nie działać na `localhost` - użyj ngrok lub deploy
- Email confirmation wymaga działającego SMTP (Supabase ma built-in dla dev)
- RLS policies mogą blokować zapytania jeśli źle skonfigurowane

---

## 📖 Resources

- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase React Tutorial](https://supabase.com/docs/guides/getting-started/tutorials/with-react)

---

**End of AGENT.md v2.0**

Powodzenia! 🍀