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
      <div className="bg-stone-100 border-2 border-stone-300 p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-stone-800 mb-4 uppercase tracking-wide">MISSION REGISTERED</h2>
          <p className="text-stone-600 mb-6 font-medium">
            Your account has been created successfully. You can now access PriceSniper.
          </p>
          <button
            onClick={onToggleMode}
            className="bg-orange-600 hover:bg-orange-700 text-white font-black py-3 px-6 rounded-md transition-colors duration-200 uppercase tracking-wide shadow-lg"
          >
            Proceed to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-stone-100 border-2 border-stone-300 p-8 rounded-lg shadow-2xl w-full max-w-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <UserPlus className="w-8 h-8 text-orange-600 mr-2" />
          <h2 className="text-2xl font-black text-stone-800 uppercase tracking-wide">TACTICAL REGISTRATION</h2>
        </div>
        <p className="text-stone-600 font-semibold">Join the price surveillance unit</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-6">
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
              placeholder="Create password (min 6 characters)"
              required
              minLength={6}
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
          {loading ? 'PROCESSING...' : 'ACTIVATE ACCOUNT'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-stone-600 font-medium">
          Already have clearance?{' '}
          <button
            onClick={onToggleMode}
            className="text-orange-600 hover:text-orange-700 font-black uppercase tracking-wide"
          >
            Login Here
          </button>
        </p>
      </div>
    </div>
  )
}