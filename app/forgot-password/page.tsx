'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { server } from '@/config';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}/api/forgot-password`, { email });
      setMessage(response.data.message);

      setEmail('');
    } catch (error) {
      console.error('Error sending password reset email:', error);
      setErrorMessage('Error sending password reset email');
    }
  };

  return (
    <main className="flex flex-grow flex-col justify-center items-center bg-backgroundgray py-12 px-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-backgroundlight dark:bg-backgroundgray border border-black/5 dark:border-white/10 shadow-soft-md">
          <h1 className="text-2xl font-display font-bold text-textdark mb-1">Reset password</h1>
          <p className="text-sm text-textdark/70 mb-4">Enter your email and we&apos;ll send a reset link</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button type="submit" className="w-full py-3 rounded-xl bg-brand hover:bg-brandhover text-white font-semibold transition-colors mt-2">
            Send reset link
          </button>
          {message && (
            <p className={message === 'Password reset email sent, check your mail' ? 'text-sm text-green-600 dark:text-green-400' : 'text-sm text-red-600 dark:text-red-400'}>
              {message}
            </p>
          )}
          {errorMessage && <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>}
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;