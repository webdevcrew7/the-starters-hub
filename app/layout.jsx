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
        images: [
            {
                url: '/assets/logos/s-hub.png',
                width: 800,
                height: 800,
                alt: 'The Starters Hub Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Indo-Chinese Specials | Veg & Non-Veg Starters ',
        description: 'Taste that sparks your cravings with sizzle, spice & satisfaction. Order hot to your door.',
        images: ['/assets/logos/s-hub.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    // Favicons for various platforms; put actual files into /public
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
        other: [
            { rel: 'icon', url: '/favicon.png', type: 'image/png' },
            { rel: 'icon', url: '/assets/logos/s-hub.png', type: 'image/png' },
        ],
    },
};

export const viewport = {
    themeColor: '#0d0705',
};

// NOTE: a proper favicon.ico should be generated from your PNG and placed in /public.
// you can use `magick convert public/favicon.png public/favicon.ico` or a web tool.

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* explicit fallback link, metadata.icons also generates tags */}
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={inter.className} suppressHydrationWarning>{children}</body>
        </html>
    );
}