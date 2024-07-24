"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const InactivityLogout = () => {
  const router = useRouter();

  useEffect(() => {
    let logoutTimer: NodeJS.Timeout;

    const setLogoutTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        console.log('User has been logged out due to inactivity.');
        localStorage.removeItem('user');
        router.push('/signin');
      }, 24 * 60 * 60 * 1000); // 24 hours
    };

    const resetTimer = () => {
      setLogoutTimer();
    };

    setLogoutTimer();

    // Event listeners to reset the timer on activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('click', resetTimer);
    window.addEventListener('keypress', resetTimer);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      clearTimeout(logoutTimer);
    };
  }, [router]);

  return null; // This component does not render anything
};

export default InactivityLogout;