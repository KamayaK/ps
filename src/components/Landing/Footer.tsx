import React from 'react'
import { Crosshair, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Crosshair className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-black text-white tracking-tighter">
                PRICE<span className="text-orange-500">SNIPER</span>
              </h3>
            </div>
            <p className="text-zinc-400 mb-6 max-w-md">
              Elite price surveillance for DIY warriors and home improvement professionals. 
              Deploy tactical precision to secure the best deals on quality tools and supplies.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-zinc-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <Mail className="w-5 h-5 text-zinc-400 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-zinc-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <Phone className="w-5 h-5 text-zinc-400 hover:text-white" />
              </div>
              <div className="w-10 h-10 bg-zinc-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors duration-300 cursor-pointer">
                <MapPin className="w-5 h-5 text-zinc-400 hover:text-white" />
              </div>
            </div>
          </div>

          {/* Mission Links */}
          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-4">
              Mission Control
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Terms of Engagement
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Mission Brief
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Base Camp
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Support Division
                </a>
              </li>
            </ul>
          </div>

          {/* Operations */}
          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-4">
              Operations
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Deploy System
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Training Protocol
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Intel Reports
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors duration-200 uppercase text-sm font-semibold">
                  Field Manual
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-500 text-sm">
              © 2025 PriceSniper. All rights reserved. Mission classified.
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-zinc-500 text-sm uppercase font-semibold">
                System Status: Operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}