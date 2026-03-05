import mongoose, { Schema, model, models } from 'mongoose';

export interface IProduct {
    _id?: string;
    id: string; // The original ID from products.ts
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
    icon?: string;
    isBestseller: boolean;
    isNewProduct: boolean; // Changed from isNew to avoid conflicting with mongoose internals
    category: string;
}

const ProductSchema = new Schema<IProduct>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: false },
    icon: { type: String, required: false },
    isBestseller: { type: Boolean, default: false },
    isNewProduct: { type: Boolean, default: false },
    category: { type: String, required: true }
}, {
    timestamps: true
});

const Product = models.Product || model<IProduct>('Product', ProductSchema);

export default Product;
