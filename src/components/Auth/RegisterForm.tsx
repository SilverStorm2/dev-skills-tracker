import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

export function RegisterForm({ onToggle }: { onToggle: () => void }) {
  const { signUp } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Hasła nie są identyczne')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Hasło musi mieć minimum 6 znaków')
      setLoading(false)
      return
    }

    try {
      await signUp(email, password)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Rejestracja nie powiodła się')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center space-y-4">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="text-2xl font-bold">Sprawdź swoją skrzynkę!</h2>
        <p className="text-sm text-muted-foreground">
          Wysłaliśmy link aktywacyjny na adres <strong>{email}</strong>
        </p>
        <Button onClick={onToggle} variant="outline" className="mt-4">
          Wróć do logowania
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Utwórz konto</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Zacznij śledzić swój postęp
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="register-email">Email</Label>
          <Input
            id="register-email"
            type="email"
            placeholder="twoj@email.pl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="register-password">Hasło</Label>
          <Input
            id="register-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Potwierdź hasło</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
            minLength={6}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Rejestracja...' : 'Zarejestruj się'}
        </Button>
      </form>

      <div className="text-center text-sm">
        Masz już konto?{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-primary underline-offset-4 hover:underline"
          disabled={loading}
        >
          Zaloguj się
        </button>
      </div>
    </div>
  )
}
