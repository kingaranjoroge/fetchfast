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
    <main className="flex flex-grow flex-col gap-3 justify-center items-center bg-base-100">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-full md:w-3/4 lg:w-1/2 px-8">
        <h1 className="text-2xl font-bold mb-4 text-violet-500">Forgot Password</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full sm:w-3/4"
        />
        <button type="submit" className="btn btn-primary w-full sm:w-3/4">
          Send Reset Link
        </button>
        {message && <div className="text-green-500">{message}</div>}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </form>
    </main>
  );
};

export default ForgotPassword;