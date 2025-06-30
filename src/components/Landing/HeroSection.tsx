import React, { useState } from 'react'
import { Crosshair, Play, LogIn, UserPlus } from 'lucide-react'
import { AuthModal } from './AuthModal'

export function HeroSection() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const scrollToMissionBriefing = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('mission-briefing')
    if (element) {
      const headerOffset = 80 // Account for any fixed headers
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
        {/* Navigation with New Camo Background */}
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
                <Crosshair className="w-8 h-8 text-orange-500 mr-3 drop-shadow-lg" />
                <h1 className="text-2xl font-black text-white tracking-tighter drop-shadow-lg">
                  PRICE<span className="text-orange-500">SNIPER</span>
                </h1>
                <div className="ml-4 px-3 py-1 bg-green-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wide border border-green-400">
                  OPERATIONAL
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => openAuthModal('login')}
                  className="flex items-center px-4 py-2 text-white hover:text-orange-400 font-semibold uppercase tracking-wide transition-colors duration-200 drop-shadow-lg hover:drop-shadow-xl backdrop-blur-sm hover:bg-white/10 rounded-md"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="flex items-center px-6 py-2 bg-orange-600/90 hover:bg-orange-700 backdrop-blur-sm text-white font-bold rounded-md uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl border border-orange-400/50 hover:border-orange-300"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Deploy
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Camo Pattern Overlay for rest of section */}
        <div className="absolute inset-0 opacity-10 mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-orange-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5320' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Crosshair className="w-12 h-12 text-orange-500 mr-3" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                    PRICE<span className="text-orange-500">SNIPER</span>
                  </h1>
                  <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-2"></div>
                </div>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-bold text-zinc-300 mb-6 uppercase tracking-wide">
                Elite Savings for DIY Warriors<br />
                <span className="text-orange-400">& Home Repair Frontliners</span>
              </h2>
              
              <p className="text-base text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Deploy tactical precision to hunt down the best deals on Home Depot products. 
                Real-time price surveillance across multiple sectors with military-grade accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={scrollToMissionBriefing}
                  className="group bg-orange-600 hover:bg-orange-700 text-white font-black py-3 px-6 rounded-lg text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <Play className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
                  Watch Mission Briefing
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="border-2 border-zinc-600 hover:border-orange-500 text-white font-bold py-3 px-6 rounded-lg text-base uppercase tracking-wide transition-all duration-300 hover:bg-orange-500/10"
                >
                  Deploy Now
                </button>
              </div>
              
              {/* Status Indicators */}
              <div className="flex flex-wrap gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-zinc-400 text-sm font-semibold uppercase">System Online</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-zinc-400 text-sm font-semibold uppercase">Targets Acquired</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-zinc-400 text-sm font-semibold uppercase">Mission Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/freepik__the-style-is-candid-image-photography-with-natural__83960.png"
                  alt="Tactical Price Sniper - Elite surveillance operative with precision targeting equipment"
                  className="w-full h-80 lg:h-[500px] object-cover rounded-lg shadow-2xl border-4 border-zinc-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-lg"></div>
                
                {/* Tactical Overlay Elements */}
                <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-red-400">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-white font-bold text-sm uppercase tracking-wide">TARGET LOCKED</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-zinc-900/90 backdrop-blur-sm p-4 rounded-lg border border-orange-500">
                  <div className="text-orange-500 font-black text-xl">PRECISION</div>
                  <div className="text-zinc-300 text-sm uppercase font-bold">Price Targeting</div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-zinc-900 border border-orange-500 p-4 rounded-lg shadow-xl">
                <div className="text-orange-500 font-black text-2xl">2,847</div>
                <div className="text-zinc-400 text-xs uppercase font-bold">Active Targets</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-zinc-900 border border-green-500 p-4 rounded-lg shadow-xl">
                <div className="text-green-500 font-black text-2xl">98.7%</div>
                <div className="text-zinc-400 text-xs uppercase font-bold">Mission Success</div>
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
      />
    </>
  )
}