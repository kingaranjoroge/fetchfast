'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:3000/api/users', formData);

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
      setFormData({
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <main className="flex flex-grow justify-center items-center bg-base-100">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-1/2">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        {emailError && <div className="text-red-500">{emailError}</div>}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        {phoneError && <div className="text-red-500">{phoneError}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        <button type="submit" className="btn btn-primary w-1/2">
          Register
        </button>
        <div className="flex flex-row w-1/2 justify-between items-center mt-1">
          <span>Already have an account?</span>
          <span>
            <Link href="signin">Sign In</Link>
          </span>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
