import React, { useState } from 'react'
import { useAuth } from './hooks/useAuth'
import { AuthPage } from './components/Auth/AuthPage'
import { Dashboard } from './components/Dashboard/Dashboard'
import { LandingPage } from './components/LandingPage/LandingPage'

function App() {
  const { user, loading } = useAuth()
  const [showAuth, setShowAuth] = useState(false)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white font-bold uppercase tracking-wide">Initializing System...</p>
        </div>
      </div>
    )
  }

  // If user is authenticated, show dashboard
  if (user) {
    return <Dashboard user={user} />
  }

  // If not authenticated and showAuth is true, show auth page
  if (showAuth) {
    return <AuthPage />
  }

  // Otherwise show landing page
  return <LandingPage onNavigateToAuth={() => setShowAuth(true)} />
}

export default App