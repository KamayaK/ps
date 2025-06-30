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
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#2C1810' }}>
        {/* Digital Camouflage Header Banner */}
        <div className="absolute top-0 left-0 w-full h-32 z-10" 
             style={{
               background: `
                 linear-gradient(45deg, 
                   #4B5320 0%, #4B5320 25%, 
                   #2F1B14 25%, #2F1B14 50%, 
                   #1A1A1A 50%, #1A1A1A 75%, 
                   #4B5320 75%, #4B5320 100%
                 ),
                 linear-gradient(-45deg, 
                   #4B5320 0%, #4B5320 25%, 
                   #2F1B14 25%, #2F1B14 50%, 
                   #1A1A1A 50%, #1A1A1A 75%, 
                   #4B5320 75%, #4B5320 100%
                 )`,
               backgroundSize: '40px 40px, 60px 60px',
               backgroundPosition: '0 0, 20px 20px'
             }}>
          {/* Semi-transparent overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Forest Green Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-green-900/10" style={{ backgroundColor: 'rgba(31, 51, 36, 0.1)' }}></div>

        {/* Navigation */}
        <nav className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Crosshair className="w-8 h-8 text-orange-500 mr-3" />
              <h1 className="text-2xl font-black text-white tracking-tighter drop-shadow-lg">
                PRICE<span className="text-orange-500">SNIPER</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => openAuthModal('login')}
                className="flex items-center px-4 py-2 text-white hover:text-orange-500 font-semibold uppercase tracking-wide transition-colors duration-200 drop-shadow-lg"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </button>
              <button
                onClick={() => openAuthModal('signup')}
                className="flex items-center px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-md uppercase tracking-wide transition-colors duration-200 shadow-lg"
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
                  <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">
                    PRICE<span className="text-orange-500">SNIPER</span>
                  </h1>
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 mt-2"></div>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-zinc-300 mb-8 uppercase tracking-wide drop-shadow-lg">
                Elite Savings for DIY Warriors<br />
                <span className="text-orange-400">& Home Repair Frontliners</span>
              </h2>
              
              <p className="text-lg text-zinc-300 mb-10 max-w-xl mx-auto lg:mx-0 drop-shadow-md">
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
                  className="border-2 border-zinc-600 hover:border-orange-500 text-white font-bold py-4 px-8 rounded-lg text-lg uppercase tracking-wide transition-all duration-300 hover:bg-orange-500/10 shadow-lg"
                >
                  Deploy Now
                </button>
              </div>
              
              {/* Status Indicators */}
              <div className="flex flex-wrap gap-6 mt-12 justify-center lg:justify-start">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-zinc-300 text-sm font-semibold uppercase drop-shadow-md">System Online</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-zinc-300 text-sm font-semibold uppercase drop-shadow-md">Targets Acquired</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-zinc-300 text-sm font-semibold uppercase drop-shadow-md">Mission Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column - Dramatic Sniper Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Professional sniper targeting price board - dramatic composition */}
                <div className="relative w-full h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl border-4 border-zinc-700">
                  <img
                    src="https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Professional Sniper Targeting Price Board"
                    className="w-full h-full object-cover"
                  />
                  {/* Vignette effect for depth */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                  
                  {/* Crosshair overlay for targeting effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 border-2 border-red-500 rounded-full opacity-80"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-0.5 bg-red-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-16 bg-red-500"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Target acquired indicator */}
                  <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-300 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-white text-sm font-bold uppercase">Target Acquired</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -left-4 bg-zinc-900/95 backdrop-blur-sm border border-orange-500 p-4 rounded-lg shadow-xl">
                <div className="text-orange-500 font-black text-2xl">2,847</div>
                <div className="text-zinc-300 text-xs uppercase font-bold">Active Targets</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-zinc-900/95 backdrop-blur-sm border border-green-500 p-4 rounded-lg shadow-xl">
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