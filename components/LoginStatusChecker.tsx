"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from "next-auth/react"

const LoginStatusChecker = () => {
  const { status } = useSession()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  if (isLoggedIn) {
    return null; // Or render something else for logged-in users
  }

  if (status === "authenticated") {
    return null;
  }

  return (
    <div className='fixed top-16 place-self-center md:right-4'>
      <Link href="signup"><button className="btn bg-transparent border-none mr-3 h-8 min-h-8 rounded-md text-white font-bold hover:text-black dark:hover:text-white">Register</button></Link>
      <Link href="signin"><button className="btn bg-transparent border-none h-8 min-h-8 rounded-md text-white font-bold hover:text-black dark:hover:text-white">Log-In</button></Link>
    </div>
  );
};

export default LoginStatusChecker;