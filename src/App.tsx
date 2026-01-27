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
  const {
    skillStatuses,
    updateSkillStatus,
    getProgress,
    loading: skillsLoading,
  } = useSkills()
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [authModalOpen, setAuthModalOpen] = useState(false)

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory)

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
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.icon} <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
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
