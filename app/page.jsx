'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Preloader from '@/components/Preloader';

const MenuSection = dynamic(() => import('@/components/MenuSection'));
const FeatureSection = dynamic(() => import('@/components/FeatureSection'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
    const [loading, setLoading] = useState(true);

    const handlePreloaderComplete = useCallback(() => {
        setLoading(false);
    }, []);

    return (
        <div className="min-h-screen font-sans text-gray-100 selection:bg-orange-500/30">
            {loading && <Preloader onComplete={handlePreloaderComplete} />}

            {/* Dark Background with Fiery Accents */}
            <div className="fixed inset-0 -z-10 bg-[#0d0705]">
                {/* Fire Orbs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/15 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-yellow-900/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <Navbar />
            <Hero />
            <MenuSection />
            <FeatureSection />
            <Footer />
        </div>
    );
}
