import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import LoginStatusChecker from '@/components/auth/LoginStatusChecker'; // Import the client component

export default function Home() {
  return (
    <main className="flex flex-grow justify-center items-center flex-col relative overflow-hidden bg-homepage-background bg-cover bg-center bg-fixed min-h-[calc(100vh-6rem)]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/20" aria-hidden />
      <Navbar />
      <LoginStatusChecker />
      <div className="flex flex-col justify-start sm:justify-center sm:items-center z-10 gap-5 xl:gap-6 px-6 sm:px-8 text-center max-w-3xl">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-white font-display font-bold tracking-tight drop-shadow-lg">
          Welcome to <span className="text-white/95">FetchFast.</span>
        </h1>
        <p className="text-base sm:text-xl lg:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
          Your gateway to comfort and convenience. Order, relax, enjoy.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 z-10 pt-12 px-6">
        <Link href="/categories">
          <button className="btn rounded-xl px-6 py-3 bg-backgroundlight text-textdark font-semibold shadow-soft-md hover:bg-backgroundhoverdark hover:text-texthoverlight border-0 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            View categories
          </button>
        </Link>
        <Link href="/categories/appetizers">
          <button className="btn rounded-xl px-6 py-3 bg-brand text-white font-semibold shadow-soft-md hover:bg-brandhover border-0 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            Order now
          </button>
        </Link>
      </div>
    </main>
  );
}