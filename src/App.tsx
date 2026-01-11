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
    <div className="min-h-screen bg-background page-glow">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">
            🚀 Dev Skills Tracker
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Śledź swoją ścieżkę web developera - od podstaw do mastera
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
                onLearnMore={() => setSelectedSkill(skill)}
              />
            ))}
          </div>
        </Tabs>
      </main>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          status={skillStatuses[selectedSkill.id]}
          onStatusChange={(status) => updateSkillStatus(selectedSkill.id, status)}
          onClose={() => setSelectedSkill(null)}
        />
      )}

      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Made with ❤️ for <strong>Adepci IT 2026</strong> conference
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
