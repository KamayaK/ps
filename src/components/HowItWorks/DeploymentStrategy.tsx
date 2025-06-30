import React from 'react'
import { Rocket, Clock, Shield, CheckCircle } from 'lucide-react'

export function DeploymentStrategy() {
  return (
    <section id="deployment-strategy" className="py-20 bg-zinc-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Deployment Strategy
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Once targets are identified and verified, our tactical deployment system guides you 
            through the optimal strategy for securing deals before they expire or sell out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Phase 1 */}
          <div className="bg-zinc-900 border border-orange-500 p-8 rounded-lg text-center">
            <div className="bg-orange-600 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Intelligence Brief
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Receive detailed intel on each deal including original price, current price, 
              discount percentage, stock levels, and estimated time remaining.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-zinc-900 border border-green-500 p-8 rounded-lg text-center">
            <div className="bg-green-600 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Tactical Assessment
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Evaluate deal priority based on savings potential, product necessity, 
              and availability window to optimize your deployment sequence.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="bg-zinc-900 border border-blue-500 p-8 rounded-lg text-center">
            <div className="bg-blue-600 text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
              Mission Execution
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Deploy to Home Depot with confidence, knowing you have verified pricing 
              and availability data to secure your target deals efficiently.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Deployment Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Tactical Deployment Features
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Clock className="w-8 h-8 text-orange-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                    Real-Time Updates
                  </h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Receive instant notifications when deal status changes, including price 
                    adjustments, stock depletion, or deal expiration warnings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="w-8 h-8 text-green-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                    Verified Intelligence
                  </h4>
                  <p className="text-zinc-400 leading-relaxed">
                    All deals are verified for accuracy before deployment, ensuring you don't 
                    waste time on expired or incorrect pricing information.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-blue-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                    Success Tracking
                  </h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Monitor your mission success rate and total savings achieved through 
                    PriceSniper intelligence operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide text-center">
                Mission Success Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-orange-500">94%</div>
                  <div className="text-zinc-400 text-sm uppercase font-semibold">Deal Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-500">87%</div>
                  <div className="text-zinc-400 text-sm uppercase font-semibold">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-blue-500">$847</div>
                  <div className="text-zinc-400 text-sm uppercase font-semibold">Avg. Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-purple-500">2.3</div>
                  <div className="text-zinc-400 text-sm uppercase font-semibold">Min Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Deployment Timeline */}
          <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg">
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide text-center">
              Typical Deployment Timeline
            </h4>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-orange-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  0s
                </div>
                <div>
                  <div className="text-white font-semibold">Deal Detected</div>
                  <div className="text-zinc-400 text-sm">Price anomaly identified by surveillance system</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-green-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  30s
                </div>
                <div>
                  <div className="text-white font-semibold">Verification Complete</div>
                  <div className="text-zinc-400 text-sm">Deal accuracy confirmed and added to database</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  1m
                </div>
                <div>
                  <div className="text-white font-semibold">Intelligence Deployed</div>
                  <div className="text-zinc-400 text-sm">Deal appears on PriceSniper platform</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  2m
                </div>
                <div>
                  <div className="text-white font-semibold">Mission Brief Sent</div>
                  <div className="text-zinc-400 text-sm">Notifications sent to relevant operatives</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-red-600 text-white font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center mr-4">
                  5m
                </div>
                <div>
                  <div className="text-white font-semibold">Deployment Window</div>
                  <div className="text-zinc-400 text-sm">Optimal time frame for mission execution</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-600/20 border border-red-600 rounded-lg">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-red-400 font-bold uppercase text-sm">Time Critical</span>
              </div>
              <p className="text-zinc-400 text-sm">
                Price glitches typically last 15-45 minutes. Swift deployment is essential for mission success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}