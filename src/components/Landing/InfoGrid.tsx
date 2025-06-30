import React from 'react'
import { Target, Shield, Hammer, Crosshair, Zap, Award } from 'lucide-react'

export function InfoGrid() {
  return (
    <section className="py-20" style={{ backgroundColor: '#D4C19C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-lg">
                Our Mission
              </h2>
              <p className="text-lg text-white leading-relaxed drop-shadow-md">
                PriceSniper deploys advanced reconnaissance technology to identify and track 
                the best deals across Home Depot's vast arsenal of tools and supplies. Our 
                tactical approach ensures you never miss a target opportunity.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide drop-shadow-lg">
                Unmatched Quality
              </h3>
              <p className="text-white leading-relaxed drop-shadow-md">
                Every deal is verified through our rigorous quality assurance protocols. 
                We maintain the highest standards of accuracy and reliability in our 
                price surveillance operations.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide drop-shadow-lg">
                Built Tough
              </h3>
              <p className="text-white leading-relaxed drop-shadow-md">
                Our platform is engineered to withstand the demands of serious DIY warriors 
                and professional contractors. Robust, reliable, and ready for any mission.
              </p>
            </div>
          </div>

          {/* Right Column - Features & Image */}
          <div className="space-y-8">
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 mr-3 transition-colors duration-300" style={{ color: '#D35400' }} />
                  <h4 className="text-lg font-bold text-zinc-900 uppercase">Target Deals</h4>
                </div>
                <p className="text-zinc-700">
                  Precision targeting of the best deals with real-time price tracking and alerts.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-green-600 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 mr-3 transition-colors duration-300" style={{ color: '#D35400' }} />
                  <h4 className="text-lg font-bold text-zinc-900 uppercase">Built for Battle</h4>
                </div>
                <p className="text-zinc-700">
                  Military-grade reliability ensures you're always equipped for the toughest projects.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 mr-3 transition-colors duration-300" style={{ color: '#D35400' }} />
                  <h4 className="text-lg font-bold text-zinc-900 uppercase">Lightning Fast</h4>
                </div>
                <p className="text-zinc-700">
                  Instant notifications and rapid deployment of deal intelligence to your device.
                </p>
              </div>
              
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg border-l-4 border-purple-600 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 mr-3 transition-colors duration-300" style={{ color: '#D35400' }} />
                  <h4 className="text-lg font-bold text-zinc-900 uppercase">Elite Status</h4>
                </div>
                <p className="text-zinc-700">
                  Join the ranks of elite DIY warriors with exclusive access to premium deals.
                </p>
              </div>
            </div>

            {/* Contractor Image */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5691570/pexels-photo-5691570.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Contractor with Tools"
                className="w-full h-80 object-cover rounded-lg shadow-xl border-4 border-zinc-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 bg-zinc-900/90 backdrop-blur-sm p-4 rounded-lg border border-orange-500">
                <div className="flex items-center">
                  <Hammer className="w-6 h-6 text-orange-500 mr-2" />
                  <span className="text-white font-bold uppercase tracking-wide">Mission Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}