import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, BookOpen, Circle } from 'lucide-react'
import type { Skill, Status } from '@/data/skills'

interface SkillCardProps {
  skill: Skill
  status?: Status
  onStatusChange: (status: Status) => void
  onDetailsClick: () => void
}

export function SkillCard({
  skill,
  status,
  onStatusChange,
  onDetailsClick,
}: SkillCardProps) {
  const difficultyColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500'
  }

  const statusConfig = {
    planned: { label: '📋 Planned', next: 'learning' as Status },
    learning: { label: '📚 Learning', next: 'completed' as Status },
    completed: { label: '✅ Completed', next: 'planned' as Status }
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

        {skill.prerequisites.length > 0 && (
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
          onClick={onDetailsClick}
        >
          <BookOpen className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Details</span>
          <span className="sm:hidden">Info</span>
        </Button>

        {status ? (
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
            className="flex-1 bg-primary/90 hover:bg-primary/80"
            onClick={() => onStatusChange('planned')}
          >
            + Add
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
