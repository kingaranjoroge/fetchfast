import mongoose from "mongoose";

export interface User {
    _id?: mongoose.Types.ObjectId;
    name: string;
    email: string;
    phone: number;
    password: number;
    role?: 'Admin' | 'Employee' | 'Customer';   
}

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
    description: string,
    quantityAvailable: number;
    status: 'Available' | 'Out of Stock';
    productId: mongoose.Types.ObjectId;
}

export interface Order {
    _id?: mongoose.Types.ObjectId;
    customerName: string;
    customerPhone: number;
    customerEmail: string;
    productName: string;    
    quantity: number;
    price: number;
    status: 'Pending' | 'Approved' | 'Rejected';
}