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
                        Hungry? Get your favorite starters delivered hot.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        {/* <a href="#menu" className="px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-full font-bold shadow-lg shadow-orange-600/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center gap-2">
                            View Menu <ChevronRight size={18} />
                        </a> */}
                        {/* Swiggy Button */}
                        <a href="https://www.swiggy.com/city/hyderabad/the-starter-hub-nizampet-and-pragathi-nagar-rest1336057" target="_blank" rel="noopener noreferrer" className="px-5 py-3 h-[52px] bg-white rounded-[14px] hover:bg-gray-100 hover:scale-105 transition-all flex items-center gap-2.5 shadow-lg shadow-[#FC8019]/20">
                            <div className="w-[28px] h-[28px] rounded-[8px] bg-[#FC8019] flex items-center justify-center shrink-0">
                                <svg role="img" viewBox="0 0 24 24" fill="white" className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z" />
                                </svg>
                            </div>
                            <span className="text-[#FC8019] text-[22px] font-extrabold tracking-tight leading-none mb-1">Swiggy</span>
                        </a>

                        {/* Zomato Button */}
                        <a href="http://zoma.to/r/22559719" target="_blank" rel="noopener noreferrer" className="h-[52px] w-[138px] bg-[#E23744] hover:bg-[#c12a36] rounded-[14px] hover:scale-105 transition-all flex items-center justify-center shadow-lg shadow-red-500/20 relative overflow-hidden">
                            <svg role="img" viewBox="0 0 24 24" fill="white" className="absolute w-[95px] h-[95px]" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.615 9.45l-1.258.473-.167.71-.446.021-.115.978h.408l-.211 1.51c-.131.939.036 1.381.865 1.381.488 0 .91-.175 1.135-.297l.145-.9c-.167.083-.436.19-.618.19-.247 0-.276-.13-.225-.488l.189-1.396h.843c.03-.206.131-.877.16-1h-.865zm-3.779 1.002c-.115.002-.236.01-.361.026a3.592 3.592 0 0 0-1.347.432l.26.789c.269-.15.615-.28.978-.326.538-.066.757.1.79.375.014.109.004.199-.005.289l-.014.056a3.46 3.46 0 0 0-1.097-.036c-.518.063-.943.273-1.204.6a1.324 1.324 0 0 0-.225 1.034c.127.583.553.84 1.199.76.45-.055.812-.27 1.076-.63a2.665 2.665 0 0 1-.03.304 1.74 1.74 0 0 1-.072.29l1.244.001a3.657 3.657 0 0 1-.001-.365c.036-.459.118-1.143.247-2.051a2.397 2.397 0 0 0-.002-.59c-.08-.644-.628-.969-1.436-.958zm6.536.063c-1.194 0-2.107 1.067-2.107 2.342 0 .959.552 1.693 1.628 1.693 1.2 0 2.107-1.067 2.107-2.35 0-.95-.538-1.685-1.628-1.685zm-11.777.041c-.538 0-1.12.465-1.52 1.236.102-.504.08-1.076.051-1.198a8.964 8.964 0 0 1-1.287.122 6.9 6.9 0 0 1-.073 1.243l-.167 1.145c-.066.45-.138.969-.211 1.297h1.353c.007-.199.058-.511.094-.786l.116-.786c.095-.511.502-1.114.815-1.114.182 0 .175.176.124.504l-.131.885c-.066.45-.138.969-.211 1.297h1.367c.008-.199.051-.512.088-.786l.116-.786c.094-.512.502-1.114.814-1.114.182 0 .175.168.146.396l-.327 2.29H13l.438-2.609c.095-.649.044-1.236-.676-1.236-.523 0-1.09.443-1.49 1.182.087-.61.036-1.182-.677-1.182zm-4.88.008c-1.177 0-2.08 1.053-2.08 2.312 0 .946.546 1.67 1.608 1.67 1.185 0 2.08-1.052 2.08-2.319 0-.938-.531-1.663-1.607-1.663zm-5.126.091c-.05.39-.102.778-.175 1.13.328-.008.619-.016 1.411-.016l-1.81 1.96-.015.703c.444-.03.997-.039 1.63-.039.566 0 1.134.008 1.497.039.065-.458.13-.763.21-1.137-.275.015-.755.023-1.512.023l1.81-1.969.023-.694c-.437.023-.83.03-1.52.03-.749 0-.975-.007-1.549-.03zm4.988.927c.255 0 .408.228.408.701 0 .687-.276 1.251-.626 1.251-.261 0-.414-.236-.414-.702 0-.694.283-1.25.632-1.25zm16.629 0c.254 0 .407.228.407.701 0 .687-.276 1.251-.625 1.251-.262 0-.415-.236-.415-.702 0-.694.284-1.25.633-1.25zM15.51 12.64c.206-.003.403.024.55.058l-.013.118c-.075.44-.39.881-.848.938-.31.037-.578-.148-.608-.39a.538.538 0 0 1 .114-.41c.117-.159.336-.268.599-.3.069-.009.138-.013.206-.014Z" />
                            </svg>
                        </a>
                    </div>

                    <div className="flex items-center gap-6 pt-4 flex-wrap">
                        <a href="https://share.google/5bFJJFoA3CacncIbK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group hover:bg-white/5 p-2 -ml-2 rounded-xl transition-all">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-400 font-bold text-xl group-hover:scale-110 transition-transform">⭐ 4.9</span>
                                <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">Rating</span>
                            </div>
                        </a>
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
