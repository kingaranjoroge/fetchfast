'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { server } from '@/config';
import Auth from '@/components/auth/Auth'

const SignIn = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(`${server}/api/login`, formData);
  
      console.log(response.data);
  
      setErrorMessage('')
  
      if (response && response.data) {
        const { message, user } = response.data; // Assuming the API returns a 'user' object on successful login
  
        if (message === 'No such user exists' || message === 'Wrong password') {
          setErrorMessage(message);
        } else {
          // Assuming 'user' contains the user data on successful login
          // Store user data in local storage
          localStorage.setItem('user', JSON.stringify(user));
  
          // User logged in successfully, navigate to the homepage
          await router.push('/categories');
        }
      }
  
      setFormData({
        email: '',
        password: '',      
      })
  
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-grow flex-col justify-center items-center bg-backgroundgray py-12 px-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-backgroundlight dark:bg-backgroundgray border border-black/5 dark:border-white/10 shadow-soft-md">
          <h1 className="text-2xl font-display font-bold text-textdark mb-1">Sign in</h1>
          <p className="text-sm text-textdark/70 mb-4">Welcome back to FetchFast</p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <Link className="text-sm text-brand hover:underline font-medium" href="forgot-password">Forgot password?</Link>
          <button type="submit" className="w-full py-3 rounded-xl bg-brand hover:bg-brandhover text-white font-semibold transition-colors mt-2">
            Sign in
          </button>
          {errorMessage && <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>}
          <p className="text-sm text-textdark/80 text-center mt-2">
            Don&apos;t have an account?{' '}
            <Link href="signup" className="text-brand font-medium hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
      <div className="mt-8 w-full max-w-md flex justify-center">
        <Auth />
      </div>
    </main>
  );
}

export default SignIn