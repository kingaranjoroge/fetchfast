import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
    imageLink: string | any,
    name: string,
    price: number,
    description: string,
}

const ProductCardComponent = ({imageLink, name, price, description}: Props) => {
  return (
    <div className="card w-64 bg-base-300 shadow-xl">
        {/* <Image
            src={imageLink}
            alt="picture of product"
        /> */}
        <figure className="h-52">
            <img src={imageLink} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">kes. {price}</div>
            </h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <Link href="/payment">
                    <button className="btn btn-active btn-accent">Order</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductCardComponent