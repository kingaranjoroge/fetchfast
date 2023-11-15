import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ProductType } from '@/common.types';

const productTypeSchema = new mongoose.Schema<ProductType>(
    {
      name: { 
            type: String, 
            required: true 
        },
      price: { 
            type: Number, 
            required: true 
        },
      description: {
          type: String,
          required: true
        },
      quantityAvailable: { 
            type: Number, 
            required: true 
        },
      status: { 
            type: String, 
            enum: ['Available', 'Out of Stock'], 
            default: 'Available' 
        },
      productId: { 
            type: Schema.Types.ObjectId, 
            ref: 'Product', 
            required: true 
        },
    },
    { 
        timestamps: true 
    }
  );

const ProductType = mongoose.models.ProductType || mongoose.model<ProductType>('ProductType', productTypeSchema);

export default ProductType;