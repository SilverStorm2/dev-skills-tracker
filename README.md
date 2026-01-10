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
│   └── utils.ts         # Helper functions
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
3. Deploy! ✨

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
