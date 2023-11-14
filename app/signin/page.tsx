'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'

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
      // Send the form data to the login API endpoint
      const response = await axios.post('http://localhost:3000/api/login', formData);

      // Handle success or other logic here
      console.log(response.data);

      setErrorMessage('')

      if (response && response.data) {
        const { message } = response.data;

        if (message === 'No such user exists') {
          setErrorMessage(message);
        } else if (message === 'Wrong password') {
          setErrorMessage(message);
        } else {
          // User created successfully, navigate to the homepage
          await router.push('/categories');
        }
      }

      setFormData({
        email: '',
        password: '',      
      })

    } catch (error) {
      // Handle error or display a message to the user
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
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 w-1/2">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="input input-bordered w-1/2"
        />
        <button type="submit" className="btn btn-primary w-1/2">
          Login
        </button>
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <div className="flex flex-row w-1/2 justify-between items-center mt-1">
          <span>Don't have an account?</span>
          <span>
            <Link href="signup">Sign Up</Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default SignIn