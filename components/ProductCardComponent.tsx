"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    imageLink: string | any,
    name: string,
    price: number,
    description: string,
}

const ProductCardComponent = ({ imageLink, name, price, description }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const calculateTotalPrice = () => {
        return price * quantity;
    };

    // const truncateDescription = (desc: string) => {
    //     const words = desc.split(' ');
    //     if (words.length > 5) {
    //         return words.slice(0, 5).join(' ') + '...';
    //     }
    //     return desc;
    // };

    return (
        <div className="flex flex-col card w-64 md:w-72 xl:w-64 bg-base-300 shadow-xl">
            <Image
                src={imageLink}
                alt="picture of product"
            />
            <div className="flex flex-col p-4 gap-2">
                <div className='flex flex-row justify-between'>
                    <h2 className="card-title text-sm font-bold">{name}</h2>
                    <div className="badge badge-secondary">kes. {price} </div>
                </div>                
                <p className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis hover:overflow-visible hover:whitespace-normal' title={description}>{description}</p>
                <div className="card-actions justify-center pt-2">
                    <button className="btn btn-active btn-accent" onClick={toggleModal}>
                        Order
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Enter Quantity</h3>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-full border rounded-lg px-3 py-2 mb-4"
                        />
                        <h4 className="text-lg font-semibold mb-2">Total Price: kes. {calculateTotalPrice()}</h4>
                        <div className="flex justify-end space-x-2">
                            <button
                                className="btn btn-active btn-accent"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                            <Link href="/payment">
                                <button className="btn btn-active btn-accent">Proceed to Payment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCardComponent;

