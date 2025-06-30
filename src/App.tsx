import React from 'react'
import { useAuth } from './hooks/useAuth'
import { LandingPage } from './components/Landing/LandingPage'
import { AuthPage } from './components/Auth/AuthPage'
import { Dashboard } from './components/Dashboard/Dashboard'

function App() {
  const { user, loading } = useAuth()

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

  // Show landing page for non-authenticated users
  if (!user) {
    return <LandingPage />
  }

  // Show dashboard for authenticated users
  return <Dashboard user={user} />
}

export default App