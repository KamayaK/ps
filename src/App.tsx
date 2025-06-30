import React from 'react'
import { useAuth } from './hooks/useAuth'
import { LandingPage } from './components/Landing/LandingPage'
import { HowItWorksPage } from './components/HowItWorks/HowItWorksPage'
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

  // Enhanced routing based on URL path
  const currentPath = window.location.pathname

  // Handle How It Works page routing
  if (currentPath === '/how-it-works' || currentPath.startsWith('/how-it-works/')) {
    return <HowItWorksPage />
  }

  return (
    <>
      {/* Main App Content */}
      {!user ? <LandingPage /> : <Dashboard user={user} />}
      
      {/* Bolt Badge - Fixed position bottom right */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://bolt.new/~/sb1-kcqhqy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:scale-110 transition-transform duration-300 drop-shadow-lg hover:drop-shadow-xl"
          title="View this project on Bolt"
        >
          <img 
            src="/white_circle_360x360.png" 
            alt="Powered by Bolt" 
            className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm border-2 border-white/20 hover:border-orange-500/50 transition-all duration-300"
          />
        </a>
      </div>
    </>
  )
}

export default App