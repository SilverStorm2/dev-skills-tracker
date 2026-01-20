# Dev Skills Tracker - MVP Specification

## 📋 Przegląd projektu

**Nazwa**: Dev Skills Tracker
**Typ**: Single Page Application (SPA)
**Technologie**: React 18 + TypeScript + Tailwind CSS + shadcn/ui
**Cel**: Interaktywna aplikacja do śledzenia postępów w nauce technologii web developerskich

**Kontekst**: Projekt prezentacyjny dla konferencji "Adepci IT 2026" - pokazuje modern web development stack w praktyce. 

---

## 🎯 Główne funkcjonalności

### 1. Wyświetlanie technologii (MUST HAVE)
- Grid kart z technologiami web developerskimi
- Każda karta zawiera:
  - Emoji icon
  - Nazwa technologii
  - Kategoria (Frontend/Backend/Database/Tools/Design)
  - Opis (krótki)
  - Poziom trudności (beginner/intermediate/advanced)
  - Czas nauki (szacowany)
  - Badge z aktualnym statusem (jeśli ustawiony)

### 2. Śledzenie postępów (MUST HAVE)
- 3 statusy nauki: 
  - **Planned** 📋 - planowane do nauki
  - **Learning** 📚 - obecnie się uczę
  - **Completed** ✅ - opanowane
- Zmiana statusu przez kliknięcie przycisku na karcie
- Persistence w localStorage (brak backendu)
- Progress bar na górze strony pokazujący % ukończenia

### 3. Filtrowanie (MUST HAVE)
- Tabs do filtrowania po kategorii: 
  - All (wszystkie)
  - Frontend
  - Backend
  - Database
  - Tools
  - Design
- Licznik ile technologii w każdej kategorii

### 4. Modal ze szczegółami (MUST HAVE)
- Kliknięcie "Details" otwiera modal z: 
  - Pełnym opisem
  - Czasem nauki
  - Poziomem trudności
  - Prerequisites (wymagane wcześniejsze umiejętności)
  - Osobistą radą autora ("Moja rada:")
  - Linkami do resources (dokumentacja, tutoriale)
  - Akcjami do zmiany statusu

### 5. Dashboard postępów (MUST HAVE)
- Sekcja na górze strony z:
  - Progress bar (% ukończonych)
  - 3 metryki:
    - Liczba "Learning"
    - Liczba "Completed"
    - Liczba "Planned"

---

## 📊 Dane

### Technologie do uwzględnienia (z obrazka użytkownika):

**Frontend** (9):
- HTML/CSS/SASS
- JavaScript
- TypeScript
- React. js
- Next.js
- Redux
- Tailwind CSS
- Bootstrap
- AJAX/API

**Backend** (3):
- Node.js
- Express. js
- TypeORM

**Database** (2):
- MySQL
- Supabase

**Tools** (7):
- Git
- GitHub
- NPM
- YARN
- VS Code
- WebStorm
- Vercel
- Slack
- GitHub Copilot (AI wspomagajacy pisanie kodu)

**Design** (1):
- Adobe Photoshop

**RAZEM:  24 technologie**

### Struktura danych (TypeScript):

```typescript
interface Skill {
  id: string                    // 'react', 'typescript', etc.
  name: string                  // 'React. js'
  category: Category            // 'frontend' | 'backend' | 'database' | 'tools' | 'design'
  difficulty:  Difficulty        // 'beginner' | 'intermediate' | 'advanced'
  icon: string                  // Emoji:  '⚛️', '📘', etc.
  description: string           // Krótki opis (1-2 zdania)
  learningTime: string          // '2-3 miesiące', '1 tydzień', etc.
  prerequisites: string[]       // ['javascript', 'html-css']
  resources: Resource[]         // Linki do nauki
  yourTip?:  string             // Osobista rada autora (opcjonalne)
}

interface Resource {
  title: string                 // 'React Docs'
  url: string                   // 'https://react.dev'
}

type Status = 'planned' | 'learning' | 'completed'
```

---

## 🎨 UI/UX Design

### Layout (Desktop):

```
┌─────────────────────────────────────────────────────┐
│ Header:  Tytuł + Opis                                │
├─────────────────────────────────────────────────────┤
│ Progress Section:                                    │
│ [████████░░] 35% (8/23 skills)                     │
│ Learning:  3 | Completed: 8 | Planned: 5            │
├─────────────────────────────────────────────────────┤
│ Tabs:  [All] [Frontend] [Backend] [Database]...      │
├─────────────────────────────────────────────────────┤
│ ┌────────┐ ┌────────┐ ┌────────┐                  │
│ │ Card 1 │ │ Card 2 │ │ Card 3 │                  │
│ │  React │ │ Node.js│ │ MySQL  │                  │
│ └────────┘ └────────┘ └────────┘                  │
│ ┌────────┐ ┌────────┐ ┌────────┐                  │
│ │ Card 4 │ │ Card 5 │ │ Card 6 │                  │
│ └────────┘ └────────┘ └────────┘                  │
├─────────────────────────────────────────────────────┤
│ Footer: Made for Adepci IT 2026                    │
└─────────────────────────────────────────────────────┘
```

### Card Design:

```
┌────────────────────────────────┐
│ 🎨 HTML/CSS/SASS    [✅ Done]  │
├────────────────────────────────┤
│ Fundamenty web developmentu -  │
│ struktura i stylowanie stron.   │
│                                │
│ 🟢 beginner | 2-4 tygodnie    │
│                                │
│ [📖 Details] [Next →]          │
└────────────────────────────────┘
```

### Modal Design:

```
┌──────────────────────────────────────┐
│ ⚛️  React.js                   [×]  │
│ frontend                             │
├──────────────────────────────────────┤
│ Co to jest?                           │
│ Najpopularniejsza biblioteka do...    │
│                                      │
│ Czas nauki: 3-6 miesięcy             │
│ Trudność: [intermediate]             │
│                                      │
│ Przed tym naucz się:                  │
│ [javascript] [html-css]              │
│                                      │
│ 💡 Moja rada:                        │
│ Hooks to przełom.  Zacznij od...     │
│                                      │
│ Źródła do nauki:                     │
│ → React Docs ↗                       │
│ → React Tutorial ↗                   │
│                                      │
│ [📚 Start Learning]  [Close]         │
└──────────────────────────────────────┘
```

---

## 🏗️ Architektura techniczna

### Struktura folderów:

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (auto-generated)
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── tabs.tsx
│   │   ├── dialog.tsx
│   │   └── progress.tsx
│   ├── SkillCard.tsx          # Karta pojedynczej technologii
│   └── SkillModal.tsx         # Modal ze szczegółami
├── data/
│   └── skills. ts              # Statyczne dane (23 technologie)
├── hooks/
│   └── useSkills.ts           # Custom hook:  state + localStorage
├── lib/
│   └── utils.ts               # Helper functions (cn)
├── App.tsx                    # Main component
├── main.tsx                   # Entry point
└── index.css                  # Global styles + Tailwind
```

### Component hierarchy:

```
App
├── Header
├── ProgressSection
│   └── Progress (shadcn)
├── Tabs (shadcn)
│   └── SkillsGrid
│       └── SkillCard × N
│           ├── Card (shadcn)
│           ├── Badge (shadcn)
│           └── Button (shadcn)
└── SkillModal (conditional)
    └── Dialog (shadcn)
```

### State management:

```typescript
// Custom hook:  useSkills()
const useSkills = () => {
  const [skillStatuses, setSkillStatuses] = useState<Record<string, Status>>({})
  
  // Load from localStorage on mount
  // Save to localStorage on change
  // Return:  { skillStatuses, updateSkillStatus, getProgress, resetProgress }
}

// Usage in App.tsx:
const { skillStatuses, updateSkillStatus, getProgress } = useSkills()
```

### Data flow:

```
localStorage 
    ↕️
useSkills hook (state)
    ↕️
App.tsx (props down)
    ↕️
SkillCard (events up)
```

---

## 🎨 Styling approach

### Tailwind utility classes: 
- Responsive:  `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Colors: Use CSS variables from shadcn theme
- Spacing: Consistent `p-4`, `gap-4`, `space-y-4`
- Hover states: `hover:shadow-md transition-shadow`

### shadcn/ui components:
- Pre-styled, accessible components
- Customizable via Tailwind
- Dark mode support out-of-the-box

### Color coding:
- **Difficulty**:
  - Beginner:  Green (`bg-green-500`)
  - Intermediate: Yellow (`bg-yellow-500`)
  - Advanced: Red (`bg-red-500`)
- **Status**:
  - Planned:  Gray/secondary
  - Learning: Blue (with pulse animation)
  - Completed: Green (with checkmark)

---

## 💾 Data Persistence

### localStorage strategy: 

```typescript
// Key:  'dev-skills-tracker'
// Value: JSON stringified object

{
  "react": "completed",
  "typescript": "learning",
  "nodejs": "planned"
  // ...
}
```

### Operations: 
- **Load**: On app mount (`useState` initializer)
- **Save**: On every status change (`useEffect` with dependency)
- **Clear**: Reset button (optional for MVP)

---

## 📱 Responsive Design

### Breakpoints:
- **Mobile** (< 768px): 1 column grid, simplified badges
- **Tablet** (768px - 1024px): 2 column grid
- **Desktop** (> 1024px): 3 column grid

### Mobile optimizations:
- Hamburger menu for tabs (NOT IN MVP - just wrap tabs)
- Stack card content vertically
- Full-width modal
- Touch-friendly buttons (min 44px height)

---

## ⚡ Performance

### Optimizations (for MVP):
- No lazy loading (23 items = small dataset)
- No virtualization needed
- Use `key` prop for lists
- Memoization NOT needed (premature optimization)

### Bundle size target:
- < 200KB gzipped (achievable with Vite + React + Tailwind)

---

## 🚀 Deployment

### Platform:  Vercel (recommended)

**Why?**
- Zero config for Vite apps
- Automatic deployments from GitHub
- Free tier sufficient
- Preview deployments for PRs

**Steps:**
1. Push to GitHub
2. Import repo on vercel.com
3. Auto-detect Vite
4. Deploy!

### Environment: 
- No environment variables needed
- No backend
- Static hosting only

---

## 🧪 Testing (Optional - NOT in 5h MVP)

For future iterations: 
- **Unit tests**:  Vitest + React Testing Library
- **E2E tests**: Playwright
- **Coverage target**: 80%+

---

## ✅ Definition of Done

MVP is complete when: 

- [ ] All 23 technologies are displayed as cards
- [ ] Cards show:  name, icon, description, difficulty, time, prerequisites
- [ ] User can set status:  Planned → Learning → Completed
- [ ] Status is saved to localStorage
- [ ] Progress bar shows % completion
- [ ] Dashboard shows 3 metrics (learning/completed/planned)
- [ ] Tabs filter by category (5 categories + All)
- [ ] Modal opens with full details on "Details" button click
- [ ] Modal shows resources with external links
- [ ] Modal shows "Moja rada" section
- [ ] App is responsive (mobile/tablet/desktop)
- [ ] App is deployed to Vercel
- [ ] Dark mode works (shadcn default)

---

## 🚫 Out of Scope (for MVP)

These features are EXPLICITLY NOT in MVP: 

- ❌ User authentication
- ❌ Backend / API
- ❌ Database (use localStorage only)
- ❌ Search functionality
- ❌ Sorting
- ❌ Export progress
- ❌ Share progress (URL params)
- ❌ Multiple users
- ❌ Comments/reviews
- ❌ Admin panel
- ❌ Analytics
- ❌ PWA features
- ❌ i18n (Polish only)

---

## 📚 Resources for implementation

### Documentation:
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vite Guide](https://vitejs.dev/guide/)

### Key APIs:
- `useState` - local state
- `useEffect` - localStorage sync
- `localStorage. getItem/setItem` - persistence
- `Array.filter` - category filtering
- `Array.map` - rendering lists

---

## 🎓 Educational Value

This project teaches: 

1. **React fundamentals**: 
   - Functional components
   - Props & state
   - Hooks (useState, useEffect)
   - Custom hooks
   - Conditional rendering
   - Lists & keys

2. **TypeScript**:
   - Interfaces
   - Type aliases
   - Union types
   - Generics (Record<string, Status>)
   - Type safety in components

3. **Tailwind CSS**:
   - Utility-first approach
   - Responsive design
   - Dark mode
   - Custom theming

4. **Modern tooling**:
   - Vite (fast dev server)
   - Component libraries (shadcn/ui)
   - Path aliases (@/)
   - TypeScript in React

5. **Best practices**:
   - Component composition
   - Separation of concerns
   - Data-driven UI
   - Accessibility (via shadcn)

---

## 📊 Success Metrics

**For presentation:**
- ✅ App loads in < 2s
- ✅ All features work on mobile
- ✅ No console errors
- ✅ Code is clean and readable
- ✅ Students can understand structure

**For students:**
- ✅ Can clone and run locally
- ✅ Can add new technology easily
- ✅ Can modify styling
- ✅ Can understand data flow

---

## 🎬 Demo Script (for presentation)

**5 min live demo:**

1. **[1 min] Overview**
   - Show homepage
   - Explain concept:  "Track your learning journey"
   - Point out progress bar

2. **[2 min] Core functionality**
   - Click "+ Add" on React card → goes to Planned
   - Click "Start" → moves to Learning
   - Show progress bar update
   - Click "Done" → Completed (with checkmark)
   - Filter by Frontend tab

3. **[1 min] Details**
   - Click "Details" on React
   - Show modal:  description, prerequisites, resources
   - Highlight "Moja rada" section
   - Click external link

4. **[1 min] Code walkthrough**
   - Show SkillCard component (simple, clean)
   - Show skills. ts data structure
   - Show useSkills hook (localStorage)
   - Mention shadcn/ui components

**Key points to emphasize:**
- "Prosty kod - studenci mogą odtworzyć"
- "Wszystkie umiejętności z mojego stacku"
- "localStorage - bez backendu!"
- "shadcn/ui - gotowe komponenty"
- "TypeScript - type safety"

---

## 🔄 Future Iterations (Post-MVP)

**Phase 2** (if time permits):
- Search bar
- Sorting options
- Export to JSON
- Reset progress button

**Phase 3** (after conference):
- Supabase integration (multi-user)
- Share progress via URL
- Recommended learning paths
- Community ratings

**Phase 4** (long-term):
- AI-powered recommendations
- Integration with GitHub (show real projects)
- Gamification (badges, streaks)
- Mobile app (React Native)

---

## 📝 Notes

- Keep it SIMPLE - this is a teaching project
- Code should be self-documenting
- Prioritize readability over cleverness
- Use comments sparingly (good naming > comments)
- Every technology should have "yourTip" filled in
- Test on mobile BEFORE presentation
- Have offline backup (no wifi dependency)

---

## ✅ Final Checklist

Before presentation: 

- [ ] Test all buttons
- [ ] Test localStorage (private browsing)
- [ ] Test on phone
- [ ] Check all external links work
- [ ] Verify dark mode toggle
- [ ] Check for typos in Polish text
- [ ] Test on different browsers (Chrome, Firefox)
- [ ] Prepare localhost backup (in case Vercel down)
- [ ] Take screenshots for slides
- [ ] Record screen capture (backup demo)

---

**Estimated time: 4-5 hours**
**Lines of code:  ~800-1000**
**Components: 2 main + 6 shadcn**
**Technologies showcased: 23**

Good luck!  🚀
