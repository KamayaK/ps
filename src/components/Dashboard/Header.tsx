import React from 'react'
import { supabase } from '../../lib/supabase'
import { Crosshair, LogOut, User } from 'lucide-react'
import type { User as UserType } from '../../types'

interface HeaderProps {
  user: UserType
}

export function Header({ user }: HeaderProps) {
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="bg-stone-100 border-b-4 border-orange-600 shadow-xl relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Crosshair className="w-8 h-8 text-orange-600 mr-3" />
            <h1 className="text-2xl font-black text-stone-800 tracking-tighter">
              PRICE<span className="text-orange-600">SNIPER</span>
            </h1>
            <div className="ml-4 px-3 py-1 bg-green-600 text-white text-xs font-black rounded-full uppercase tracking-wide">
              ACTIVE
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-stone-700">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm font-bold">{user.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-black rounded-md transition-colors duration-200 uppercase tracking-wide shadow-lg"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}