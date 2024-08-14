'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { server } from '@/config';
import GoogleAuth from '@/components/GoogleAuth'

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
    <main className="flex flex-grow justify-center items-center bg-base-100">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-full md:w-3/4 lg:w-1/2 px-8">
        <h1 className="text-2xl font-bold mb-4 text-violet-500">Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="input input-bordered w-full sm:w-3/4"
        />
        <button type="submit" className="btn btn-primary w-full sm:w-3/4">
          Login
        </button>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <div className="flex flex-row w-full sm:w-3/4 justify-between items-center mt-1">
          <span>Dont have an account?</span>
          <span>
            <Link href="signup">Sign Up</Link>
          </span>
        </div>
        <GoogleAuth />
      </form>
    </main>
  );
}

export default SignIn