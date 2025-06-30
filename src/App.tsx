import React from 'react'
import { useAuth } from './hooks/useAuth'
import { AuthPage } from './components/Auth/AuthPage'
import { Dashboard } from './components/Dashboard/Dashboard'

function App() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black flex items-center justify-center relative overflow-hidden">
        {/* Camouflage pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-700 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-600 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-800 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-700 rounded-full blur-lg"></div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white font-black uppercase tracking-wide text-lg">Initializing System...</p>
        </div>
      </div>
    )
  }

  return user ? <Dashboard user={user} /> : <AuthPage />
}

export default App