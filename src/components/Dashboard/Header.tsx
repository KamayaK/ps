import React from 'react'
import { supabase } from '../../lib/supabase'
import { Crosshair, LogOut, User, Shield, Target } from 'lucide-react'
import type { User as UserType } from '../../types'

interface HeaderProps {
  user: UserType
}

export function Header({ user }: HeaderProps) {
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="combat-ready shadow-xl border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="relative">
              <Crosshair className="w-10 h-10 text-orange-500 mr-3 tactical-glow" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black text-white tracking-tighter military-heading">
                PRICE<span className="text-orange-500">SNIPER</span>
              </h1>
              <div className="text-xs text-orange-400 font-bold tracking-widest stencil-text">
                TACTICAL SURVEILLANCE UNIT
              </div>
            </div>
            <div className="ml-6 flex items-center space-x-3">
              <div className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full stencil-text border border-green-400">
                <Target className="w-3 h-3 inline mr-1" />
                ACTIVE
              </div>
              <div className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full stencil-text border border-blue-400">
                <Shield className="w-3 h-3 inline mr-1" />
                SECURE
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="combat-ready px-4 py-2 rounded">
              <div className="flex items-center text-zinc-200">
                <User className="w-5 h-5 mr-2 text-orange-500" />
                <div>
                  <span className="text-sm font-bold stencil-text">{user.email}</span>
                  <div className="text-xs text-orange-400 stencil-text">OPERATOR</div>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-md transition-all duration-200 stencil-text border-2 border-red-400 tactical-glow"
            >
              <LogOut className="w-4 h-4 mr-2" />
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}