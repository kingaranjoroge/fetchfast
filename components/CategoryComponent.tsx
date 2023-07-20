import React from 'react'

interface Props {
  name: string;
}

const CategoryComponent = ({name}: Props) => {
  return (
    <div className="card w-64 h-40 bg-primary text-primary-content">
      <div className="card-body justify-center items-center">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  )
}

export default CategoryComponent