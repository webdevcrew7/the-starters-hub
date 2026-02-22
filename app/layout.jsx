import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Indo-Chinese Specials | Veg & Non-Veg Starters ',
    description: 'Taste that sparks your cravings with sizzle, spice & satisfaction. Order crispy chicken 65, manchurian, pakodas, prawns & more — delivered hot to your door.',
    keywords: ['Indian Food', 'Starters', 'Chicken 65', 'Manchurian', 'Pakodas', 'Prawns', 'Indo-Chinese', 'Takeaway', 'Delivery'],
    metadataBase: new URL('https://thestartershub.in'),
    openGraph: {
        title: 'Indo-Chinese Specials | Veg & Non-Veg Starters ',
        description: 'Taste that sparks your cravings with sizzle, spice & satisfaction. Order hot to your door.',
        url: '/',
        siteName: 'The Starters Hub',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Indo-Chinese Specials | Veg & Non-Veg Starters ',
        description: 'Taste that sparks your cravings with sizzle, spice & satisfaction. Order hot to your door.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    themeColor: '#0d0705',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>{children}</body>
        </html>
    );
}