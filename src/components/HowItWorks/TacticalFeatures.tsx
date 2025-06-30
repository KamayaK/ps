import React from 'react'
import { Zap, Bell, Filter, Smartphone, Globe, Users } from 'lucide-react'

export function TacticalFeatures() {
  return (
    <section id="tactical-features" className="py-20 bg-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Tactical Features
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            PriceSniper is equipped with advanced tactical features designed to give you 
            the competitive edge in securing the best deals on home improvement supplies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Real-Time Alerts */}
          <div className="bg-zinc-800 border border-orange-500 p-8 rounded-lg hover:border-orange-400 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Bell className="w-10 h-10 text-orange-500 mr-4" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Real-Time Alerts
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Receive instant notifications when deals matching your criteria are detected. 
              Configure alert preferences for different deal types and urgency levels.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Push notifications for mobile devices</li>
              <li>• Email alerts for major price drops</li>
              <li>• SMS alerts for critical deals</li>
              <li>• Custom alert thresholds</li>
            </ul>
          </div>

          {/* Advanced Filtering */}
          <div className="bg-zinc-800 border border-green-500 p-8 rounded-lg hover:border-green-400 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Filter className="w-10 h-10 text-green-500 mr-4" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Advanced Filtering
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Precision targeting with multi-layered filtering options to focus on deals 
              that matter most to your specific projects and budget requirements.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Location-based filtering</li>
              <li>• Category and brand selection</li>
              <li>• Price range parameters</li>
              <li>• Discount threshold settings</li>
            </ul>
          </div>

          {/* Mobile Optimized */}
          <div className="bg-zinc-800 border border-blue-500 p-8 rounded-lg hover:border-blue-400 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Smartphone className="w-10 h-10 text-blue-500 mr-4" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Mobile Command
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Full tactical capabilities on mobile devices for field operations. 
              Access deals, verify prices, and execute missions from anywhere.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Responsive mobile interface</li>
              <li>• Offline deal caching</li>
              <li>• GPS-based store locator</li>
              <li>• Quick-action buttons</li>
            </ul>
          </div>

          {/* Multi-State Coverage */}
          <div className="bg-zinc-800 border border-purple-500 p-8 rounded-lg hover:border-purple-400 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Globe className="w-10 h-10 text-purple-500 mr-4" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Multi-State Intel
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Comprehensive coverage across multiple states with location-specific 
              pricing and availability data for strategic mission planning.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• 50+ state coverage</li>
              <li>• Regional price variations</li>
              <li>• Store-specific inventory</li>
              <li>• Cross-state deal comparison</li>
            </ul>
          </div>

          {/* Community Intelligence */}
          <div className="bg-zinc-800 border border-yellow-500 p-8 rounded-lg hover:border-yellow-400 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Users className="w-10 h-10 text-yellow-500 mr-4" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Community Intel
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Leverage collective intelligence from our community of tactical operatives 
              to verify deals and share mission-critical information.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• User-verified deals</li>
              <li>• Community feedback system</li>
              <li>• Deal success reporting</li>
              <li>• Collaborative intelligence</li>
            </ul>
          </div>

          {/* Performance Analytics */}
          <div className="bg-zinc-800 border border-red-500 p-8 rounded-lg hover:border-red-400 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Zap className="w-10 h-10 text-red-500 mr-4" />
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Mission Analytics
              </h3>
            </div>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Track your mission performance with detailed analytics on savings achieved, 
              deals captured, and operational efficiency metrics.
            </p>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>• Total savings tracking</li>
              <li>• Mission success rates</li>
              <li>• Performance benchmarks</li>
              <li>• Historical data analysis</li>
            </ul>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="bg-zinc-900 p-6 border-b border-zinc-700">
            <h3 className="text-2xl font-bold text-white uppercase tracking-wide text-center">
              Tactical Capabilities Matrix
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-900">
                <tr>
                  <th className="text-left p-4 text-zinc-300 font-bold uppercase tracking-wide">Feature</th>
                  <th className="text-center p-4 text-zinc-300 font-bold uppercase tracking-wide">Free Tier</th>
                  <th className="text-center p-4 text-orange-500 font-bold uppercase tracking-wide">Elite Tier</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-700">
                  <td className="p-4 font-semibold">Real-Time Deal Alerts</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center text-orange-500">✓ Enhanced</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="p-4 font-semibold">Advanced Filtering</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center text-orange-500">✓ Full Access</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="p-4 font-semibold">Multi-State Coverage</td>
                  <td className="p-4 text-center">Limited</td>
                  <td className="p-4 text-center text-orange-500">✓ All States</td>
                </tr>
                <tr className="border-b border-zinc-700">
                  <td className="p-4 font-semibold">Mission Analytics</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center text-orange-500">✓ Full Suite</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Priority Support</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center text-orange-500">✓ 24/7 Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}