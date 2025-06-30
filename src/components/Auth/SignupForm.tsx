import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { UserPlus, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react'

interface SignupFormProps {
  onToggleMode: () => void
}

export function SignupForm({ onToggleMode }: SignupFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const {data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    

    if (error) {
      setError(error.message)
    } else {
      const user = data.user
      if (user) {
        const {error: insertErr } = await supabase.from("users").insert({
          id: user.id,      // FK → auth.users.id
          email: user.email,
              tier: "free",     // any defaults you need
              created_at: new Date(),
          });
        if (insertErr) {
          setError(`Failed to create user profile: ${insertErr.message}`)
          return
        }
      }
      setSuccess(true)
    }
    
    setLoading(false)
  }

  if (success) {
    return (
      <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">MISSION REGISTERED</h2>
          <p className="text-zinc-400 mb-6">
            Your account has been created successfully. You can now access PriceSniper.
          </p>
          <button
            onClick={onToggleMode}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 uppercase tracking-wide"
          >
            Proceed to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-zinc-900 border border-zinc-700 p-8 rounded-lg shadow-2xl w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <UserPlus className="w-8 h-8 text-orange-500 mr-2" />
          <h2 className="text-2xl font-bold text-white">TACTICAL REGISTRATION</h2>
        </div>
        <p className="text-zinc-400">Join the price surveillance unit</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-6">
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
              placeholder="Create password (min 6 characters)"
              required
              minLength={6}
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
          {loading ? 'PROCESSING...' : 'ACTIVATE ACCOUNT'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-zinc-400">
          Already have clearance?{' '}
          <button
            onClick={onToggleMode}
            className="text-orange-500 hover:text-orange-400 font-semibold uppercase tracking-wide"
          >
            Login Here
          </button>
        </p>
      </div>
    </div>
  )
}