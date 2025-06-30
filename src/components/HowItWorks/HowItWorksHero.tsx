import React, { useState } from 'react'
import { Crosshair, Target, ArrowLeft, LogIn, UserPlus } from 'lucide-react'
import { AuthModal } from '../Landing/AuthModal'

export function HowItWorksHero() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const [modalTitle, setModalTitle] = useState<string>('')

  const openLoginModal = () => {
    setAuthMode('login')
    setModalTitle('TACTICAL LOGIN')
    setIsAuthModalOpen(true)
  }

  const openSignupModal = () => {
    setAuthMode('signup')
    setModalTitle('TACTICAL SIGNUP')
    setIsAuthModalOpen(true)
  }

  const goBack = () => {
    window.history.back()
  }

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        {/* Navigation */}
        <nav className="relative z-20 h-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/header copy.png')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <button
                  onClick={goBack}
                  className="flex items-center mr-6 px-3 py-2 text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  <span className="font-semibold uppercase tracking-wide">Back</span>
                </button>
                <Crosshair className="w-8 h-8 text-orange-500 mr-3 drop-shadow-lg" />
                <h1 className="text-2xl font-black text-white tracking-tighter drop-shadow-lg">
                  PRICE<span className="text-orange-500">SNIPER</span>
                </h1>
                <div className="ml-4 px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wide border border-blue-400">
                  HOW IT WORKS
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={openSignupModal}
                  className="flex items-center px-4 py-2 text-white hover:text-orange-400 font-semibold uppercase tracking-wide transition-colors duration-200 drop-shadow-lg hover:drop-shadow-xl backdrop-blur-sm hover:bg-white/10 rounded-md"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Register
                </button>
                <button
                  onClick={openLoginModal}
                  className="flex items-center px-6 py-2 bg-orange-600/90 hover:bg-orange-700 backdrop-blur-sm text-white font-bold rounded-md uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl border border-orange-400/50 hover:border-orange-300"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Deploy
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center pt-20">
          <div className="text-center w-full">
            <div className="flex items-center justify-center mb-8">
              <Target className="w-16 h-16 text-orange-500 mr-4" />
              <div>
                <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none">
                  HOW IT <span className="text-orange-500">WORKS</span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-2"></div>
              </div>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-zinc-300 mb-8 uppercase tracking-wide">
              Tactical Price Intelligence<br />
              <span className="text-orange-400">For Elite DIY Operations</span>
            </h2>
            
            <p className="text-xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how PriceSniper deploys advanced surveillance technology to hunt down 
              price glitches, track deals, and secure maximum savings for your home improvement missions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-orange-500 p-6 rounded-lg">
                <div className="text-orange-500 font-black text-3xl mb-2">STEP 1</div>
                <div className="text-white font-bold uppercase tracking-wide mb-2">Target Identification</div>
                <div className="text-zinc-400 text-sm">Scan Home Depot inventory for price anomalies</div>
              </div>
              
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-green-500 p-6 rounded-lg">
                <div className="text-green-500 font-black text-3xl mb-2">STEP 2</div>
                <div className="text-white font-bold uppercase tracking-wide mb-2">Intelligence Gathering</div>
                <div className="text-zinc-400 text-sm">Real-time price monitoring and analysis</div>
              </div>
              
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-blue-500 p-6 rounded-lg">
                <div className="text-blue-500 font-black text-3xl mb-2">STEP 3</div>
                <div className="text-white font-bold uppercase tracking-wide mb-2">Mission Execution</div>
                <div className="text-zinc-400 text-sm">Deploy to secure maximum savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-500 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
        title={modalTitle}
      />
    </>
  )
}