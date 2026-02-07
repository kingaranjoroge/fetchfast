import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh] bg-backgroundgray">
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-accent border-t-transparent" />
    </div>
  )
}

export default Loading