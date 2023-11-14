import mongoose from "mongoose";

export interface Category {
    _id?: mongoose.Types.ObjectId;
    name: string;
}

export interface Product {
    _id?: mongoose.Types.ObjectId;
    name: string;
    categoryId: mongoose.Types.ObjectId;
}

export interface ProductType {
    _id?: mongoose.Types.ObjectId;
    name: string;
    price: number;
    quantityAvailable: number;
    status: 'Available' | 'Out of Stock';
    productId: mongoose.Types.ObjectId;
}