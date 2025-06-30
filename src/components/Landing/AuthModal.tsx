import React, { useState, useEffect } from 'react'
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

  // Update mode when initialMode changes
  useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  // Handle escape key press and body scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Close button clicked') // Debug log
    onClose()
  }

  const handleToggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login')
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      <div className="relative bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 z-20 text-zinc-400 hover:text-white transition-colors duration-200 bg-zinc-800/80 hover:bg-zinc-700 rounded-full p-2 border border-zinc-600 hover:border-zinc-500"
          aria-label="Close modal"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8 pt-12">
          {mode === 'login' ? (
            <LoginForm onToggleMode={handleToggleMode} />
          ) : (
            <SignupForm onToggleMode={handleToggleMode} />
          )}
        </div>
      </div>
    </div>
  )
}