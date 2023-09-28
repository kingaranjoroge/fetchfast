import React from 'react'
import Image from 'next/image'
// import categorybg from '../public/categorycardbg.jpg'

interface Props {
  name: string;
}

const CategoryComponent = ({name}: Props) => {
  return (
    <div className="card w-64 h-40 bg-slate-500 text-primary-content bg-opacity-50">
      {/* <Image
        alt="Background Image"
        src={categorybg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      /> */}
      <div className="card-body justify-center items-center z-10">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  )
}

export default CategoryComponent