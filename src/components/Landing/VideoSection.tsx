import React, { useState } from 'react'
import { Play, Monitor, X } from 'lucide-react'

export function VideoSection() {
  const [showVideo, setShowVideo] = useState(false)

  const handlePlayVideo = () => {
    setShowVideo(true)
  }

  const handleCloseVideo = () => {
    setShowVideo(false)
  }

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Monitor className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Mission Briefing
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Watch our tactical overview to understand how PriceSniper deploys advanced 
            surveillance technology to secure the best deals for your home improvement missions.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative bg-zinc-800 rounded-lg overflow-hidden shadow-2xl border border-zinc-700">
          <div className="aspect-w-16 aspect-h-9 relative">
            {!showVideo ? (
              // Video Placeholder
              <div className="w-full h-96 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-orange-700 transition-colors duration-300 cursor-pointer group"
                    onClick={handlePlayVideo}
                  >
                    <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                    Deploy Training Protocol
                  </h3>
                  <p className="text-zinc-400">
                    Click to initiate mission briefing sequence
                  </p>
                </div>
              </div>
            ) : (
              // Video Player
              <div className="relative w-full h-96">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                  title="PriceSniper Mission Briefing"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Close Button */}
                <button
                  onClick={handleCloseVideo}
                  className="absolute top-4 right-4 bg-zinc-900/80 hover:bg-zinc-900 text-white p-2 rounded-full transition-colors duration-200 backdrop-blur-sm border border-zinc-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
          
          {/* Video Controls Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/90 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                  Tactical Overview
                </h4>
                <p className="text-zinc-400 text-sm">
                  Duration: 3:47 | Classification: Public
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 text-sm font-bold uppercase">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg text-center hover:border-orange-500 transition-colors duration-300">
            <div className="text-3xl font-black text-orange-500 mb-2">15,000+</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Views</div>
          </div>
          <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg text-center hover:border-green-500 transition-colors duration-300">
            <div className="text-3xl font-black text-green-500 mb-2">98%</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Satisfaction</div>
          </div>
          <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg text-center hover:border-blue-500 transition-colors duration-300">
            <div className="text-3xl font-black text-blue-500 mb-2">4.9★</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Rating</div>
          </div>
        </div>

        {/* Additional Training Resources */}
        <div className="mt-16 bg-zinc-800 border border-zinc-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wide text-center">
            Additional Training Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-600 p-6 rounded-lg hover:border-orange-500 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Play className="w-6 h-6 text-orange-500 mr-3" />
                <h4 className="text-white font-bold uppercase">Quick Start Guide</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Essential tactics for new operatives. Learn the basics of price surveillance.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-semibold text-sm uppercase tracking-wide">
                Watch Now →
              </button>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-600 p-6 rounded-lg hover:border-green-500 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Play className="w-6 h-6 text-green-500 mr-3" />
                <h4 className="text-white font-bold uppercase">Advanced Filtering</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Master advanced search and filtering techniques for precision targeting.
              </p>
              <button className="text-green-500 hover:text-green-400 font-semibold text-sm uppercase tracking-wide">
                Watch Now →
              </button>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-600 p-6 rounded-lg hover:border-blue-500 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Play className="w-6 h-6 text-blue-500 mr-3" />
                <h4 className="text-white font-bold uppercase">Deal Alerts</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                Set up automated alerts for maximum efficiency in deal acquisition.
              </p>
              <button className="text-blue-500 hover:text-blue-400 font-semibold text-sm uppercase tracking-wide">
                Watch Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}