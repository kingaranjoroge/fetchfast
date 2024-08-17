'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { server } from '@/config';
import Auth from '@/components/Auth';

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
          await router.push('/');
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
    <main className="flex flex-grow flex-col gap-3 justify-center items-center bg-base-100">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-full md:w-3/4 lg:w-1/2 px-8">
        <h1 className="text-2xl font-bold mb-4 text-violet-500">Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={user.name}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        {emailError && <div className="text-red-500">{emailError}</div>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          required
          value={user.phone}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        {phoneError && <div className="text-red-500">{phoneError}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={user.confirmPassword}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        <button type="submit" className="btn btn-primary w-full sm:w-3/4">
          Register
        </button>
        <div className="flex flex-row w-full sm:w-3/4 justify-between items-center mt-1">
          <span>Already have an account?</span>
          <span>
            <Link href="signin">Sign In</Link>
          </span>
        </div>
      </form>
      <Auth />
    </main>
  );
};

export default SignUp;
