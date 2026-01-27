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
