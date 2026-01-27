import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

type AuthModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {isLogin ? 'Logowanie' : 'Rejestracja'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {isLogin
              ? 'Zaloguj się do swojego konta'
              : 'Utwórz nowe konto'}
          </DialogDescription>
        </DialogHeader>

        {isLogin ? (
          <LoginForm onToggle={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onToggle={() => setIsLogin(true)} />
        )}
      </DialogContent>
    </Dialog>
  )
}
