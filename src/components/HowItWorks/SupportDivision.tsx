import React from 'react'
import { Headphones, MessageCircle, Book, Mail } from 'lucide-react'

export function SupportDivision() {
  return (
    <section id="support-division" className="py-20 bg-zinc-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Headphones className="w-8 h-8 text-orange-500 mr-3" />
            <h2 className="text-4xl font-black text-white uppercase tracking-tight">
              Support Division
            </h2>
          </div>
          <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
            Our tactical support division is standing by to assist with mission planning, 
            technical issues, and operational guidance to ensure your success in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Support Channels */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Support Channels
            </h3>

            <div className="space-y-6">
              <div className="bg-zinc-900 border border-orange-500 p-6 rounded-lg hover:border-orange-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 text-orange-500 mr-4" />
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                    Live Chat Support
                  </h4>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Real-time assistance from our tactical support specialists for urgent 
                  mission-critical issues and immediate guidance.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-500">
                    <div>Response Time: &lt; 2 minutes</div>
                    <div>Availability: 24/7 for Elite operatives</div>
                  </div>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md font-bold uppercase text-sm transition-colors duration-200">
                    Start Chat
                  </button>
                </div>
              </div>

              <div className="bg-zinc-900 border border-green-500 p-6 rounded-lg hover:border-green-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Mail className="w-8 h-8 text-green-500 mr-4" />
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                    Email Support
                  </h4>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Detailed technical support and mission planning assistance via secure 
                  email communication channels.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-500">
                    <div>Response Time: &lt; 4 hours</div>
                    <div>Email: support@pricesniper.com</div>
                  </div>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-bold uppercase text-sm transition-colors duration-200">
                    Send Email
                  </button>
                </div>
              </div>

              <div className="bg-zinc-900 border border-blue-500 p-6 rounded-lg hover:border-blue-400 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Book className="w-8 h-8 text-blue-500 mr-4" />
                  <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                    Knowledge Base
                  </h4>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Comprehensive tactical manuals, tutorials, and troubleshooting guides 
                  for self-service mission support.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-500">
                    <div>100+ Articles</div>
                    <div>Video Tutorials Available</div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-bold uppercase text-sm transition-colors duration-200">
                    Browse Docs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Support Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white uppercase tracking-wide">
              Support Features
            </h3>

            <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide text-center">
                Support Tiers
              </h4>
              
              <div className="space-y-6">
                <div className="bg-zinc-800 border border-zinc-600 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-white font-bold text-lg uppercase tracking-wide">Free Tier</h5>
                    <div className="bg-zinc-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Standard
                    </div>
                  </div>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• Email support (24-48 hour response)</li>
                    <li>• Knowledge base access</li>
                    <li>• Community forum support</li>
                    <li>• Basic troubleshooting guides</li>
                  </ul>
                </div>

                <div className="bg-zinc-800 border border-orange-500 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-white font-bold text-lg uppercase tracking-wide">Elite Tier</h5>
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                      Priority
                    </div>
                  </div>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li>• 24/7 live chat support</li>
                    <li>• Priority email support (&lt; 4 hours)</li>
                    <li>• Phone support for critical issues</li>
                    <li>• Personal mission planning assistance</li>
                    <li>• Advanced tactical training sessions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-700 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                Common Support Topics
              </h4>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-white font-semibold text-sm">Setting up location filters</div>
                  <div className="text-zinc-500 text-xs">Configure regional targeting</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-white font-semibold text-sm">Customizing alert preferences</div>
                  <div className="text-zinc-500 text-xs">Optimize notification settings</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-white font-semibold text-sm">Understanding deal verification</div>
                  <div className="text-zinc-500 text-xs">How we verify pricing accuracy</div>
                </div>
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <div className="text-white font-semibold text-sm">Mobile app troubleshooting</div>
                  <div className="text-zinc-500 text-xs">Resolve mobile platform issues</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide text-center">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">How accurate are the deals?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Our verification system maintains a 94% accuracy rate. All deals are verified 
                  within 30 seconds of detection and continuously monitored for changes.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">What if a deal doesn't work?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Report any inaccurate deals through our platform. We investigate all reports 
                  within 2 hours and provide alternative recommendations when available.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">Can I get refunds for missed deals?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  While we can't control retailer inventory, Elite members receive priority 
                  notifications and exclusive early access to maximize success rates.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">How do I upgrade my support tier?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Elite support is included with Elite membership. Upgrade through your account 
                  settings or contact our support team for assistance.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">Is phone support available?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Phone support is available for Elite members during critical mission windows 
                  and for urgent technical issues requiring immediate resolution.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2">Do you offer training sessions?</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Elite members receive access to monthly tactical training webinars and 
                  one-on-one mission planning sessions with our specialists.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
            Need Immediate Support?
          </h3>
          <p className="text-zinc-400 mb-6">
            Our tactical support division is standing by to assist with your mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-md uppercase tracking-wide transition-colors duration-200">
              Start Live Chat
            </button>
            <button className="border-2 border-zinc-600 hover:border-orange-500 text-white font-bold py-3 px-8 rounded-md uppercase tracking-wide transition-colors duration-200 hover:bg-orange-500/10">
              Email Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}