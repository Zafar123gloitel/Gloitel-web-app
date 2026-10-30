'use client';

import { login } from '@/lib/adminAuth';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email.trim(), password);
      router.replace('/admin/dashboard');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-[#0a0a0a] px-4'>
      {/* Background glow */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1447e6]/10 blur-[120px]' />
      </div>

      <div className='relative w-full max-w-md'>
        {/* Card */}
        <div className='rounded-2xl border border-white/10 bg-[#111111] p-8 shadow-2xl'>
          {/* Logo */}
          <div className='mb-8 flex flex-col items-center gap-3'>
            <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1447e6]'>
              <span className='text-2xl font-bold text-white'>G</span>
            </div>
            <div className='text-center'>
              <h1 className='text-xl font-bold text-white'>Admin Panel</h1>
              <p className='mt-1 text-sm text-[#969696]'>Sign in to manage Gloitel</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Email */}
            <div>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>Email Address</label>
              <div className='relative'>
                <Mail
                  size={16}
                  className='absolute top-1/2 left-3 -translate-y-1/2 text-[#969696]'
                />
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder='admin@gloitel.com'
                  className='w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pr-4 pl-9 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:bg-[#1447e6]/5 focus:ring-1 focus:ring-[#1447e6]/30'
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className='mb-2 block text-xs font-medium text-[#969696]'>Password</label>
              <div className='relative'>
                <Lock
                  size={16}
                  className='absolute top-1/2 left-3 -translate-y-1/2 text-[#969696]'
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder='••••••••'
                  className='w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pr-10 pl-9 text-sm text-white transition-all outline-none placeholder:text-[#969696]/50 focus:border-[#1447e6]/50 focus:bg-[#1447e6]/5 focus:ring-1 focus:ring-[#1447e6]/30'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute top-1/2 right-3 -translate-y-1/2 text-[#969696] hover:text-white'
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className='rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3'>
                <p className='text-xs text-red-400'>{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type='submit'
              disabled={loading}
              className='flex w-full items-center justify-center gap-2 rounded-lg bg-[#1447e6] py-3 text-sm font-semibold text-white transition-all hover:bg-[#1447e6]/80 disabled:cursor-not-allowed disabled:opacity-60'
            >
              {loading ? (
                <>
                  <span className='h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white' />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
