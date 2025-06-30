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
    <header className="bg-zinc-900 border-b border-zinc-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Crosshair className="w-8 h-8 text-orange-500 mr-3" />
            <h1 className="text-2xl font-black text-white tracking-tighter">
              PRICE<span className="text-orange-500">SNIPER</span>
            </h1>
            <div className="ml-4 px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              ACTIVE
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-zinc-300">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{user.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-md transition-colors duration-200 uppercase tracking-wide"
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