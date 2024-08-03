import React from 'react'

interface Props {
  name: string;
  backgroundImage: string;
}

const CategoryComponent = ({ name, backgroundImage }: Props) => {
  return (
    <div 
      className="card w-64 h-40 bg-slate-500 text-primary-content relative overflow-hidden transform transition-transform duration-300 hover:scale-105" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="card-body justify-center items-center z-10 relative">
        <h2 className="card-title text-slate-200 bg-slate-900">{name}</h2>
      </div>
    </div>
  )
}

export default CategoryComponent