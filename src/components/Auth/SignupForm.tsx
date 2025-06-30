import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { UserPlus, Mail, Lock, AlertCircle, CheckCircle, Shield } from 'lucide-react'

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
          id: user.id,
          email: user.email,
          tier: "free",
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
      <div className="high-contrast-card p-8 rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>
        
        <div className="text-center">
          <div className="relative mb-4">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto tactical-glow" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 military-heading">MISSION REGISTERED</h2>
          <div className="text-xs text-green-400 font-bold tracking-widest mb-4 stencil-text">
            CLEARANCE LEVEL: APPROVED
          </div>
          <p className="text-zinc-300 mb-6 stencil-text">
            YOUR ACCOUNT HAS BEEN CREATED SUCCESSFULLY. YOU CAN NOW ACCESS PRICESNIPER TACTICAL SYSTEMS.
          </p>
          <button
            onClick={onToggleMode}
            className="tactical-button text-white font-bold py-3 px-6 rounded-md stencil-text"
          >
            PROCEED TO LOGIN
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="high-contrast-card p-8 rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
      
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <Shield className="w-10 h-10 text-orange-500 mr-2 tactical-glow" />
            <UserPlus className="w-6 h-6 text-white absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-1" />
          </div>
          <h2 className="text-2xl font-bold text-white military-heading">TACTICAL REGISTRATION</h2>
        </div>
        <p className="text-zinc-300 stencil-text text-sm">JOIN THE PRICE SURVEILLANCE UNIT</p>
        <div className="mt-2 text-xs text-orange-400 font-bold tracking-widest">
          CLEARANCE LEVEL: PENDING
        </div>
      </div>

      <form onSubmit={handleSignup} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-200 mb-2 stencil-text">
            EMAIL IDENTIFIER
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 tactical-input rounded-md text-white placeholder-zinc-400 focus:outline-none transition-all duration-200 stencil-text"
              placeholder="ENTER EMAIL ADDRESS"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-200 mb-2 stencil-text">
            ACCESS CODE
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 tactical-input rounded-md text-white placeholder-zinc-400 focus:outline-none transition-all duration-200 stencil-text"
              placeholder="CREATE PASSWORD (MIN 6 CHARS)"
              required
              minLength={6}
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center p-3 bg-red-900/70 border-2 border-red-500 rounded-md">
            <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-300 text-sm font-bold stencil-text">{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full tactical-button text-white font-bold py-3 px-4 rounded-md stencil-text disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'PROCESSING...' : 'ACTIVATE ACCOUNT'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <div className="border-t border-zinc-600 pt-4">
          <p className="text-zinc-400 stencil-text text-sm">
            ALREADY HAVE CLEARANCE?{' '}
            <button
              onClick={onToggleMode}
              className="text-orange-400 hover:text-orange-300 font-bold stencil-text transition-colors duration-200"
            >
              LOGIN HERE
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}