import React from 'react'
import { Target, Shield, Zap, DollarSign } from 'lucide-react'

export function MissionOverview() {
  return (
    <section id="mission-overview" className="py-20 bg-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Mission Overview
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            PriceSniper's primary mission is to empower DIY warriors and home improvement professionals 
            with tactical price intelligence, helping you save significant money on essential tools and supplies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Mission Statement */}
          <div className="space-y-8">
            <div className="bg-zinc-800 border border-orange-500 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide flex items-center">
                <DollarSign className="w-6 h-6 text-orange-500 mr-3" />
                Our Core Mission
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-6">
                We deploy advanced surveillance technology to identify and track price glitches, 
                clearance events, and exclusive deals across Home Depot's vast inventory. Our 
                tactical approach ensures you never miss an opportunity to secure premium tools 
                and supplies at unbeatable prices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-zinc-400">Real-time price monitoring across thousands of products</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-zinc-400">Advanced filtering by location, category, and price range</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <span className="text-zinc-400">Instant alerts for time-sensitive deals and price drops</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 border border-red-500 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide flex items-center">
                <Shield className="w-5 h-5 text-red-500 mr-2" />
                Important Disclaimer
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                <strong className="text-red-400">PriceSniper is not affiliated with Home Depot, eBay, Target, Amazon, or any other retailer.</strong> 
                We are an independent price monitoring service that aggregates publicly available pricing data 
                to help consumers make informed purchasing decisions. All trademarks belong to their respective owners.
              </p>
            </div>
          </div>

          {/* Right Column - Key Benefits */}
          <div className="space-y-6">
            <div className="bg-zinc-800 border border-green-500 p-6 rounded-lg hover:border-green-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-green-500 mr-3" />
                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Lightning Fast</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Our advanced algorithms scan pricing data every few minutes, ensuring you're among 
                the first to know about price drops and limited-time offers.
              </p>
            </div>

            <div className="bg-zinc-800 border border-blue-500 p-6 rounded-lg hover:border-blue-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-500 mr-3" />
                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Precision Targeting</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Filter deals by your specific location, preferred categories, and budget constraints 
                to focus only on opportunities that matter to your projects.
              </p>
            </div>

            <div className="bg-zinc-800 border border-purple-500 p-6 rounded-lg hover:border-purple-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-purple-500 mr-3" />
                <h4 className="text-xl font-bold text-white uppercase tracking-wide">Battle-Tested</h4>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Trusted by thousands of DIY enthusiasts and professional contractors who have 
                saved millions of dollars using our tactical price intelligence.
              </p>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-lg text-center">
              <div className="text-white font-black text-3xl mb-2">$2.1M+</div>
              <div className="text-orange-100 uppercase tracking-wide font-bold">Total Savings Secured</div>
              <div className="text-orange-200 text-sm mt-2">By our tactical operatives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}