import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema(
    {
        name: String, 
        email: String,
        phone: Number,
        password: String,
        pendingOrders: Number,
        ordersCompleted: Number
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model('User', usersSchema);

export default User;