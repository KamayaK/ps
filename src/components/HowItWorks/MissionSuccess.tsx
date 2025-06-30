import React from 'react'
import { Award, TrendingUp, Users, DollarSign } from 'lucide-react'

export function MissionSuccess() {
  return (
    <section id="mission-success" className="py-20 bg-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Mission Success Stories
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Real results from tactical operatives who have deployed PriceSniper intelligence 
            to secure significant savings on their home improvement missions.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-zinc-800 border border-orange-500 p-8 rounded-lg text-center hover:border-orange-400 transition-colors duration-300">
            <DollarSign className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <div className="text-3xl font-black text-white mb-2">$2.1M+</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Total Savings</div>
          </div>

          <div className="bg-zinc-800 border border-green-500 p-8 rounded-lg text-center hover:border-green-400 transition-colors duration-300">
            <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <div className="text-3xl font-black text-white mb-2">12,500+</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Active Operatives</div>
          </div>

          <div className="bg-zinc-800 border border-blue-500 p-8 rounded-lg text-center hover:border-blue-400 transition-colors duration-300">
            <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <div className="text-3xl font-black text-white mb-2">94%</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Success Rate</div>
          </div>

          <div className="bg-zinc-800 border border-purple-500 p-8 rounded-lg text-center hover:border-purple-400 transition-colors duration-300">
            <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <div className="text-3xl font-black text-white mb-2">$847</div>
            <div className="text-zinc-400 uppercase tracking-wide font-semibold">Avg. Savings</div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Story 1 */}
          <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-black text-xl">MK</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Mike K.</h4>
                <div className="text-zinc-400 text-sm">Professional Contractor • Texas</div>
              </div>
            </div>
            
            <blockquote className="text-zinc-300 leading-relaxed mb-6 italic">
              "PriceSniper helped me save over $3,200 on tools for my renovation business last quarter. 
              The real-time alerts caught a pricing glitch on Milwaukee power tools that saved me 70% 
              on a complete kit. This platform pays for itself within the first deal."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-orange-500 font-black text-xl">$3,200</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Quarterly Savings</div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-green-500 font-black text-xl">70%</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Best Deal</div>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-black text-xl">SJ</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Sarah J.</h4>
                <div className="text-zinc-400 text-sm">DIY Enthusiast • California</div>
              </div>
            </div>
            
            <blockquote className="text-zinc-300 leading-relaxed mb-6 italic">
              "As a weekend warrior tackling home projects, PriceSniper has been a game-changer. 
              I've saved enough money to upgrade from basic tools to professional-grade equipment. 
              The location filtering is perfect for finding deals at my local stores."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-green-500 font-black text-xl">$1,850</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Total Savings</div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-blue-500 font-black text-xl">45</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Deals Secured</div>
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-black text-xl">DM</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">David M.</h4>
                <div className="text-zinc-400 text-sm">Home Flipper • Florida</div>
              </div>
            </div>
            
            <blockquote className="text-zinc-300 leading-relaxed mb-6 italic">
              "Flipping houses requires keeping costs low while maintaining quality. PriceSniper's 
              surveillance system has helped me reduce material costs by 35% across my last three 
              projects. The ROI is incredible - this tool is essential for any serious flipper."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-blue-500 font-black text-xl">35%</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Cost Reduction</div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-purple-500 font-black text-xl">$8,900</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Project Savings</div>
              </div>
            </div>
          </div>

          {/* Story 4 */}
          <div className="bg-zinc-800 border border-zinc-700 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-black text-xl">AL</span>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Alex L.</h4>
                <div className="text-zinc-400 text-sm">Maintenance Supervisor • New York</div>
              </div>
            </div>
            
            <blockquote className="text-zinc-300 leading-relaxed mb-6 italic">
              "Managing maintenance for a large apartment complex means buying tools and supplies 
              constantly. PriceSniper's alerts have helped me stay under budget while upgrading 
              our equipment. The advanced filtering saves me hours of research time."
            </blockquote>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-purple-500 font-black text-xl">$5,400</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Annual Savings</div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg text-center">
                <div className="text-orange-500 font-black text-xl">12hrs</div>
                <div className="text-zinc-400 text-sm uppercase font-semibold">Time Saved/Week</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-lg text-center">
          <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-wide">
            Join the Elite Ranks
          </h3>
          <p className="text-orange-100 text-lg mb-6 max-w-2xl mx-auto">
            Deploy PriceSniper intelligence and start securing tactical savings on your next home improvement mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-black py-3 px-8 rounded-lg text-lg uppercase tracking-wide hover:bg-zinc-100 transition-colors duration-200">
              Start Free Mission
            </button>
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wide hover:bg-white hover:text-orange-600 transition-colors duration-200">
              View Pricing Intel
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}