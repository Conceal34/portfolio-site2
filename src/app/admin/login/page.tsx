"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      if (res.ok) {
        router.push('/admin')
        router.refresh()
      } else {
        const data = await res.json()
        setError(data.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col flex-1 h-full items-center justify-center bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] rounded-3xl border border-[#1A1A1A]/10 dark:border-white/10 p-6 relative">
      <div className="w-full max-w-sm flex flex-col gap-6 bg-[#EAE4D3] dark:bg-[#2A2A28] p-8 rounded-2xl border border-[#1A1A1A]/10 dark:border-white/10 shadow-sm">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-12 h-12 bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1A1A1A] rounded-full flex items-center justify-center mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="font-playfair font-bold text-2xl">Admin Access</h1>
          <p className="text-xs opacity-70">Enter your secure password to continue</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white dark:bg-[#151515] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xl outline-none focus:border-[#4C4B40] dark:focus:border-white transition-colors"
              required
            />
          </div>
          {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1A1A1A] font-sans font-bold tracking-wider uppercase text-xs py-3.5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
