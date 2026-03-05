"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            topic: formData.get('topic'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Failed to submit');

            setStatus('success');
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <>
            <Header />

            <main className="flex-grow max-w-[800px] w-full mx-auto px-4 md:px-10 py-12 md:py-20 flex flex-col relative z-10">

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900  font-display mb-4">Let's chat.</h1>
                    <p className="text-slate-500 text-lg max-w-lg mx-auto">Have a question about our products, sustainability practices, or your recent order? We'd love to hear from you.</p>
                </div>

                <div className="bg-white  backdrop-blur-sm rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-100 ">

                    {status === 'success' && (
                        <div className="mb-6 p-4 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl flex items-center gap-3">
                            <span className="material-symbols-outlined">check_circle</span>
                            <p className="font-medium text-sm">Thanks for reaching out! We've received your message and will reply shortly.</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 text-red-800 border border-red-200 rounded-xl flex items-center gap-3">
                            <span className="material-symbols-outlined">error</span>
                            <p className="font-medium text-sm">Something went wrong submitting your message. Please try again.</p>
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2 group">
                                <label className="block text-sm font-semibold text-slate-900  px-1">First Name</label>
                                <input type="text" name="firstName" className="w-full bg-slate-50  border border-slate-200  rounded-2xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Jane" required disabled={status === 'loading'} />
                            </div>
                            <div className="space-y-2 group">
                                <label className="block text-sm font-semibold text-slate-900  px-1">Last Name</label>
                                <input type="text" name="lastName" className="w-full bg-slate-50  border border-slate-200  rounded-2xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Doe" required disabled={status === 'loading'} />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="block text-sm font-semibold text-slate-900  px-1">Email Address</label>
                            <input type="email" name="email" className="w-full bg-slate-50  border border-slate-200  rounded-2xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="jane@example.com" required disabled={status === 'loading'} />
                        </div>

                        <div className="space-y-2 group">
                            <label className="block text-sm font-semibold text-slate-900  px-1">Topic</label>
                            <div className="relative">
                                <select name="topic" className="w-full appearance-none bg-slate-50  border border-slate-200  rounded-2xl py-3.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-700 " disabled={status === 'loading'}>
                                    <option>Question about an order</option>
                                    <option>Product availability</option>
                                    <option>Wholesale inquiry</option>
                                    <option>Just saying hello</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                    <span className="material-symbols-outlined">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="block text-sm font-semibold text-slate-900  px-1">Message</label>
                            <textarea name="message" rows={5} className="w-full bg-slate-50  border border-slate-200  rounded-2xl py-4 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 resize-none" placeholder="How can we help you today?" required disabled={status === 'loading'}></textarea>
                        </div>

                        <button type="submit" disabled={status === 'loading'} className="w-full bg-primary hover:bg-[#de5121] disabled:bg-primary/50 text-white font-bold rounded-2xl py-4 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4 flex items-center justify-center gap-2">
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                            {status !== 'loading' && <span className="material-symbols-outlined text-[18px]">send</span>}
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </>
    );
}
