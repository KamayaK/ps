import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import { Crosshair, Shield, Target, Zap } from 'lucide-react'

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen camo-gradient flex items-center justify-center p-4 military-grid">
      <div className="w-full max-w-6xl flex items-center justify-center">
        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:pr-12">
          <div className="text-center radar-sweep">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Crosshair className="w-20 h-20 text-orange-500 mr-4 tactical-glow" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-7xl font-black text-white tracking-tighter military-heading">
                  PRICE<span className="text-orange-500">SNIPER</span>
                </h1>
                <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 mt-2 military-border"></div>
                <div className="text-xs text-orange-400 font-bold tracking-widest mt-2 stencil-text">
                  TACTICAL SURVEILLANCE UNIT
                </div>
              </div>
            </div>
            
            <div className="combat-ready p-6 rounded-lg mb-6">
              <p className="text-xl text-zinc-100 mb-6 max-w-md stencil-text">
                TACTICAL PRICE SURVEILLANCE FOR HOME DEPOT OPERATIONS. ENGAGE TARGETS WITH PRECISION ACCURACY.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-zinc-300">
                <div className="flex items-center justify-center bg-zinc-900/50 p-3 rounded border border-green-500">
                  <Target className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-sm font-bold stencil-text">REAL-TIME TRACKING</span>
                </div>
                <div className="flex items-center justify-center bg-zinc-900/50 p-3 rounded border border-blue-500">
                  <Shield className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="text-sm font-bold stencil-text">STATE FILTERING</span>
                </div>
                <div className="flex items-center justify-center bg-zinc-900/50 p-3 rounded border border-purple-500">
                  <Zap className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-sm font-bold stencil-text">ADVANCED SORTING</span>
                </div>
                <div className="flex items-center justify-center bg-zinc-900/50 p-3 rounded border border-red-500">
                  <Crosshair className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-sm font-bold stencil-text">PRECISION INTEL</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wide border-2 border-red-400">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                MISSION STATUS: ACTIVE
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Crosshair className="w-12 h-12 text-orange-500 mr-2 tactical-glow" />
              <h1 className="text-5xl font-black text-white tracking-tighter military-heading">
                PRICE<span className="text-orange-500">SNIPER</span>
              </h1>
            </div>
            <div className="text-xs text-orange-400 font-bold tracking-widest stencil-text">
              TACTICAL SURVEILLANCE UNIT
            </div>
          </div>
          
          {isLogin ? (
            <LoginForm onToggleMode={() => setIsLogin(false)} />
          ) : (
            <SignupForm onToggleMode={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  )
}