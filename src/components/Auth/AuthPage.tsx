import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import { Crosshair } from 'lucide-react'

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Camouflage pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-700 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-600 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-800 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-green-700 rounded-full blur-lg"></div>
      </div>
      
      <div className="w-full max-w-6xl flex items-center justify-center relative z-10">
        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center lg:pr-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <Crosshair className="w-16 h-16 text-orange-600 mr-4" />
              <div>
                <h1 className="text-6xl font-black text-white tracking-tighter">
                  PRICE<span className="text-orange-600">SNIPER</span>
                </h1>
                <div className="h-1 bg-gradient-to-r from-orange-600 to-orange-700 mt-2"></div>
              </div>
            </div>
            <p className="text-xl text-stone-200 mb-6 max-w-md font-medium">
              Elite gear for the frontline. Tactical price surveillance for Home Depot operations.
            </p>
            <div className="space-y-3 text-stone-300">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="font-semibold">Real-time price tracking</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="font-semibold">State-based filtering</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                <span className="font-semibold">Advanced sorting capabilities</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Crosshair className="w-10 h-10 text-orange-600 mr-2" />
              <h1 className="text-4xl font-black text-white tracking-tighter">
                PRICE<span className="text-orange-600">SNIPER</span>
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