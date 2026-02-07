'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { server } from '@/config';
import Auth from '@/components/auth/Auth';

const SignUp = () => {
  const router = useRouter()

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send the form data to the API endpoint
      const response = await axios.post(`${server}/api/users`, user);

      // Handle success or other logic here
      console.log(response.data);

      // Clear any previous error messages
      setEmailError('');
      setPhoneError('');

      if (response && response.data) {
        const { message } = response.data;

        if (message === 'User with the same email already exists') {
          setEmailError(message);
        } else if (message === 'User with the same phone number already exists') {
          setPhoneError(message);
        } else {
          // User created successfully, navigate to the homepage
          await router.push('/categories');
        }
      }

      // Reset the form fields
      setUser({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      // Handle error or display a message to the user
      console.error('Error registering user:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <main className="flex flex-grow flex-col justify-center items-center bg-backgroundgray py-12 px-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-backgroundlight dark:bg-backgroundgray border border-black/5 dark:border-white/10 shadow-soft-md">
          <h1 className="text-2xl font-display font-bold text-textdark mb-1">Create account</h1>
          <p className="text-sm text-textdark/70 mb-4">Join FetchFast to order and enjoy</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={user.name}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user.email}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          {emailError && <p className="text-sm text-red-600 dark:text-red-400">{emailError}</p>}
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            value={user.phone}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          {phoneError && <p className="text-sm text-red-600 dark:text-red-400">{phoneError}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={user.password}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
            value={user.confirmPassword}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-backgroundgray/50 px-4 py-3 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <button type="submit" className="w-full py-3 rounded-xl bg-brand hover:bg-brandhover text-white font-semibold transition-colors mt-2">
            Create account
          </button>
          <p className="text-sm text-textdark/80 text-center mt-2">
            Already have an account? <Link href="signin" className="text-brand font-medium hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
      <div className="mt-8 w-full max-w-md flex justify-center">
        <Auth />
      </div>
    </main>
  );
};

export default SignUp;
