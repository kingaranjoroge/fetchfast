import React from 'react'

interface Props {
  name: string;
  backgroundImage: string;
}

const CategoryComponent = ({ name, backgroundImage }: Props) => {
  return (
    <div
      className="group relative w-72 sm:w-80 h-44 rounded-2xl overflow-hidden shadow-soft-md hover:shadow-soft-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
      style={{ backgroundImage: `url(/${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
        <h2 className="text-white font-display font-bold text-xl tracking-tight text-center px-4 py-2 rounded-xl bg-black/50 shadow-lg">
          {name}
        </h2>
      </div>
    </div>
  )
}

export default CategoryComponent