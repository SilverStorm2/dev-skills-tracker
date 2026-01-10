export type Category = 'frontend' | 'backend' | 'database' | 'tools' | 'design'
export type Status = 'planned' | 'learning' | 'completed'
export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface Skill {
  id: string
  name: string
  category: Category
  difficulty: Difficulty
  icon: string
  description: string
  learningTime: string
  prerequisites: string[]
  resources: { title: string; url: string }[]
  yourTip?: string
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
    prerequisites: [],
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
    resources: [
      { title: 'JavaScript.info', url: 'https://javascript.info' },
      { title: 'FreeCodeCamp', url: 'https://freecodecamp.org' }
    ],
    yourTip: 'ES6+ to standard.  Najpierw podstawy, potem asynchroniczność i DOM.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    difficulty: 'intermediate',
    icon: '📘',
    description: 'JavaScript z typowaniem - łapie błędy przed uruchomieniem.',
    learningTime: '3-4 tygodnie',
    prerequisites: ['javascript'],
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
    description: 'Najpopularniejsza biblioteka do budowy interfejsów użytkownika.',
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
    difficulty: 'intermediate',
    icon: '▲',
    description: 'React framework z SSR, routing i API routes out of the box.',
    learningTime: '4-6 tygodni',
    prerequisites: ['react'],
    resources: [
      { title: 'Next. js Learn', url: 'https://nextjs.org/learn' }
    ],
    yourTip: 'Rozwiązuje 80% problemów Reacta. App Router to przyszłość!'
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
    category: 'frontend',
    difficulty: 'beginner',
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
    category: 'frontend',
    difficulty: 'intermediate',
    icon: '🔌',
    description: 'Asynchroniczna komunikacja z serwerem - fetch, axios, REST.',
    learningTime: '2-3 tygodnie',
    prerequisites: ['javascript'],
    resources: [
      { title: 'MDN Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' }
    ],
    yourTip: 'async/await + try/catch to najczystszy sposób.  Promise to podstawa.'
  },

  // BACKEND (3)
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    difficulty: 'intermediate',
    icon: '🟢',
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
    yourTip: 'npm install to podstawa. package.json to twój manifest projektu.'
  },
  {
    id: 'yarn',
    name: 'YARN',
    category: 'tools',
    difficulty: 'beginner',
    icon: '🧶',
    description: 'Alternatywny package manager - szybszy niż NPM.',
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
    prerequisites: [],
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
    prerequisites: [],
    resources: [
      { title: 'WebStorm Docs', url: 'https://www.jetbrains.com/webstorm' }
    ],
    yourTip: 'Płatne, ale refactoring i debugging są na wyższym poziomie.'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'tools',
    difficulty: 'beginner',
    icon: '▲',
    description: 'Platform do deploymentu - push to GitHub = live website.',
    learningTime: '1-2 dni',
    prerequisites: ['git', 'github'],
    resources: [
      { title: 'Vercel Docs', url: 'https://vercel.com/docs' }
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

export const categories: { value: Category; label: string; icon: string }[] = [
  { value: 'frontend', label: 'Frontend', icon: '🎨' },
  { value: 'backend', label: 'Backend', icon: '⚙️' },
  { value: 'database', label: 'Database', icon: '💾' },
  { value: 'tools', label: 'Tools', icon: '🛠️' },
  { value: 'design', label: 'Design', icon: '✨' }
]
