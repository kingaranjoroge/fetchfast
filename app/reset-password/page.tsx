'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { server } from '@/config';

const ResetPassword = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (!token) {
      setErrorMessage('Invalid or expired token');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${server}/api/reset-password`, { token, password });
      setMessage(response.data.message);

      if (response.data.success) {
        router.push('/signin');
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorMessage('Error resetting password');
    }
  };

  return (
    <main className="flex flex-grow flex-col gap-3 justify-center items-center bg-base-100">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-full md:w-3/4 lg:w-1/2 px-8">
        <h1 className="text-2xl font-bold mb-4 text-violet-500">Reset Password</h1>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full sm:w-3/4"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="input input-bordered w-full sm:w-3/4"
        />
        <button type="submit" className="btn btn-primary w-full sm:w-3/4">
          Reset Password
        </button>
        {message && message === 'Password reset successfully'? <div className="text-green-500">{message}</div>: <div className="text-red-500">{message}</div>}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </main>
  );
};

export default ResetPassword;