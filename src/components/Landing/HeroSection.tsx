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

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        {/* Camouflage Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/header.png')`,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Additional texture overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-transparent to-orange-900/30"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Crosshair className="w-8 h-8 text-orange-500 mr-3" />
              <h1 className="text-2xl font-black text-white tracking-tighter">
                PRICE<span className="text-orange-500">SNIPER</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => openAuthModal('login')}
                className="flex items-center px-4 py-2 text-white hover:text-orange-500 font-semibold uppercase tracking-wide transition-colors duration-200"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="flex items-center px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md uppercase tracking-wide transition-colors duration-200"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Deploy
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <Crosshair className="w-16 h-16 text-orange-500 mr-4" />
                <div>
                  <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                    PRICE<span className="text-orange-500">SNIPER</span>
                  </h1>
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 mt-2"></div>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-300 mb-8 uppercase tracking-wide">
                Elite Savings for DIY Warriors<br />
                <span className="text-orange-400">& Home Repair Frontliners</span>
              </h2>
              
              <p className="text-lg text-zinc-300 mb-10 max-w-xl mx-auto lg:mx-0">
                Deploy tactical precision to hunt down the best deals on Home Depot products. 
                Real-time price surveillance across multiple sectors with military-grade accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-orange-600 hover:bg-orange-700 text-white font-black py-4 px-8 rounded-lg text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  <Play className="w-6 h-6 inline mr-3 group-hover:animate-pulse" />
                  Watch Mission Briefing
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="border-2 border-zinc-400 hover:border-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide transition-all duration-300 hover:bg-orange-500/20 backdrop-blur-sm"
                >
                  Deploy Now
                </button>
              </div>
              
              {/* Status Indicators */}
              <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-zinc-300 text-sm font-semibold uppercase">System Online</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-zinc-300 text-sm font-semibold uppercase">Targets Acquired</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-zinc-300 text-sm font-semibold uppercase">Mission Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="DIY Warrior with Power Tools"
                  className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-2xl border-4 border-zinc-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-lg"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-zinc-900/90 backdrop-blur-sm border border-orange-500 p-4 rounded-lg shadow-xl">
                <div className="text-orange-500 font-black text-2xl">2,847</div>
                <div className="text-zinc-300 text-xs uppercase font-bold">Active Targets</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-zinc-900/90 backdrop-blur-sm border border-green-500 p-4 rounded-lg shadow-xl">
                <div className="text-green-500 font-black text-2xl">98.7%</div>
                <div className="text-zinc-300 text-xs uppercase font-bold">Mission Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-400 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center">
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