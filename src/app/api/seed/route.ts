import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import { products } from '@/data/products';

export async function GET() {
    try {
        await connectToDatabase();

        await Product.deleteMany({}); // Clear existing products

        // Map existing products to match our new schema 
        const productsToInsert = products.map(p => ({
            id: p.id,
            name: p.name,
            description: p.description,
            price: p.price,
            imageUrl: p.imageUrl,
            icon: p.icon,
            isBestseller: p.isBestseller,
            isNewProduct: p.isNew, // Mongoose reserves 'isNew' internally
            category: p.category
        }));

        await Product.insertMany(productsToInsert);

        return NextResponse.json({
            success: true,
            message: 'Database seeded successfully',
            count: productsToInsert.length
        });
    } catch (error) {
        console.error("Seeding Error:", error);
        return NextResponse.json({ error: 'Failed to seed database', details: String(error) }, { status: 500 });
    }
}
