import mongoose from 'mongoose';
const { Schema } = mongoose;
import { Category } from '@/common.types';

const categorySchema = new Schema<Category>(
    {
      name: {
        type: String,
        required: true
      } 
    },
    {
        timestamps: true
    } 
  );

const Category = mongoose.models.Category || mongoose.model<Category>('Category', categorySchema);

export default Category;