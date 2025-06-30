import React from 'react'
import { Crosshair, Filter, MapPin, Package } from 'lucide-react'

export function TargetAcquisition() {
  return (
    <section id="target-acquisition" className="py-20 bg-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Crosshair className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Target Acquisition System
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Our precision targeting system allows you to focus your mission on specific products, 
            locations, and price ranges that align with your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Filtering Interface Mockup */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Filter className="w-6 h-6 text-orange-500 mr-3" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">Mission Parameters</h3>
            </div>

            <div className="space-y-6">
              {/* Search Filter */}
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
                  Search Target
                </label>
                <div className="bg-zinc-900 border border-zinc-600 rounded-md p-3 text-zinc-400">
                  DEWALT 20V MAX Drill...
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  State Sector
                </label>
                <div className="bg-zinc-900 border border-zinc-600 rounded-md p-3 text-zinc-400">
                  Texas (TX)
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
                  <Package className="w-4 h-4 inline mr-1" />
                  Category
                </label>
                <div className="bg-zinc-900 border border-zinc-600 rounded-md p-3 text-zinc-400">
                  Power Tools
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
                  Price Range
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-900 border border-zinc-600 rounded-md p-3 text-zinc-400">
                    $50
                  </div>
                  <div className="bg-zinc-900 border border-zinc-600 rounded-md p-3 text-zinc-400">
                    $300
                  </div>
                </div>
              </div>

              {/* Discount Threshold */}
              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
                  Minimum Discount
                </label>
                <div className="bg-zinc-900 border border-zinc-600 rounded-md p-3 text-zinc-400">
                  25% or higher
                </div>
              </div>

              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md uppercase tracking-wide transition-colors duration-200">
                Deploy Search
              </button>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Precision Targeting Features
            </h3>

            <div className="space-y-6">
              <div className="bg-zinc-800 border border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide">Location-Based Targeting</h4>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Filter deals by specific states and regions to ensure you're only seeing opportunities 
                  available in your operational area. Perfect for planning local pickup missions.
                </p>
              </div>

              <div className="bg-zinc-800 border border-green-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-green-500 mr-3" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide">Category Intelligence</h4>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Focus your surveillance on specific product categories like Power Tools, Hand Tools, 
                  Hardware, or Garden Equipment to match your current project requirements.
                </p>
              </div>

              <div className="bg-zinc-800 border border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Filter className="w-6 h-6 text-blue-500 mr-3" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide">Advanced Filtering</h4>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Set minimum discount thresholds, price ranges, and brand preferences to ensure 
                  you only receive intelligence on deals that meet your tactical requirements.
                </p>
              </div>

              <div className="bg-zinc-800 border border-purple-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Crosshair className="w-6 h-6 text-purple-500 mr-3" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wide">Smart Recommendations</h4>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Our AI-powered recommendation engine learns from your search patterns and suggests 
                  relevant deals based on your previous target acquisitions and preferences.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg text-center">
                <div className="text-white font-black text-xl">50+</div>
                <div className="text-orange-100 text-sm uppercase font-bold">Categories</div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 rounded-lg text-center">
                <div className="text-white font-black text-xl">500+</div>
                <div className="text-green-100 text-sm uppercase font-bold">Brands</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}