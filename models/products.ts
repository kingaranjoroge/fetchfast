import mongoose from 'mongoose';
const { Schema } = mongoose;
import type { Product } from '@/common.types';

const productSchema = new Schema<Product>(
    {
      name: { 
            type: String, 
            required: true 
        },
      categoryId: { 
            type: Schema.Types.ObjectId, 
            ref: 'Category', 
            required: true 
        },
    },
    { 
        timestamps: true 
    }
  );

const Product = mongoose.models.Product || mongoose.model<Product>('Product', productSchema);

export default Product;