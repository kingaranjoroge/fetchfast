import React from 'react'
import Link from 'next/link'

const SignIn = () => {
  return (
    <main className="flex flex-grow justify-center items-center bg-base-100">
      <form action="" className="flex flex-col justify-center items-center gap-2 w-1/2">
        <h1 className="text-2xl font-bold mb-4">Login</h1>        
        <input type="text" placeholder="Email" className="input input-bordered w-1/2" />        
        <input type="text" placeholder="Password" className="input input-bordered w-1/2" />        
        <div className="flex flex-row w-1/2 justify-between items-center mt-1">
          <span>Don't have an account?</span>
          <span><Link href="signup">Sign Up</Link></span>
        </div>
      </form>
    </main>
  )
}

export default SignIn