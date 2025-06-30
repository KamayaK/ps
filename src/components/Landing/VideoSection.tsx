import React from 'react'
import { Play, Monitor } from 'lucide-react'

export function VideoSection() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/Hero bg (4).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Fallback background */}
      <div className="absolute inset-0 bg-zinc-900"></div>
      
      {/* Additional texture overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-green-900/20"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Monitor className="w-8 h-8 text-orange-500 mr-3 drop-shadow-lg" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight drop-shadow-xl">
              Mission Briefing
            </h2>
          </div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto drop-shadow-lg">
            Watch our tactical overview to understand how PriceSniper deploys advanced 
            surveillance technology to secure the best deals for your home improvement missions.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl border border-zinc-700">
          <div className="aspect-w-16 aspect-h-9 relative">
            <div className="w-full h-96 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm flex items-center justify-center">
              {/* Video Placeholder */}
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-700 transition-colors duration-300 cursor-pointer group shadow-2xl">
                  <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide drop-shadow-lg">
                  Deploy Training Protocol
                </h3>
                <p className="text-zinc-400 drop-shadow-lg">
                  Click to initiate mission briefing sequence
                </p>
              </div>
            </div>
          </div>
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/95 to-transparent p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide drop-shadow-lg">
                  Tactical Overview
                </h4>
                <p className="text-zinc-400 text-sm drop-shadow-lg">
                  Duration: 3:47 | Classification: Public
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="text-red-400 text-sm font-bold uppercase drop-shadow-lg">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 p-6 rounded-lg text-center shadow-xl">
            <div className="text-3xl font-black text-orange-500 mb-2 drop-shadow-lg">15,000+</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold drop-shadow-lg">Views</div>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 p-6 rounded-lg text-center shadow-xl">
            <div className="text-3xl font-black text-green-500 mb-2 drop-shadow-lg">98%</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold drop-shadow-lg">Satisfaction</div>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 p-6 rounded-lg text-center shadow-xl">
            <div className="text-3xl font-black text-blue-500 mb-2 drop-shadow-lg">4.9★</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold drop-shadow-lg">Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}