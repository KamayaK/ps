import React from 'react'
import { Target, Calendar, Zap, Globe } from 'lucide-react'

export function FutureTargets() {
  return (
    <section id="future-targets" className="py-20 bg-zinc-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Future Target Expansion
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Our tactical surveillance network is expanding to cover additional major retailers, 
            providing you with comprehensive price intelligence across the entire home improvement sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Current vs Future */}
          <div className="space-y-8">
            <div className="bg-zinc-900 border border-green-500 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Currently Operational
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-orange-600/20 border border-orange-600 rounded-lg">
                  <img 
                    src="https://images.pexels.com/photos/5691570/pexels-photo-5691570.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Home Depot" 
                    className="w-12 h-12 rounded-lg mr-4 object-cover"
                  />
                  <div>
                    <div className="text-white font-bold text-lg">Home Depot</div>
                    <div className="text-zinc-400 text-sm">15,000+ products tracked</div>
                  </div>
                  <div className="ml-auto">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-blue-500 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Deployment Timeline
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    Q2
                  </div>
                  <div>
                    <div className="text-white font-semibold">eBay Integration</div>
                    <div className="text-zinc-400 text-sm">Auction and Buy-It-Now surveillance</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    Q3
                  </div>
                  <div>
                    <div className="text-white font-semibold">Target Stores</div>
                    <div className="text-zinc-400 text-sm">Home improvement and tools section</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    Q4
                  </div>
                  <div>
                    <div className="text-white font-semibold">Amazon Marketplace</div>
                    <div className="text-zinc-400 text-sm">Tools, hardware, and garden supplies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Future Targets */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Incoming Target Platforms
            </h3>

            {/* eBay */}
            <div className="bg-zinc-900 border border-yellow-500 p-6 rounded-lg hover:border-yellow-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">eBay</h4>
                  <div className="text-yellow-400 text-sm font-semibold uppercase">Q2 2025</div>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Expand surveillance to eBay's vast marketplace, tracking both auction-style 
                and Buy-It-Now listings for tools, equipment, and home improvement supplies.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Auction ending alerts</li>
                <li>• Buy-It-Now price drops</li>
                <li>• Seller rating integration</li>
                <li>• Shipping cost analysis</li>
              </ul>
            </div>

            {/* Target */}
            <div className="bg-zinc-900 border border-red-500 p-6 rounded-lg hover:border-red-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Target</h4>
                  <div className="text-red-400 text-sm font-semibold uppercase">Q3 2025</div>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Monitor Target's home improvement section, including their exclusive brands 
                and seasonal clearance events for tools and outdoor equipment.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Clearance cycle tracking</li>
                <li>• Exclusive brand monitoring</li>
                <li>• Seasonal deal patterns</li>
                <li>• RedCard discount integration</li>
              </ul>
            </div>

            {/* Amazon */}
            <div className="bg-zinc-900 border border-orange-500 p-6 rounded-lg hover:border-orange-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">Amazon</h4>
                  <div className="text-orange-400 text-sm font-semibold uppercase">Q4 2025</div>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Comprehensive surveillance of Amazon's tools and home improvement categories, 
                including Lightning Deals and Prime-exclusive offers.
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Lightning Deal alerts</li>
                <li>• Prime exclusive tracking</li>
                <li>• Warehouse deal monitoring</li>
                <li>• Price history analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expansion Benefits */}
        <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide text-center">
            Multi-Platform Intelligence Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white font-black text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                4X
              </div>
              <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                More Opportunities
              </h4>
              <p className="text-zinc-400 text-sm">
                Exponentially increase your deal discovery potential across multiple platforms
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white font-black text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                $$$
              </div>
              <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                Price Comparison
              </h4>
              <p className="text-zinc-400 text-sm">
                Compare prices across platforms to ensure maximum savings on every purchase
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white font-black text-3xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                24/7
              </div>
              <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                Comprehensive Coverage
              </h4>
              <p className="text-zinc-400 text-sm">
                Round-the-clock surveillance across all major home improvement retailers
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-red-600/20 border border-red-600 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-red-500 mr-3" />
            <h4 className="text-red-400 font-bold text-lg uppercase tracking-wide">
              Platform Independence Notice
            </h4>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            <strong>PriceSniper operates independently and is not affiliated with Home Depot, eBay, Target, Amazon, or any other retailer mentioned.</strong> 
            We provide price monitoring services using publicly available data to help consumers make informed purchasing decisions. 
            All retailer names and trademarks are the property of their respective owners and are used for identification purposes only.
          </p>
        </div>
      </div>
    </section>
  )
}