# AI Agent Instructions - Dev Skills Tracker

> **Mission**:  Generate complete MVP of "Dev Skills Tracker" application following numbered tasks below. 

---

## 🎯 Overview

**Goal**: Create a fully functional React + TypeScript app for tracking web development learning progress. 

**Constraints**:
- Time budget: 5 hours
- Must be student-friendly code
- No backend (localStorage only)
- Single page app (no routing)

**Tech Stack**: React 18 + TypeScript 5 + Vite 5 + Tailwind CSS 3 + shadcn/ui + lucide-react

---

## 📋 Task List

### T0: Project Initialization // completed

**Objective**: Set up Vite + React + TypeScript project

**Commands**:
```bash
npm create vite@latest dev-skills-tracker -- --template react-ts
npm install
```

**Verification**:
- [ ] `package.json` exists
- [ ] `src/` folder exists with `main.tsx` and `App.tsx`
- [ ] `npm run dev` starts successfully

**Deliverables**:
- Working Vite project structure
- Default React app runs on localhost:5173

---

### T1: Install Tailwind CSS // completed

**Objective**: Set up Tailwind CSS for styling

**Commands**:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Files to modify**: 

1. **`tailwind.config.js`**: 
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
```

2. **`src/index.css`** - Replace entire content:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground:  210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Verification**:
- [ ] Tailwind classes work in components
- [ ] Dark mode CSS variables defined

---

### T2: Configure TypeScript Path Aliases // COMPLETED

**Objective**: Enable `@/` imports for cleaner code

**Files to modify**:

1. **`tsconfig.json`** - Add to `compilerOptions`:
```json
{
  "compilerOptions":  {
    // ... existing options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

2. **`vite.config.ts`** - Complete file:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

**Verification**:
- [ ] Can import with `import X from '@/components/X'`
- [ ] TypeScript recognizes the alias

---

### T3: Install shadcn/ui // COMPLETED

**Objective**: Set up shadcn/ui component library

**Commands**:
```bash
npx shadcn@latest init -d
```

**Answer prompts with**:
- Style: Default
- Base color:  Slate
- CSS variables: Yes

**Files created**:
- `components. json`
- `src/lib/utils. ts`

**Install required components**:
```bash
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add button
npx shadcn@latest add tabs
npx shadcn@latest add dialog
npx shadcn@latest add progress
```

**Install dependencies**:
```bash
npm install lucide-react
npm install tailwindcss-animate
```

**Verification**:
- [ ] `src/components/ui/` folder exists
- [ ] 6 component files created (card. tsx, badge.tsx, etc.)
- [ ] `src/lib/utils.ts` exists with `cn()` function

---

### T4: Create Data Structure // COMPLETED

**Objective**: Define TypeScript types and create dataset with 23 technologies

**File to create**:  `src/data/skills.ts`

**Content** (COMPLETE FILE):

```typescript
export type Category = 'frontend' | 'backend' | 'database' | 'tools' | 'design'
export type Status = 'planned' | 'learning' | 'completed'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Skill {
  id: string
  name: string
  category:  Category
  difficulty: Difficulty
  icon: string
  description: string
  learningTime: string
  prerequisites: string[]
  resources: { title: string; url: string }[]
  yourTip?:  string
}

export const skillsData: Skill[] = [
  // FRONTEND (9)
  {
    id: 'html-css',
    name: 'HTML/CSS/SASS',
    category: 'frontend',
    difficulty: 'beginner',
    icon: '🎨',
    description: 'Fundamenty web developmentu - struktura i stylowanie stron.',
    learningTime: '2-4 tygodnie',
    prerequisites:  [],
    resources: [
      { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
      { title: 'Kevin Powell (YouTube)', url: 'https://youtube.com/@KevinPowell' }
    ],
    yourTip: 'Zacznij od HTML, potem CSS, SASS na końcu. Flexbox i Grid to must-have!'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    difficulty: 'beginner',
    icon: '⚡',
    description: 'Język programowania do interaktywnych stron webowych.',
    learningTime: '2-3 miesiące',
    prerequisites: ['html-css'],
    resources:  [
      { title: 'JavaScript.info', url: 'https://javascript.info' },
      { title: 'FreeCodeCamp', url: 'https://freecodecamp.org' }
    ],
    yourTip:  'ES6+ to standard.  Najpierw podstawy, potem asynchroniczność i DOM.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    difficulty: 'intermediate',
    icon: '📘',
    description: 'JavaScript z typowaniem - łapie błędy przed uruchomieniem.',
    learningTime: '3-4 tygodnie',
    prerequisites:  ['javascript'],
    resources: [
      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' }
    ],
    yourTip: 'Na początku frustrujące, potem nie wyobrażasz sobie pracy bez tego!'
  },
  {
    id: 'react',
    name: 'React. js',
    category: 'frontend',
    difficulty: 'intermediate',
    icon: '⚛️',
    description:  'Najpopularniejsza biblioteka do budowy interfejsów użytkownika.',
    learningTime: '3-6 miesięcy',
    prerequisites: ['javascript'],
    resources: [
      { title: 'React Docs', url: 'https://react.dev' }
    ],
    yourTip: 'Hooks to przełom.  Zacznij od małych komponentów, potem state management.'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    difficulty:  'intermediate',
    icon:  '▲',
    description: 'React framework z SSR, routing i API routes out of the box.',
    learningTime: '4-6 tygodni',
    prerequisites: ['react'],
    resources: [
      { title: 'Next. js Learn', url: 'https://nextjs.org/learn' }
    ],
    yourTip:  'Rozwiązuje 80% problemów Reacta. App Router to przyszłość!'
  },
  {
    id: 'redux',
    name: 'Redux',
    category: 'frontend',
    difficulty: 'intermediate',
    icon: '🔄',
    description: 'State management dla większych aplikacji React.',
    learningTime: '3-4 tygodnie',
    prerequisites: ['react'],
    resources: [
      { title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' }
    ],
    yourTip: 'Redux Toolkit znacznie upraszcza pracę.  Dla małych projektów może być overkill.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category:  'frontend',
    difficulty:  'beginner',
    icon: '💨',
    description: 'Utility-first CSS framework - szybkie stylowanie bez pisania CSS.',
    learningTime: '1-2 tygodnie',
    prerequisites: ['html-css'],
    resources: [
      { title: 'Tailwind Docs', url: 'https://tailwindcss.com' }
    ],
    yourTip: 'Początkowo długie class names dziwią, ale produktywność x10!'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'frontend',
    difficulty: 'beginner',
    icon: '🥾',
    description: 'Popularny CSS framework z gotowymi komponentami.',
    learningTime: '1-2 tygodnie',
    prerequisites: ['html-css'],
    resources: [
      { title: 'Bootstrap Docs', url: 'https://getbootstrap.com' }
    ],
    yourTip: 'Świetny na start, ale Tailwind daje więcej kontroli.'
  },
  {
    id: 'ajax-api',
    name: 'AJAX/API',
    category:  'frontend',
    difficulty: 'intermediate',
    icon: '🔌',
    description: 'Asynchroniczna komunikacja z serwerem - fetch, axios, REST.',
    learningTime: '2-3 tygodnie',
    prerequisites:  ['javascript'],
    resources: [
      { title: 'MDN Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' }
    ],
    yourTip:  'async/await + try/catch to najczystszy sposób.  Promise to podstawa.'
  },

  // BACKEND (3)
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    difficulty:  'intermediate',
    icon:  '🟢',
    description: 'JavaScript runtime do budowy backendu.',
    learningTime: '2-3 miesiące',
    prerequisites: ['javascript'],
    resources: [
      { title: 'Node. js Docs', url: 'https://nodejs.org' }
    ],
    yourTip: 'async/await to klucz. NPM to potęga ekosystemu.'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    difficulty: 'intermediate',
    icon: '🚂',
    description: 'Minimalistyczny framework do budowy API w Node.js.',
    learningTime: '3-4 tygodnie',
    prerequisites: ['nodejs'],
    resources: [
      { title: 'Express Docs', url: 'https://expressjs.com' }
    ],
    yourTip: 'Prosty i elastyczny. Middleware pattern to elegancja!'
  },
  {
    id: 'typeorm',
    name: 'TypeORM',
    category: 'backend',
    difficulty: 'intermediate',
    icon: '🔗',
    description: 'ORM dla TypeScript i JavaScript - łatwe zarządzanie bazą danych.',
    learningTime: '3-4 tygodnie',
    prerequisites: ['typescript', 'nodejs'],
    resources: [
      { title: 'TypeORM Docs', url: 'https://typeorm.io' }
    ],
    yourTip: 'Entities i migrations - poznaj je dobrze!'
  },

  // DATABASE (2)
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    difficulty: 'intermediate',
    icon: '🐬',
    description: 'Relacyjna baza danych - najpopularniejsza na świecie.',
    learningTime: '1-2 miesiące',
    prerequisites: [],
    resources: [
      { title: 'MySQL Tutorial', url: 'https://www.mysqltutorial.org' }
    ],
    yourTip: 'SQL to fundamenty. JOIN, indeksy i normalizacja - to musisz znać!'
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'database',
    difficulty: 'beginner',
    icon: '⚡',
    description: 'Open-source Firebase alternative - PostgreSQL + Auth + Realtime.',
    learningTime: '2-3 tygodnie',
    prerequisites: [],
    resources: [
      { title: 'Supabase Docs', url: 'https://supabase.com/docs' }
    ],
    yourTip: 'Fastest way to backend!  Świetne do prototypów i MVP.'
  },

  // TOOLS (7)
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    difficulty: 'beginner',
    icon: '🌿',
    description: 'System kontroli wersji - must-have dla każdego programisty.',
    learningTime: '2-3 tygodnie',
    prerequisites: [],
    resources: [
      { title: 'Git Book', url: 'https://git-scm.com/book' }
    ],
    yourTip: 'commit, push, pull, branch, merge - te 5 komend na start wystarczy!'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    difficulty: 'beginner',
    icon: '🐙',
    description: 'Platforma do hostingu kodu i współpracy - twoje portfolio! ',
    learningTime: '1-2 tygodnie',
    prerequisites: ['git'],
    resources: [
      { title: 'GitHub Skills', url: 'https://skills.github.com' }
    ],
    yourTip: 'Pull Requests, Issues, Actions - to twoje narzędzia pracy zespołowej.'
  },
  {
    id: 'npm',
    name: 'NPM',
    category: 'tools',
    difficulty: 'beginner',
    icon: '📦',
    description: 'Package manager dla Node.js - miliony gotowych bibliotek.',
    learningTime: '1 tydzień',
    prerequisites: ['nodejs'],
    resources: [
      { title: 'NPM Docs', url: 'https://docs.npmjs.com' }
    ],
    yourTip:  'npm install to podstawa. package.json to twój manifest projektu.'
  },
  {
    id: 'yarn',
    name: 'YARN',
    category: 'tools',
    difficulty: 'beginner',
    icon: '🧶',
    description:  'Alternatywny package manager - szybszy niż NPM.',
    learningTime: '3-5 dni',
    prerequisites: ['npm'],
    resources: [
      { title: 'Yarn Docs', url: 'https://yarnpkg.com' }
    ],
    yourTip: 'Workspaces to killer feature dla monorepo.'
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools',
    difficulty: 'beginner',
    icon: '💻',
    description: 'Najpopularniejszy edytor kodu - darmowy i super extensible.',
    learningTime: '1 tydzień',
    prerequisites:  [],
    resources: [
      { title: 'VS Code Docs', url: 'https://code.visualstudio.com/docs' }
    ],
    yourTip: 'Extensions:  ESLint, Prettier, GitLens, Auto Rename Tag - game changers!'
  },
  {
    id: 'webstorm',
    name: 'WebStorm',
    category: 'tools',
    difficulty: 'beginner',
    icon: '🌊',
    description: 'Profesjonalne IDE od JetBrains - wszystko out of the box.',
    learningTime: '1-2 tygodnie',
    prerequisites:  [],
    resources: [
      { title: 'WebStorm Docs', url: 'https://www.jetbrains.com/webstorm' }
    ],
    yourTip: 'Płatne, ale refactoring i debugging są na wyższym poziomie.'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category:  'tools',
    difficulty:  'beginner',
    icon: '▲',
    description: 'Platform do deploymentu - push to GitHub = live website.',
    learningTime: '1-2 dni',
    prerequisites: ['git', 'github'],
    resources:  [
      { title: 'Vercel Docs', url:  'https://vercel.com/docs' }
    ],
    yourTip: 'Connect z GitHub i zapomnij o deployu.  Preview dla każdego PR!'
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'tools',
    difficulty: 'beginner',
    icon: '💬',
    description: 'Komunikator dla zespołów - integracje z wszystkim.',
    learningTime: '2-3 dni',
    prerequisites: [],
    resources: [
      { title: 'Slack Help', url: 'https://slack.com/help' }
    ],
    yourTip: 'Channels, threads, shortcuts - organizacja to klucz.'
  },

  // DESIGN (1)
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'design',
    difficulty: 'intermediate',
    icon: '🎨',
    description: 'Industry standard do grafiki - mockupy, assets, image editing.',
    learningTime: '2-3 miesiące',
    prerequisites: [],
    resources: [
      { title: 'Adobe Tutorials', url: 'https://helpx.adobe.com/photoshop' }
    ],
    yourTip: 'Export for web, slicing, smart objects - to używasz jako dev.'
  }
]

export const categories:  { value: Category; label: string; icon: string }[] = [
  { value: 'frontend', label: 'Frontend', icon: '🎨' },
  { value: 'backend', label:  'Backend', icon: '⚙️' },
  { value:  'database', label: 'Database', icon: '💾' },
  { value:  'tools', label: 'Tools', icon: '🛠️' },
  { value: 'design', label: 'Design', icon: '✨' }
]
```

**Verification**:
- [ ] File has exactly 23 skills
- [ ] All types are properly defined
- [ ] Categories array has 5 items
- [ ] Each skill has all required fields
- [ ] All `yourTip` fields are filled in Polish

---

### T5: Create Custom Hook for State Management // COMPLETED

**Objective**: Build `useSkills` hook to manage state and localStorage

**File to create**:  `src/hooks/useSkills. ts`

**Content** (COMPLETE FILE):

```typescript
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
    localStorage. setItem(STORAGE_KEY, JSON.stringify(skillStatuses))
  }, [skillStatuses])

  const updateSkillStatus = (skillId: string, status: Status) => {
    setSkillStatuses(prev => ({
      ... prev,
      [skillId]:  status
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
```

**Verification**:
- [ ] Hook compiles without errors
- [ ] Returns all 4 functions
- [ ] localStorage operations are safe (SSR check)

---

### T6: Create SkillCard Component // COMPLETED

**Objective**: Build individual skill card component

**File to create**: `src/components/SkillCard.tsx`

**Content** (COMPLETE FILE):

```typescript
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, BookOpen, Circle } from 'lucide-react'
import type { Skill, Status } from '@/data/skills'

interface SkillCardProps {
  skill: Skill
  status?:  Status
  onStatusChange:  (status: Status) => void
  onLearnMore: () => void
}

export function SkillCard({ skill, status, onStatusChange, onLearnMore }: SkillCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500'
  }

  const statusConfig = {
    planned: { label: '📋 Planned', next: 'learning' as Status },
    learning: { label:  '📚 Learning', next: 'completed' as Status },
    completed:  { label: '✅ Completed', next: 'planned' as Status }
  }

  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-3xl flex-shrink-0">{skill.icon}</span>
            <div className="min-w-0">
              <h3 className="font-semibold leading-none truncate">{skill.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {skill.learningTime}
              </p>
            </div>
          </div>
          {status && (
            <Badge variant={status === 'completed' ? 'default' : 'secondary'} className="flex-shrink-0">
              {status === 'completed' && <Check className="w-3 h-3 mr-1" />}
              {status === 'learning' && <Circle className="w-3 h-3 mr-1 animate-pulse" />}
              <span className="hidden sm:inline">{statusConfig[status]?.label}</span>
              <span className="sm:hidden">{status === 'completed' ? '✅' : status === 'learning' ? '📚' : '📋'}</span>
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-3 flex-1">
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {skill.description}
        </p>

        <div className="flex items-center gap-2 mb-2">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${difficultyColors[skill.difficulty]}`} />
          <span className="text-xs capitalize">{skill.difficulty}</span>
        </div>

        {skill.prerequisites. length > 0 && (
          <div className="mt-2">
            <p className="text-xs text-muted-foreground mb-1">Wymagania:</p>
            <div className="flex flex-wrap gap-1">
              {skill.prerequisites.slice(0, 2).map(prereq => (
                <Badge key={prereq} variant="outline" className="text-xs">
                  {prereq}
                </Badge>
              ))}
              {skill.prerequisites.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{skill.prerequisites.length - 2}
                </Badge>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex gap-2 pt-3 border-t">
        <Button
          size="sm"
          variant="outline"
          className="flex-1"
          onClick={onLearnMore}
        >
          <BookOpen className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Details</span>
          <span className="sm:hidden">Info</span>
        </Button>
        
        {status ?  (
          <Button
            size="sm"
            className="flex-1"
            onClick={() => onStatusChange(statusConfig[status].next)}
          >
            {status === 'completed' ? '🔄 Reset' : status === 'learning' ? '✅ Done' : '📚 Start'}
          </Button>
        ) : (
          <Button
            size="sm"
            className="flex-1"
            onClick={() => onStatusChange('planned')}
          >
            + Add
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
```

**Verification**:
- [ ] Component renders without errors
- [ ] All props are properly typed
- [ ] Responsive classes work (sm:inline, etc.)
- [ ] Icons from lucide-react display

---

### T7: Create SkillModal Component // COMPLETED

**Objective**: Build modal with detailed skill information

**File to create**:  `src/components/SkillModal.tsx`

**Content** (COMPLETE FILE):

```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import type { Skill, Status } from '@/data/skills'

interface SkillModalProps {
  skill: Skill
  status?:  Status
  onStatusChange: (status: Status) => void
  onClose: () => void
}

export function SkillModal({ skill, status, onStatusChange, onClose }: SkillModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{skill.icon}</span>
            <div>
              <DialogTitle className="text-2xl">{skill.name}</DialogTitle>
              <DialogDescription className="capitalize">{skill.category}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Co to jest?</h4>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 text-sm">Czas nauki</h4>
              <p className="text-sm">{skill.learningTime}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">Poziom trudności</h4>
              <Badge className="capitalize">{skill.difficulty}</Badge>
            </div>
          </div>

          {skill.prerequisites.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Przed tym naucz się:</h4>
              <div className="flex flex-wrap gap-2">
                {skill.prerequisites. map(prereq => (
                  <Badge key={prereq} variant="secondary">
                    {prereq}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {skill.yourTip && (
            <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                💡 Moja rada:
              </h4>
              <p className="text-sm">{skill.yourTip}</p>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-3">Źródła do nauki:</h4>
            <div className="space-y-2">
              {skill.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors group"
                >
                  <span className="text-sm font-medium">{resource.title}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t">
            {! status ? (
              <Button className="w-full" onClick={() => {
                onStatusChange('planned')
                onClose()
              }}>
                📋 Dodaj do Planned
              </Button>
            ) : status === 'planned' ? (
              <>
                <Button variant="outline" className="flex-1" onClick={() => {
                  onStatusChange('learning')
                  onClose()
                }}>
                  📚 Start Learning
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </>
            ) : status === 'learning' ? (
              <>
                <Button className="flex-1" onClick={() => {
                  onStatusChange('completed')
                  onClose()
                }}>
                  ✅ Mark as Completed
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="flex-1" onClick={() => {
                  onStatusChange('planned')
                  onClose()
                }}>
                  🔄 Reset
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
```

**Verification**:
- [ ] Modal opens and closes properly
- [ ] All sections display correctly
- [ ] External links open in new tab
- [ ] Status change buttons work

---

### T8: Create Main App Component // COMPLETED

**Objective**: Build main App. tsx with all features integrated

**File to modify**: `src/App.tsx`

**Content** (COMPLETE FILE - REPLACE ALL):

```typescript
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { SkillCard } from '@/components/SkillCard'
import { SkillModal } from '@/components/SkillModal'
import { useSkills } from '@/hooks/useSkills'
import { skillsData, categories, type Skill } from '@/data/skills'

function App() {
  const { skillStatuses, updateSkillStatus, getProgress } = useSkills()
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredSkills = selectedCategory === 'all' 
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory)

  const progress = getProgress()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">
            🚀 Dev Skills Tracker
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Śledź swoją ścieżkę web developera - od podstaw do mastery
          </p>
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
                {progress. planned}
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
                onLearnMore={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
        </Tabs>
      </main>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          status={skillStatuses[selectedSkill. id]}
          onStatusChange={(status) => updateSkillStatus(selectedSkill.id, status)}
          onClose={() => setSelectedSkill(null)}
        />
      )}

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Made with ❤️ for <strong>Adepci IT 2025</strong> conference
          </p>
          <p className="mt-1">
            Koło Cybersecurity WSB-NLU
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
```

**Verification**:
- [ ] App renders without errors
- [ ] All 23 skills display
- [ ] Tabs filter correctly
- [ ] Progress bar updates
- [ ] Modal opens when clicking Details

---

### T9: Update index.html // COMPLETED

**Objective**: Set proper page title and meta tags

**File to modify**: `index.html`

**Content** (REPLACE ALL):

```html
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dev Skills Tracker | Adepci IT 2025</title>
    <meta name="description" content="Śledź swoją ścieżkę web developera - od podstaw do mastery" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main. tsx"></script>
  </body>
</html>
```

**Verification**:
- [ ] Browser tab shows correct title
- [ ] Page lang is set to "pl"

---

### T10: Test All Features // completed

**Objective**: Verify all functionality works correctly

**Manual tests to perform**:

1. **Skill Display**:
   - [ ] All 23 skills are visible
   - [ ] Icons (emojis) display correctly
   - [ ] Cards look good on desktop and mobile

2. **Status Changes**: 
   - [ ] Click "+ Add" → skill goes to Planned
   - [ ] Click "Start" → skill goes to Learning
   - [ ] Click "Done" → skill goes to Completed
   - [ ] Click "Reset" → skill goes back to Planned
   - [ ] Badge updates with correct icon

3. **Progress Dashboard**:
   - [ ] Progress bar shows 0% initially
   - [ ] Progress updates when changing status
   - [ ] Metrics (Learning/Completed/Planned) are correct

4. **Category Filters**:
   - [ ] "All" shows all 23 skills
   - [ ] "Frontend" shows 9 skills
   - [ ] "Backend" shows 3 skills
   - [ ] "Database" shows 2 skills
   - [ ] "Tools" shows 7 skills
   - [ ] "Design" shows 1 skill

5. **Modal**:
   - [ ] Click "Details" opens modal
   - [ ] Modal shows all sections
   - [ ] Resource links work (open in new tab)
   - [ ] "Moja rada" section displays
   - [ ] Status buttons work
   - [ ] Close button works

6. **Data Persistence**:
   - [ ] Set some skills to different statuses
   - [ ] Refresh page (F5)
   - [ ] Data is still there (localStorage works)

7. **Responsive Design**:
   - [ ] Open DevTools (F12)
   - [ ] Toggle device toolbar (mobile view)
   - [ ] Check layout on phone size (375px)
   - [ ] Check layout on tablet (768px)
   - [ ] Check layout on desktop (1280px)

8. **Dark Mode** (optional):
   - [ ] Toggle dark mode in browser/OS
   - [ ] App switches to dark theme

9. **Console Check**:
   - [ ] Open DevTools console
   - [ ] No errors (red messages)
   - [ ] No warnings about missing keys

10. **Performance**:
    - [ ] Page loads in < 2 seconds
    - [ ] Interactions are smooth (no lag)

**Fix any issues found before proceeding to T11.**

---

### T11: Build for Production // completed

**Objective**: Create optimized production build

**Commands**:
```bash
npm run build
```

**Verification**:
- [ ] Build completes without errors
- [ ] `dist/` folder is created
- [ ] Check build output for size warnings

**Expected output**:
```
dist/index.html                   X. XX kB
dist/assets/index-XXXXX.css      XX.XX kB
dist/assets/index-XXXXX.js      XXX.XX kB
```

**Test production build locally**:
```bash
npm run preview
```

- [ ] App works at http://localhost:4173
- [ ] All features work in production build

---

### T12: Create README.md

**Objective**: Document the project

**File to create/modify**: `README.md`

**Content** (COMPLETE FILE):

````markdown
# 🚀 Dev Skills Tracker

Interaktywna aplikacja do śledzenia postępów w nauce technologii web developerskich. 

Stworzona na konferencję **Adepci IT 2025** przez Koło Cybersecurity WSB-NLU.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3-blue)

## ✨ Features

- 📊 **Progress Tracking** - Śledź swój postęp w nauce
- 🎯 **3 statusy** - Planned → Learning → Completed
- 🏷️ **Kategorie** - Frontend, Backend, Database, Tools, Design
- 💡 **Personal Tips** - Praktyczne rady od doświadczonego developera
- 💾 **LocalStorage** - Twój postęp jest zapisywany automatycznie
- 🎨 **shadcn/ui** - Piękne, dostępne komponenty
- 📱 **Responsive** - Działa na każdym urządzeniu
- 🌙 **Dark Mode** - Wbudowana obsługa trybu ciemnego

## 🚀 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/SilverStorm2/dev-skills-tracker.git
cd dev-skills-tracker

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:5173
```

## 🏗️ Tech Stack

- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **LocalStorage API** - Data persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn components
│   ├── SkillCard.tsx    # Karta skill'a
│   └── SkillModal.tsx   # Modal ze szczegółami
├── data/
│   └── skills.ts        # Dane technologii (23 skills)
├── hooks/
│   └── useSkills.ts     # Logic + localStorage
├── lib/
│   └── utils. ts         # Helper functions
├── App.tsx              # Main component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Jak używać? 

1. **Browse skills** - Przeglądaj dostępne technologie
2. **Filter** - Użyj tabs żeby filtrować po kategorii
3. **Learn more** - Kliknij "Details" żeby zobaczyć więcej info
4. **Track progress**: 
   - Kliknij "+ Add" żeby dodać do Planned
   - "Start" żeby przenieść do Learning
   - "Done" żeby oznaczyć jako Completed
5. **Monitor** - Zobacz swój postęp na górze strony

## 🔧 Customization

### Dodaj własną technologię

Edytuj `src/data/skills.ts`:

```typescript
{
  id: 'your-tech',
  name: 'Your Technology',
  category: 'frontend',
  difficulty: 'beginner',
  icon: '🚀',
  description: 'Your description',
  learningTime: '2 weeks',
  prerequisites: [],
  resources: [
    { title: 'Docs', url: 'https://.. .' }
  ],
  yourTip: 'Your personal tip!'
}
```

## 🚀 Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy!  ✨

### Manual build

```bash
npm run build
# Upload dist/ folder to your hosting
```

## 🎓 Dla studentów

Ten projekt to świetny starter do nauki: 
- React components & hooks
- TypeScript types & interfaces
- Tailwind CSS utility-first approach
- LocalStorage API
- Responsive design

### Challenges (dla chętnych):
- [ ] Dodaj search bar
- [ ] Sortowanie (alfabetycznie, po trudności)
- [ ] Export postępu do JSON
- [ ] Share progress (URL params)
- [ ] Integracja z Supabase

## 📝 License

MIT - use freely for learning! 

## 👩‍💻 Author

**Koło Cybersecurity WSB-NLU**

Prezentacja: *Adepci IT 2025*

---

Made with ❤️ and lots of ☕