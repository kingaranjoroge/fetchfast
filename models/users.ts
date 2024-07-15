import mongoose from 'mongoose';
const { Schema } = mongoose;
import type { User } from '@/common.types';

const userSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true
        },
        phone: {
            type: Number,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['Admin', 'Employee', 'Customer'],
            default: 'Customer'
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model<User>('User', userSchema);

export default User;