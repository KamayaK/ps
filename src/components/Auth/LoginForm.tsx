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
    <div className="bg-stone-100 border-2 border-stone-300 p-8 rounded-lg shadow-2xl w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <LogIn className="w-8 h-8 text-orange-600 mr-2" />
          <h2 className="text-2xl font-black text-stone-800 uppercase tracking-wide">TACTICAL LOGIN</h2>
        </div>
        <p className="text-stone-600 font-semibold">Access your mission control</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-black text-stone-700 mb-2 uppercase tracking-wide">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-stone-300 rounded-md text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 font-medium"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-black text-stone-700 mb-2 uppercase tracking-wide">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-stone-300 rounded-md text-stone-800 placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 font-medium"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center p-3 bg-red-100 border-2 border-red-300 rounded-md">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-700 text-sm font-semibold">{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-black py-3 px-4 rounded-md transition-colors duration-200 uppercase tracking-wide text-lg shadow-lg"
        >
          {loading ? 'AUTHENTICATING...' : 'ENGAGE MISSION'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-stone-600 font-medium">
          Need clearance?{' '}
          <button
            onClick={onToggleMode}
            className="text-orange-600 hover:text-orange-700 font-black uppercase tracking-wide"
          >
            Register Here
          </button>
        </p>
      </div>
    </div>
  )
}