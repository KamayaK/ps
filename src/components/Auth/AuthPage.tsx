import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import { Crosshair } from 'lucide-react'

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex items-center justify-center">
        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:pr-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Crosshair className="w-16 h-16 text-orange-500 mr-4" />
              <div>
                <h1 className="text-6xl font-black text-white tracking-tighter">
                  PRICE<span className="text-orange-500">SNIPER</span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mt-2"></div>
              </div>
            </div>
            <p className="text-xl text-zinc-300 mb-6 max-w-md">
              Tactical price surveillance for Home Depot operations. Engage targets with precision accuracy.
            </p>
            <div className="space-y-2 text-zinc-400">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Real-time price tracking</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>State-based filtering</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Advanced sorting capabilities</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Crosshair className="w-10 h-10 text-orange-500 mr-2" />
              <h1 className="text-4xl font-black text-white tracking-tighter">
                PRICE<span className="text-orange-500">SNIPER</span>
              </h1>
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