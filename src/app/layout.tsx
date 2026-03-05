import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrendHive',
  description: 'Your hive for modern essentials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans flex flex-col min-h-screen bg-gradient-to-br from-amber-50/80 via-[#fcfbfa] to-orange-50/60">
        {children}
      </body>
    </html>
  );
}
