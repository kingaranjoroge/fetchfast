"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

interface Props {
    imageLink: string | any,
    name: string,
    price: number,
    description: string,
}

const ProductCardComponent = ({ imageLink, name, price, description }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [phone, setPhone] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const calculateTotalPrice = () => {
        return price * quantity;
    };

    const handlePayment = async () => {
        try {
            const response = await axios.post('/api/stk-push', {
                phone,
                amount: calculateTotalPrice(),
            });
            console.log('STK Push Response:', response.data);
        } catch (error) {
            console.error('Error initiating STK push:', error);
        }
    };

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
                        <input
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter phone number"
                            className="w-full border rounded-lg px-3 py-2 mb-4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                className="btn btn-active btn-accent"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                            <button className="btn btn-active btn-accent" onClick={handlePayment}>
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCardComponent;