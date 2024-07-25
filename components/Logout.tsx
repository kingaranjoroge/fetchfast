// import { AppRouterInstance, NextRouter } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { NextRouter } from "next/router";

export const logout = (router: NextRouter) => {
  // Clear user data from localStorage or any other storage mechanism you're using
  localStorage.removeItem('user');

  // Check if the current path is the homepage
  if (router.pathname === '/') {
    // Refresh the page if already on the homepage
    router.reload();
  } else {
    // Redirect to the homepage if on any other page
    router.push('/');
  }
};
