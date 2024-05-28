import mongoose from 'mongoose';
const { Schema } = mongoose;
import type { Order } from '@/common.types';

const orderSchema = new Schema<Order>(
    {
        customerName: {
            type: String,
            required: true
        },
        customerPhone: {
            type: Number,
            required: true
        },
        customerEmail: {
            type: String,
            required: true
        },
        productName: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected'],
            default: 'Pending'
        }
    },
    {
        timestamps: true
    }
);

const Order = mongoose.models.Order || mongoose.model<Order>('Order', orderSchema);

export default Order;