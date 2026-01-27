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
  skill: Skill | null
  open: boolean
  onOpenChange: (open: boolean) => void
  status?: Status
  onStatusChange: (status: Status) => void
}

export function SkillModal({
  skill,
  open,
  onOpenChange,
  status,
  onStatusChange,
}: SkillModalProps) {
  if (!skill) return null

  const handleClose = () => onOpenChange(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
                {skill.prerequisites.map(prereq => (
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
            {!status ? (
              <Button className="w-full" onClick={() => {
                onStatusChange('planned')
                handleClose()
              }}>
                📋 Dodaj do Planned
              </Button>
            ) : status === 'planned' ? (
              <>
                <Button variant="outline" className="flex-1" onClick={() => {
                  onStatusChange('learning')
                  handleClose()
                }}>
                  📚 Start Learning
                </Button>
                <Button variant="ghost" onClick={handleClose}>
                  Close
                </Button>
              </>
            ) : status === 'learning' ? (
              <>
                <Button className="flex-1" onClick={() => {
                  onStatusChange('completed')
                  handleClose()
                }}>
                  ✅ Mark as Completed
                </Button>
                <Button variant="ghost" onClick={handleClose}>
                  Close
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="flex-1" onClick={() => {
                  onStatusChange('planned')
                  handleClose()
                }}>
                  🔄 Reset
                </Button>
                <Button variant="ghost" onClick={handleClose}>
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
