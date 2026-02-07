"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation'

interface Props {
    imageLink: string | any,
    name: string,
    price: number,
    description: string,
}

const ProductCardComponent = ({ imageLink, name, price, description }: Props) => {
    const router = useRouter();

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

            router.push('/categories');
        } catch (error) {
            console.error('Error initiating STK push:', error);

            // Close modal
            toggleModal();
        }
    };

    return (
        <div className="flex flex-col w-64 md:w-72 xl:w-64 bg-backgroundlight dark:bg-backgroundgray rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-md transition-shadow duration-200 border border-black/5 dark:border-white/10">
            <div className="relative aspect-square overflow-hidden bg-backgroundgray">
                <Image
                    src={imageLink}
                    alt={name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col p-4 gap-3">
                <div className="flex flex-row justify-between items-start gap-2">
                    <h2 className="font-display font-bold text-textdark text-base leading-tight capitalize">{name}</h2>
                    <span className="shrink-0 text-brand font-semibold text-sm">kes. {price}</span>
                </div>
                <p className="text-sm text-textdark/80 line-clamp-2" title={description}>{description}</p>
                <div className="pt-1">
                    <button
                        className="w-full py-2.5 rounded-xl bg-brand hover:bg-brandhover text-white font-semibold text-sm transition-colors duration-200"
                        onClick={toggleModal}
                    >
                        Order
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-[100] p-4" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleModal} aria-hidden />
                    <div className="relative flex flex-col bg-backgroundlight dark:bg-backgroundgray p-6 sm:p-8 rounded-2xl shadow-soft-lg w-full max-w-md border border-black/5 dark:border-white/10 max-h-[90vh] overflow-y-auto">
                        <h3 id="order-modal-title" className="text-lg font-display font-bold text-textdark mb-4">Order details</h3>
                        <label className="block text-sm font-medium text-textdark mb-1">Quantity</label>
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={handleQuantityChange}
                            className="w-full border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 mb-4 bg-backgroundgray/50 text-textdark focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                        <p className="text-textdark font-semibold mb-4">Total: kes. {calculateTotalPrice()}</p>
                        <label className="block text-sm font-medium text-textdark mb-1">Phone number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="e.g. 254712345678"
                            className="w-full border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 mb-6 bg-backgroundgray/50 text-textdark placeholder:text-textdark/50 focus:outline-none focus:ring-2 focus:ring-brand"
                        />
                        <div className="flex gap-3 justify-center flex-shrink-0 mt-auto pt-2">
                            <button
                                type="button"
                                className="px-4 py-2.5 rounded-xl font-medium text-textdark bg-black/10 dark:bg-white/10 hover:opacity-90 transition-opacity"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="px-5 py-2.5 rounded-xl font-semibold bg-brand text-white hover:bg-brandhover transition-colors"
                                onClick={handlePayment}
                            >
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCardComponent;