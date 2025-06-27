import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react'

interface LoginFormProps {
  onToggleMode: () => void
}

export function LoginForm({ onToggleMode }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    }
    
    setLoading(false)
  }

  return (
    <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg shadow-2xl w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <LogIn className="w-8 h-8 text-orange-500 mr-2" />
          <h2 className="text-2xl font-bold text-white">TACTICAL LOGIN</h2>
        </div>
        <p className="text-zinc-400">Access your mission control</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-600 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center p-3 bg-red-900/50 border border-red-600 rounded-md">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-800 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200 uppercase tracking-wide"
        >
          {loading ? 'AUTHENTICATING...' : 'ENGAGE MISSION'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-zinc-400">
          Need clearance?{' '}
          <button
            onClick={onToggleMode}
            className="text-orange-500 hover:text-orange-400 font-semibold uppercase tracking-wide"
          >
            Register Here
          </button>
        </p>
      </div>
    </div>
  )
}