import React, { useState } from 'react'
import { X } from 'lucide-react'
import { LoginForm } from '../Auth/LoginForm'
import { SignupForm } from '../Auth/SignupForm'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'login' | 'signup'
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState(initialMode)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-8">
          {mode === 'login' ? (
            <LoginForm onToggleMode={() => setMode('signup')} />
          ) : (
            <SignupForm onToggleMode={() => setMode('login')} />
          )}
        </div>
      </div>
    </div>
  )
}