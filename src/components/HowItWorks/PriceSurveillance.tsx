import React from 'react'
import { Eye, Clock, TrendingDown, AlertTriangle } from 'lucide-react'

export function PriceSurveillance() {
  return (
    <section id="price-surveillance" className="py-20 bg-zinc-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Price Surveillance System
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Our advanced surveillance network continuously monitors Home Depot's pricing infrastructure, 
            identifying price glitches, clearance events, and exclusive deals in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-zinc-900 border border-orange-500 p-6 rounded-lg text-center hover:border-orange-400 transition-colors duration-300">
            <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <div className="text-2xl font-black text-white mb-2">24/7</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Continuous Monitoring</div>
          </div>

          <div className="bg-zinc-900 border border-green-500 p-6 rounded-lg text-center hover:border-green-400 transition-colors duration-300">
            <TrendingDown className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <div className="text-2xl font-black text-white mb-2">15,000+</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Products Tracked</div>
          </div>

          <div className="bg-zinc-900 border border-blue-500 p-6 rounded-lg text-center hover:border-blue-400 transition-colors duration-300">
            <AlertTriangle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <div className="text-2xl font-black text-white mb-2">3 Min</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Update Frequency</div>
          </div>

          <div className="bg-zinc-900 border border-purple-500 p-6 rounded-lg text-center hover:border-purple-400 transition-colors duration-300">
            <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <div className="text-2xl font-black text-white mb-2">50+</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Store Locations</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              How Our Surveillance Works
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">1</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Data Collection</h4>
                  <p className="text-zinc-400">
                    Our automated systems scan Home Depot's product catalog every few minutes, 
                    collecting pricing data, stock levels, and promotional information.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">2</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Price Analysis</h4>
                  <p className="text-zinc-400">
                    Advanced algorithms analyze price patterns, identify anomalies, and calculate 
                    potential savings compared to historical pricing data.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">3</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Deal Verification</h4>
                  <p className="text-zinc-400">
                    Each potential deal is verified for accuracy and availability before being 
                    added to our tactical intelligence database.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">4</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Instant Deployment</h4>
                  <p className="text-zinc-400">
                    Verified deals are immediately deployed to our platform, with real-time 
                    updates on availability and pricing changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg">
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide text-center">
              Types of Deals We Track
            </h4>
            
            <div className="space-y-4">
              <div className="bg-red-600/20 border border-red-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-400 font-bold uppercase">Price Glitches</span>
                </div>
                <p className="text-zinc-400 text-sm">
                  System errors resulting in dramatically reduced prices (often 50-90% off)
                </p>
              </div>

              <div className="bg-orange-600/20 border border-orange-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <TrendingDown className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-orange-400 font-bold uppercase">Clearance Events</span>
                </div>
                <p className="text-zinc-400 text-sm">
                  End-of-season clearances and discontinued product markdowns
                </p>
              </div>

              <div className="bg-green-600/20 border border-green-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-400 font-bold uppercase">Flash Sales</span>
                </div>
                <p className="text-zinc-400 text-sm">
                  Limited-time promotional offers and special event pricing
                </p>
              </div>

              <div className="bg-blue-600/20 border border-blue-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Eye className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-blue-400 font-bold uppercase">Price Drops</span>
                </div>
                <p className="text-zinc-400 text-sm">
                  Regular price reductions and competitive pricing adjustments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}