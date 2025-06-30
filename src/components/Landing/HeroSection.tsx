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
        {/* Navigation with Responsive Design */}
        <nav className="relative z-20 h-16 sm:h-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/header copy.png')`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 h-full flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Crosshair className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mr-2 sm:mr-3 drop-shadow-lg" />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-white tracking-tighter drop-shadow-lg">
                  PRICE<span className="text-orange-500">SNIPER</span>
                </h1>
                <div className="ml-2 sm:ml-4 px-2 sm:px-3 py-1 bg-green-600/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wide border border-green-400">
                  <span className="hidden sm:inline">OPERATIONAL</span>
                  <span className="sm:hidden">LIVE</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={() => openAuthModal('login')}
                  className="flex items-center px-2 sm:px-4 py-2 text-white hover:text-orange-400 font-semibold uppercase tracking-wide transition-colors duration-200 drop-shadow-lg hover:drop-shadow-xl backdrop-blur-sm hover:bg-white/10 rounded-md text-xs sm:text-sm min-h-[44px]"
                >
                  <LogIn className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Login</span>
                  <span className="sm:hidden">In</span>
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="flex items-center px-3 sm:px-6 py-2 bg-orange-600/90 hover:bg-orange-700 backdrop-blur-sm text-white font-bold rounded-md uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl border border-orange-400/50 hover:border-orange-300 text-xs sm:text-sm min-h-[44px]"
                >
                  <UserPlus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Deploy</span>
                  <span className="sm:hidden">Join</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Camo Pattern Overlay - Responsive opacity */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10 mt-16 sm:mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-orange-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5320' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 min-h-screen flex items-center pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full py-8 sm:py-12">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                <Crosshair className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-orange-500 mr-2 sm:mr-3" />
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-none">
                    PRICE<span className="text-orange-500">SNIPER</span>
                  </h1>
                  <div className="h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-1 sm:mt-2"></div>
                </div>
              </div>
              
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-zinc-300 mb-4 sm:mb-6 uppercase tracking-wide leading-tight">
                Elite Savings for DIY Warriors<br />
                <span className="text-orange-400">& Home Repair Frontliners</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                Deploy tactical precision to hunt down the best deals on Home Depot products. 
                Real-time price surveillance across multiple sectors with military-grade accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <button 
                  onClick={scrollToMissionBriefing}
                  className="group bg-orange-600 hover:bg-orange-700 text-white font-black py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl min-h-[44px] w-full sm:w-auto"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 group-hover:animate-pulse" />
                  <span className="hidden sm:inline">Watch Mission Briefing</span>
                  <span className="sm:hidden">Watch Demo</span>
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="border-2 border-zinc-600 hover:border-orange-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:bg-orange-500/10 min-h-[44px] w-full sm:w-auto"
                >
                  Deploy Now
                </button>
              </div>
              
              {/* Status Indicators - Responsive layout */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mt-6 sm:mt-8 justify-center lg:justify-start px-4 sm:px-0">
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                  <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase">System Online</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full mr-2 sm:mr-3"></div>
                  <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase">Targets Acquired</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                  <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase">Mission Ready</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image with Overlapping Decorative Elements */}
            <div className="relative order-1 lg:order-2 px-4 sm:px-0">
              {/* Main Image Container */}
              <div className="relative z-20">
                <picture>
                  {/* Mobile optimized image */}
                  <source 
                    media="(max-width: 480px)" 
                    srcSet="/freepik__the-style-is-candid-image-photography-with-natural__83960.png"
                  />
                  {/* Tablet optimized image */}
                  <source 
                    media="(max-width: 768px)" 
                    srcSet="/freepik__the-style-is-candid-image-photography-with-natural__83960.png"
                  />
                  {/* Desktop image */}
                  <img
                    src="/freepik__the-style-is-candid-image-photography-with-natural__83960.png"
                    alt="Tactical Price Sniper - Elite surveillance operative with precision targeting equipment"
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] xl:h-[500px] object-cover rounded-lg shadow-2xl border-2 sm:border-4 border-zinc-700 relative z-10"
                    loading="eager"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-lg z-20"></div>
                
                {/* Tactical Overlay Elements - Responsive positioning */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-600/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-lg border border-red-400 z-30">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
                    <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">
                      <span className="hidden sm:inline">TARGET LOCKED</span>
                      <span className="sm:hidden">LOCKED</span>
                    </span>
                  </div>
                </div>
                
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-zinc-900/90 backdrop-blur-sm p-2 sm:p-4 rounded-lg border border-orange-500 z-30">
                  <div className="text-orange-500 font-black text-sm sm:text-lg lg:text-xl">PRECISION</div>
                  <div className="text-zinc-300 text-xs sm:text-sm uppercase font-bold">
                    <span className="hidden sm:inline">Price Targeting</span>
                    <span className="sm:hidden">Targeting</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats Cards with Subtle Overlap - Positioned behind main image */}
              {/* Top-left card - overlaps with image by ~12% */}
              <div className="absolute top-3 sm:top-6 left-0 sm:left-2 lg:left-4 bg-zinc-900/95 backdrop-blur-sm border border-orange-500 p-2 sm:p-3 lg:p-4 rounded-lg shadow-xl z-10 transform hover:scale-105 transition-transform duration-300">
                <div className="text-orange-500 font-black text-base sm:text-lg lg:text-xl xl:text-2xl">2,847</div>
                <div className="text-zinc-400 text-xs sm:text-xs lg:text-sm uppercase font-bold leading-tight">
                  <span className="hidden sm:inline">Active Targets</span>
                  <span className="sm:hidden">Targets</span>
                </div>
              </div>
              
              {/* Bottom-right card - overlaps with image by ~15% */}
              <div className="absolute bottom-3 sm:bottom-6 right-0 sm:right-2 lg:right-4 bg-zinc-900/95 backdrop-blur-sm border border-green-500 p-2 sm:p-3 lg:p-4 rounded-lg shadow-xl z-10 transform hover:scale-105 transition-transform duration-300">
                <div className="text-green-500 font-black text-base sm:text-lg lg:text-xl xl:text-2xl">98.7%</div>
                <div className="text-zinc-400 text-xs sm:text-xs lg:text-sm uppercase font-bold leading-tight">
                  <span className="hidden sm:inline">Mission Success</span>
                  <span className="sm:hidden">Success</span>
                </div>
              </div>

              {/* Additional decorative elements for enhanced visual interest */}
              {/* Small accent card - top right, minimal overlap */}
              <div className="absolute top-8 sm:top-12 lg:top-16 right-3 sm:right-6 lg:right-8 bg-blue-600/90 backdrop-blur-sm border border-blue-400 p-1.5 sm:p-2 lg:p-3 rounded-md shadow-lg z-10 transform hover:scale-110 transition-transform duration-300">
                <div className="text-blue-300 font-black text-xs sm:text-sm lg:text-base">24/7</div>
                <div className="text-blue-200 text-xs uppercase font-bold leading-tight">
                  <span className="hidden lg:inline">Surveillance</span>
                  <span className="lg:hidden">Live</span>
                </div>
              </div>

              {/* Small accent card - bottom left, minimal overlap */}
              <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-3 sm:left-6 lg:left-8 bg-purple-600/90 backdrop-blur-sm border border-purple-400 p-1.5 sm:p-2 lg:p-3 rounded-md shadow-lg z-10 transform hover:scale-110 transition-transform duration-300">
                <div className="text-purple-300 font-black text-xs sm:text-sm lg:text-base">$2.1M</div>
                <div className="text-purple-200 text-xs uppercase font-bold leading-tight">
                  <span className="hidden lg:inline">Saved</span>
                  <span className="lg:hidden">Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-500 animate-bounce hidden sm:block">
          <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-zinc-600 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-orange-500 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
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