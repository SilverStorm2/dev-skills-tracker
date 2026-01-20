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
      { title: 'Kevin Powell (YouTube)', url: 'https://youtube.com/@KevinPowell' },
      { title: 'HTML Special Characters', url: 'https://www.html.am/reference/html-special-characters.cfm' },
      { title: 'CodePen', url: 'https://codepen.io/' },
      { title: 'Preprocesory CSS - wstęp do SASS/SCSS', url: 'https://www.rekinysukcesu.pl/blog/internet/preprocesory-css-po-co-mi-to-wstep-do-sass-scss' },
      { title: 'VS Code CSS Docs', url: 'https://code.visualstudio.com/docs/languages/css' }
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
      { title: 'FreeCodeCamp', url: 'https://freecodecamp.org' },
      { title: 'Notatki z JavaScript Syntax', url: 'https://pktiuk.github.io/notatki_z_jezykow/Web%C3%B3wka%F0%9F%8C%8D/1_javascript_syntax/' },
      { title: 'Promotic JS Statements', url: 'https://www.promotic.eu/pl/pmdoc/ScriptLangs/JavaScript/Statmn/GroupStatmn.htm' },
      { title: 'JavaScript Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=4JoImVKwieY' },
      { title: 'W3Schools JavaScript', url: 'https://www.w3schools.com/js/' }
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
      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/' },
      { title: 'React + TypeScript', url: 'https://react.dev/learn/typescript' },
      { title: 'TypeScript - przewodnik i zalety', url: 'https://seo-www.pl/blog/typescript-co-to-przewodnik-po-jezyku-i-jego-zaletach/' },
      { title: 'W3Schools TypeScript', url: 'https://www.w3schools.com/typescript/typescript_intro.php' },
      { title: 'VS Code TypeScript Tutorial', url: 'https://code.visualstudio.com/docs/typescript/typescript-tutorial' }
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
      { title: 'React Docs', url: 'https://react.dev' },
      { title: 'React Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=DN73tm89cgU' },
      { title: 'Zrozum React', url: 'https://zrozumreact.pl/' },
      { title: 'React Native', url: 'https://reactnative.dev/' },
      { title: 'W3Schools React', url: 'https://www.w3schools.com/REACT/DEFAULT.ASP' }
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
      { title: 'Next. js Learn', url: 'https://nextjs.org/learn' },
      { title: 'Next.js', url: 'https://nextjs.org/' },
      { title: 'Next.js - wady i zalety', url: 'https://imakeable.com/nasz-blog/nextjs-co-to-za-framework-wady-i-zalety-tego-rozwiazania-technologicznego' },
      { title: 'Vercel Next.js', url: 'https://vercel.com/frameworks/nextjs' }
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
      { title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
      { title: 'Redux i React - czego nie robić', url: 'https://bulldogjob.pl/readme/redux-i-react-czego-nie-robic' },
      { title: 'Redux krok po kroku', url: 'https://www.4spacje.pl/article/redux-krok-po-kroku-jak-zaczac-korzystac-z-tej-biblioteki' },
      { title: 'Memoizacja selektorów', url: 'https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization' }
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
      { title: 'Tailwind Docs', url: 'https://tailwindcss.com' },
      { title: 'Podstawowy przewodnik po Tailwind CSS', url: 'https://www.droptica.pl/blog/podstawowy-przewodnik-po-tailwind-css-czym-jest-i-jak-go-uzywac/' },
      { title: 'Tailwind CSS - przewodnik utility-first', url: 'https://seo-www.pl/blog/tailwind-css-co-to-jest-przewodnik-po-frameworku-utility-first/' },
      { title: 'Tailwind CSS - nowoczesne stylowanie', url: 'https://devstockacademy.pl/blog/programowanie-i-technologie-webowe/tailwind-css-nowoczesne-podejscie-do-stylowania/?srsltid=AfmBOoohJwPRoXmmjMJq2YZxY3OIRM3Xuw5pNMXMuFexngXjPm0KGVz8' },
      { title: 'Tailwind Flex', url: 'https://tailwindflex.com/' }
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
      { title: 'Bootstrap Docs', url: 'https://getbootstrap.com' },
      { title: 'Bootstrap - przewodnik dla web developerów', url: 'https://seo-www.pl/blog/bootstrap-co-to-jest-przewodnik-dla-web-developerow/' },
      { title: 'Bootstrap - definicja (cyberfolks)', url: 'https://cyberfolks.pl/slownik/bootstrap/' },
      { title: 'Bootstrap GitHub', url: 'https://github.com/twbs/bootstrap' },
      { title: 'W3Schools Bootstrap 5', url: 'https://www.w3schools.com/bootstrap5/bootstrap_get_started.php' },
      { title: 'Bootstrap Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=Hgvx9hYlwe8' },
      { title: 'Bootstrap - wprowadzenie', url: 'https://www.geotechnology.pl/blog/bootstrap/' }
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
      { title: 'MDN Fetch API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
      { title: 'Praktyczne zastosowania API - przykłady', url: 'https://devstockacademy.pl/blog/narzedzia-i-automatyzacja/praktyczne-zastosowania-api-przyklady/?srsltid=AfmBOorg70ELk-P6YODKK1UzAvAtSLQ9cd_GHlk6EHjzeNuv-F6jDvNY' },
      { title: 'JSONPlaceholder (mock REST API)', url: 'https://jsonplaceholder.typicode.com' },
      { title: 'Open-Meteo API', url: 'https://api.open-meteo.com/v1/forecast' },
      { title: 'Dog CEO API', url: 'https://dog.ceo/api' },
      { title: 'CoinGecko API', url: 'https://api.coingecko.com/api/v3' },
      { title: 'JokeAPI', url: 'https://v2.jokeapi.dev' }
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
      { title: 'Node. js Docs', url: 'https://nodejs.org' },
      { title: 'Node.js - co jest i co można zbudować', url: 'https://www.droptica.pl/blog/nodejs-co-jest-i-co-mozna-zbudowac-przy-jego-pomocy/' },
      { title: 'Node.js GitHub', url: 'https://github.com/nodejs/node' },
      { title: 'VS Code Node.js Tutorial', url: 'https://code.visualstudio.com/docs/nodejs/nodejs-tutorial' },
      { title: 'Node.js Releases', url: 'https://github.com/nodejs/node/releases' }
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
      { title: 'Express Docs', url: 'https://expressjs.com' },
      { title: 'Express.js GitHub', url: 'https://github.com/expressjs/express' },
      { title: 'Express.js - definicja (cyberfolks)', url: 'https://cyberfolks.pl/slownik/express-js/' },
      { title: 'Express.js - przewodnik', url: 'https://seo-www.pl/blog/express-js-co-to-przewodnik-po-najpopularniejszym-frameworku-node/' },
      { title: 'W3Schools Express.js', url: 'https://www.w3schools.com/nodejs/nodejs_express.asp' },
      { title: 'Best Practices for Express Project Structure', url: 'https://dev.to/moibra/best-practices-for-structuring-an-expressjs-project-148i' }
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
      { title: 'TypeORM Docs', url: 'https://typeorm.io' },
      { title: 'TypeORM GitHub', url: 'https://github.com/typeorm/typeorm' },
      { title: 'TypeORM - pierwsze kroki', url: 'https://fsgeek.pl/post/typeorm-pierwsze-kroki/' },
      { title: 'TypeORM - dlaczego warto', url: 'https://boringowl.io/blog/typeorm-czym-jest-i-dlaczego-warto-go-uzywac-w-projektach-typescript' },
      { title: 'TypeORM - ORM którego szukałam', url: 'https://solutionchaser.com/typeorm-orm-ktorego-szukalam-cale-zycie/' },
      { title: 'TypeScript w praktyce (Droptica)', url: 'https://www.droptica.pl/blog/co-jest-typescript-i-dlaczego-sprawdzi-sie-w-twoich-projektach/' }
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
      { title: 'MySQL Tutorial', url: 'https://www.mysqltutorial.org' },
      { title: 'Co to jest baza MySQL', url: 'https://progreso.pl/pl/pomoc/co-to-jest-baza-danych-mysql-i-dlaczego-jest-wazna-dla-strony-internetowej' },
      { title: 'MySQL GitHub', url: 'https://github.com/mysql' },
      { title: 'MySQL Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=Pk5gizIi0ws' },
      { title: 'Create TABLE w SQL', url: 'https://informatyk.pro/create-table-tworzenie-tabel-w-sql-kurs-sql/' }
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
      { title: 'Supabase Docs', url: 'https://supabase.com/docs' },
      { title: 'Supabase', url: 'https://supabase.com/' },
      { title: 'Supabase on Vercel Marketplace', url: 'https://vercel.com/marketplace/supabase' },
      { title: 'Supabase GitHub', url: 'https://github.com/supabase' },
      { title: 'Supabase - artykuły (Boring Owl)', url: 'https://boringowl.io/tag/supabase' },
      { title: 'Supabase Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=VaCnLx_UMjk' },
      { title: 'Supabase Full Guide (YouTube)', url: 'https://www.youtube.com/watch?v=kyphLGnSz6Q' }
    ],
    yourTip: 'Fastest way to backend!  Świetne do prototypów i MVP.'
  },

  // TOOLS (8)
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
      { title: 'Git Book', url: 'https://git-scm.com/book' },
      { title: 'Git Tutorial (YouTube)', url: 'https://www.youtube.com/watch?v=j-EhgAi-u-Y' },
      { title: 'Atlassian Git Tutorials', url: 'https://www.atlassian.com/pl/git/tutorials/what-is-git' },
      { title: 'Git i GitHub - wprowadzenie', url: 'https://cyberfolks.pl/blog/git-a-github-wprowadzenie-i-konfiguracja/' },
      { title: 'Vercel Git Docs', url: 'https://vercel.com/docs/git' },
      { title: 'Codecademy Learn Git', url: 'https://www.codecademy.com/learn/learn-git' }
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
      { title: 'GitHub Skills', url: 'https://skills.github.com' },
      { title: 'GitHub', url: 'https://github.com/' },
      { title: 'GitHub Copilot', url: 'https://github.com/copilot' },
      { title: 'VS Code GitHub Docs', url: 'https://code.visualstudio.com/docs/sourcecontrol/github' },
      { title: 'GitHub YouTube', url: 'https://www.youtube.com/github' }
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
      { title: 'NPM Docs', url: 'https://docs.npmjs.com' },
      { title: 'How to Create an NPM Library', url: 'https://www.freecodecamp.org/news/how-to-create-an-npm-library/' },
      { title: 'npm install (CLI)', url: 'https://docs.npmjs.com/cli/v9/commands/npm-install' },
      { title: 'NPM - artykuły (Boring Owl)', url: 'https://boringowl.io/tag/npm' },
      { title: 'Node/ES6 (kursjs.pl)', url: 'https://kursjs.pl/kurs/es6/node' },
      { title: 'Co to jest NPM?', url: 'https://zacznijprogramowac.net/slowniczek-javascript/co-to-jest-npm/' }
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
      { title: 'Yarn Docs', url: 'https://yarnpkg.com' },
      { title: 'Yarn (npm)', url: 'https://www.npmjs.com/package/yarn' },
      { title: 'Yarn - artykuły (Boring Owl)', url: 'https://boringowl.io/tag/yarn' },
      { title: 'Co to jest Yarn?', url: 'https://howtointerview.pl/definicje/co-to-jest-yarn/11673/' },
      { title: 'Analiza porównawcza menadżerów pakietów JavaScript – yarn oraz NPM', url: 'https://yadda.icm.edu.pl/baztech/element/bwmeta1.element.baztech-c0b36e36-17e0-4bf4-bae4-ac79822dcd72' }
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
      { title: 'VS Code Docs', url: 'https://code.visualstudio.com/docs' },
      { title: 'VS Code Marketplace', url: 'https://marketplace.visualstudio.com/vscode' },
      { title: 'Złośliwe wtyczki w VS Code', url: 'https://sekurak.pl/nie-tylko-przegladarki-zlosliwe-wtyczki-w-visual-studio-code/' },
      { title: 'VS Code - Getting Started (YouTube)', url: 'https://www.youtube.com/watch?v=EUJlVYggR1Y' },
      { title: 'VS Code GitHub', url: 'https://github.com/microsoft/vscode' }
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
      { title: 'WebStorm Docs', url: 'https://www.jetbrains.com/webstorm' },
      { title: 'WebStorm - jak wykorzystać możliwości', url: 'https://boringowl.io/blog/jak-maksymalnie-wykorzystac-mozliwosci-webstorm-w-tworzeniu-aplikacji-webowych' }
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
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'tools',
    difficulty: 'beginner',
    icon: '🤖',
    description: 'AI asystent do pisania kodu - podpowiedzi w edytorze w czasie rzeczywistym.',
    learningTime: '2-3 dni',
    prerequisites: ['git', 'github'],
    resources: [
      { title: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
      { title: 'Copilot Docs', url: 'https://docs.github.com/en/copilot' },
      { title: 'Getting started with Copilot in VS Code', url: 'https://code.visualstudio.com/docs/copilot/overview' }
    ],
    yourTip: 'Traktuj podpowiedzi jako szkic - zawsze weryfikuj i poprawiaj.'
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
