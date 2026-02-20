'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Home', href: '#' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

const WHATSAPP_URL = 'https://wa.me/918885067767';
const PHONE = '8885067767';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 px-4 py-3">
            <div
                className={`relative max-w-6xl mx-auto flex items-center justify-between rounded-full px-3 pr-4 transition-all duration-300 ${scrolled
                    ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-black/40 border border-orange-900/20'
                    : 'bg-black/50 backdrop-blur-md border border-white/5'
                    }`}
                style={{ height: '68px' }}
            >
                {/* Logo — no text, logo already has brand name */}
                {/* Desktop: normal left-aligned logo */}
                <a href="#" className="hidden md:block flex-shrink-0 relative w-20 h-20 drop-shadow-[0_0_10px_rgba(249,115,22,0.25)]">
                    <Image
                        src="/assets/logos/s-hub.png"
                        alt="The Starters Hub"
                        fill
                        className="object-contain"
                        priority
                    />
                </a>
                {/* Mobile: absolutely centered logo */}
                <a href="#" className="md:hidden absolute left-1/2 -translate-x-1/2 relative w-[72px] h-[72px] drop-shadow-[0_0_10px_rgba(249,115,22,0.25)]">
                    <Image
                        src="/assets/logos/s-hub.png"
                        alt="The Starters Hub"
                        fill
                        className="object-contain"
                        priority
                    />
                </a>

                {/* Center Nav Links (Desktop) */}
                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeLink === link.href
                                ? 'text-orange-400 font-bold'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right Icons (Desktop) */}
                <div className="hidden md:flex items-center gap-2">
                    <a
                        href={`tel:+91${PHONE}`}
                        className="p-2.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-orange-400 transition-all"
                        aria-label="Call us"
                    >
                        <Phone size={18} />
                    </a>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-green-400 transition-all"
                        aria-label="WhatsApp"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.816-6.347-2.183l-.443-.353-3.06 1.025 1.025-3.06-.353-.443A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                        </svg>
                    </a>
                </div>

                {/* Mobile: Hamburger */}
                <div className="flex md:hidden items-center gap-2">
                    <a
                        href={`tel:+91${PHONE}`}
                        className="p-2 text-orange-400"
                        aria-label="Call us"
                    >
                        <Phone size={18} />
                    </a>
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 text-gray-300 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 mt-2 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="max-w-6xl mx-auto bg-black/90 backdrop-blur-xl border border-orange-900/20 rounded-2xl px-6 py-4 space-y-1">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => { setMobileOpen(false); setActiveLink(link.href); }}
                            className="block py-3 text-gray-300 hover:text-orange-400 font-medium border-b border-white/5 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-3 text-center px-5 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full text-sm font-bold"
                    >
                        Order on WhatsApp
                    </a>
                </div>
            </div>
        </nav>
    );
}
