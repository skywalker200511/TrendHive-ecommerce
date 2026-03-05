import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // In a real application, you would:
        // 1. Validate the body (e.g., using Zod)
        // 2. Save it to a database (e.g., Prisma + PostgreSQL)
        // 3. Send an email notification (e.g., using Resend)

        console.log('Received new contact submission:', body);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Message received successfully. We will be in touch!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to process your request.' },
            { status: 500 }
        );
    }
}
