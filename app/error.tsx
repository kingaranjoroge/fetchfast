'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-grow flex-col justify-center items-center gap-4 p-8 bg-backgroundgray min-h-[40vh]">
      <h2 className="text-xl font-display font-bold text-textdark">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-xl bg-brand hover:bg-brandhover text-white font-semibold transition-colors"
      >
        Try again
      </button>
    </div>
  )
}