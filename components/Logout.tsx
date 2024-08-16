import { NextRouter } from "next/router";
import { signOut } from "next-auth/react";

export const logout = async (router: NextRouter) => {
  // Clear user data from localStorage or any other storage mechanism you're using
  localStorage.removeItem('user');

  // Sign out using next-auth
  await signOut({
    callbackUrl: '/', // Redirect to the homepage after sign out
    redirect: false, // Prevent automatic redirection by next-auth
  });

  // Check if the current path is the homepage
  if (router.pathname === '/') {
    // Refresh the page if already on the homepage
    router.reload();
  } else {
    // Redirect to the homepage if on any other page
    router.push('/');
  }
};