'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Star, ChevronRight } from 'lucide-react';
import { MENU_ITEMS } from '@/data/menuItems';

// Curated bestseller slides for the hero
const HERO_SLIDES = [
    MENU_ITEMS.find(i => i.name === "Garlic Chicken Fry"),
    MENU_ITEMS.find(i => i.name === "French Fries"),
    MENU_ITEMS.find(i => i.name === "Chicken Lollipop (4 pcs)"),
    MENU_ITEMS.find(i => i.name === "Chicken Manchurian"),
    MENU_ITEMS.find(i => i.name === "Egg Manchurian"),
    MENU_ITEMS.find(i => i.name === "Chef Special"),
].filter(Boolean);

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setActiveIndex(prev => (prev + 1) % HERO_SLIDES.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const current = HERO_SLIDES[activeIndex];

    return (
        <section className="pt-28 pb-16 px-6 relative overflow-hidden mobile-compact-hero">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 relative z-10">
                    <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-400 rounded-full text-sm font-bold backdrop-blur-sm border border-orange-500/20">
                        🔥 Fire-Grilled Flavors, Delivered Fast
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
                        <span className="text-white">Indo-Chinese </span><br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">
                            Starter Specials
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-md leading-relaxed hidden md:block">
                        Sizzling chicken 65, crispy pakodas, fiery manchurian & more — bold Indo-Chinese flavors crafted fresh and delivered hot to your door.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#menu" className="px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-full font-bold shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center gap-2">
                            View Menu <ChevronRight size={18} />
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-orange-400 font-bold text-xl">⭐ 4.9</span>
                            <span className="text-gray-500 text-sm">Rating</span>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-xl">2.5k+</span>
                            <span className="text-gray-500 text-sm">Happy Customers</span>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <a href="tel:+918885067767" className="text-orange-400 font-bold text-sm hover:underline">
                            📞 8885067767
                        </a>
                    </div>
                </div>

                {/* Right Image - Rotating Slideshow */}
                <div className="relative z-10 flex justify-center lg:justify-end">
                    <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
                        {/* Glowing background circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-orange-500/20 to-yellow-500/10 rounded-full blur-3xl transform scale-110 animate-pulse"></div>

                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/20 shadow-2xl shadow-orange-900/30">
                            {/* All slides stacked, blur dissolve transition */}
                            {HERO_SLIDES.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className="absolute inset-0 transition-all duration-1000 ease-in-out"
                                    style={{
                                        opacity: index === activeIndex ? 1 : 0,
                                        filter: index === activeIndex ? 'blur(0px)' : 'blur(18px)',
                                        transform: index === activeIndex ? 'scale(1)' : 'scale(1.08)',
                                    }}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.name}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 350px, 500px"
                                    />
                                </div>
                            ))}
                            {/* Fire overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
                        </div>

                        {/* Floating Bestseller Badge — shows current item name */}
                        <div className="absolute bottom-10 -left-4 md:left-0 p-4 flex items-center gap-3 animate-bounce z-20 bg-black/70 backdrop-blur-xl border border-orange-500/20 rounded-2xl shadow-lg shadow-black/40">
                            <div className="bg-orange-500/20 p-2 rounded-full text-orange-400">
                                <Star fill="currentColor" size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-white text-sm">Bestseller</p>
                                <p
                                    className="text-xs text-gray-500 transition-opacity duration-500"
                                    key={current.id}
                                >
                                    {current.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
