import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'The Starters Hub — Veg & Non-Veg Starters | Indo-Chinese Specials',
    description: 'Taste that sparks your cravings with sizzle, spice & satisfaction. Order crispy chicken 65, manchurian, pakodas, prawns & more — delivered hot to your door.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>{children}</body>
        </html>
    );
}