"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import axios from 'axios'

const SignUp = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Send the form data to the API endpoint
      const response = await axios.post('http://localhost:3000/api/users', formData)

      // Handle success or other logic here
      console.log('User registered:', response.data)
    } catch (error) {
      // Handle error or display a message to the user
      console.error('Error registering user:', error)
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    })
  }

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
        <input 
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
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
        <input 
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          className="input input-bordered w-1/2" 
        />
        <button type="submit" onClick={handleSubmit} className="btn btn-primary w-1/2">
          Register
        </button>
        <div className="flex flex-row w-1/2 justify-between items-center mt-1">
          <span>Already have an account?</span>
          <span><Link href="signin">Sign In</Link></span>
        </div>
      </form>
    </main>
  )
}

export default SignUp