'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, Clock, Truck, Award, Users, Plus, Leaf, Flame, ChevronRight, Utensils } from 'lucide-react';

// --- Mock Data ---
const MENU_ITEMS = [
    {
        id: 1,
        name: "Truffle Mushroom Burger",
        description: "Brioche bun, wild mushrooms, swiss cheese, truffle mayo.",
        price: 18,
        rating: 4.8,
        type: "veg",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Spicy Sriracha Salmon",
        description: "Pan-seared salmon fillet, sriracha glaze, quinoa bowl.",
        price: 24,
        rating: 4.9,
        type: "non-veg",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Garden Pesto Pasta",
        description: "Fresh basil pesto, cherry tomatoes, pine nuts, parmesan.",
        price: 16,
        rating: 4.7,
        type: "veg",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Smoked BBQ Ribs",
        description: "Slow-cooked pork ribs, house BBQ sauce, coleslaw.",
        price: 28,
        rating: 4.9,
        type: "non-veg",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Mediterranean Salad",
        description: "Feta, olives, cucumber, lemon vinaigrette dressing.",
        price: 14,
        rating: 4.6,
        type: "veg",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Crispy Chicken Tacos",
        description: "Soft shells, crispy chicken, pico de gallo, avocado lime.",
        price: 15,
        rating: 4.8,
        type: "non-veg",
        image: "https://images.unsplash.com/photo-1565299585323-38d68c8e848d?auto=format&fit=crop&w=600&q=80"
    }
];

// --- Components ---

const GlassCard = ({ children, className = "" }) => (
    <div className={`backdrop-blur-xl bg-white/40 border border-white/60 shadow-xl rounded-3xl ${className}`}>
        {children}
    </div>
);

const Badge = ({ type }) => {
    const isVeg = type === 'veg';
    return (
        <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${isVeg ? 'bg-green-100/80 text-green-700 border border-green-200' : 'bg-red-100/80 text-red-700 border border-red-200'
            }`}>
            {isVeg ? <Leaf size={10} /> : <Flame size={10} />}
            {type}
        </span>
    );
};

const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
            <GlassCard className="flex items-center justify-between px-6 py-3 !rounded-full">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        K
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-800">Kitchen<span className="text-orange-500">Cloud</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
                    <a href="#" className="text-orange-500 font-bold">Home</a>
                    <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
                    <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
                    <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-white/50 rounded-full transition-colors relative">
                        <ShoppingBag size={20} className="text-gray-700" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm relative">
                        <Image
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </GlassCard>
        </div>
    </nav>
);

const Hero = () => (
    <section className="pt-32 pb-16 px-6 relative overflow-hidden mobile-compact-hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8 relative z-10">
                <div className="inline-block px-4 py-2 bg-orange-100/80 text-orange-600 rounded-full text-sm font-bold backdrop-blur-sm border border-orange-200">
                    🚀 Fastest Delivery in Town
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-[1.1]">
                    Delicious Food Is <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                        Waiting For You
                    </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md leading-relaxed hidden md:block">
                    Enjoy gourmet meals delivered fresh to your doorstep. Fresh ingredients, master chefs, and flavors that tell a story.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all flex items-center gap-2">
                        View Menu <ChevronRight size={18} />
                    </button>
                    <button className="px-8 py-4 bg-white/40 backdrop-blur-md text-gray-800 border border-white/60 rounded-full font-bold hover:bg-white/60 transition-all">
                        Track Order
                    </button>
                </div>

                <div className="flex items-center gap-6 pt-4">
                    <div className="flex -space-x-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                                <Image
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="User"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-xs font-bold relative z-10">
                            +2k
                        </div>
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                        <span className="text-orange-500 font-bold">4.9</span> (2.5k Reviews)
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative z-10 flex justify-center lg:justify-end">
                <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
                    {/* Glowing background circle */}
                    <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-3xl transform scale-110 animate-pulse"></div>

                    <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white/30 shadow-2xl backdrop-blur-sm">
                        <Image
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
                            alt="Delicious Dish"
                            fill
                            className="object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                            priority // Important for LCP (Largest Contentful Paint)
                        />
                    </div>

                    {/* Floating Badge */}
                    <GlassCard className="absolute bottom-10 -left-4 md:left-0 p-4 flex items-center gap-3 animate-bounce hover:pause z-20">
                        <div className="bg-orange-100 p-2 rounded-full text-orange-500">
                            <Star fill="currentColor" size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-gray-800 text-sm">Top Rated</p>
                            <p className="text-xs text-gray-500">Gourmet Steak</p>
                        </div>
                    </GlassCard>
                </div>
            </div>

        </div>
    </section>
);

const FilterBar = ({ activeFilter, setFilter }) => (
    <div className="flex justify-center gap-4 mb-10 flex-wrap mobile-compact-filters">
        {['all', 'veg', 'non-veg'].map((filter) => {
            const isActive = activeFilter === filter;
            let activeClass = "bg-white text-gray-800 shadow-md";
            if (isActive && filter === 'veg') activeClass = "bg-green-500 text-white shadow-green-500/30";
            if (isActive && filter === 'non-veg') activeClass = "bg-red-500 text-white shadow-red-500/30";
            if (isActive && filter === 'all') activeClass = "bg-gray-800 text-white shadow-gray-800/30";

            return (
                <button
                    key={filter}
                    onClick={() => setFilter(filter)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${isActive
                        ? `${activeClass} shadow-lg transform scale-105`
                        : 'bg-white/30 hover:bg-white/50 text-gray-600 border border-white/40'
                        }`}
                >
                    {filter}
                </button>
            );
        })}
    </div>
);

// Compact Overlay Card for Mobile
const OverlayCard = ({ item }) => (
    <div className="overlay-card">
        <Image
            src={item.image}
            alt={item.name}
            fill
            className="card-image"
            sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="card-gradient"></div>

        {/* Veg/Non-veg Badge */}
        <span className={`card-badge ${item.type}`}>
            {item.type === 'veg' ? <Leaf size={10} className="inline mr-1" /> : <Flame size={10} className="inline mr-1" />}
            {item.type}
        </span>

        {/* Rating */}
        <div className="card-rating">
            <Star size={10} fill="currentColor" />
            {item.rating}
        </div>

        {/* Content Overlay */}
        <div className="card-content">
            <h3 className="card-title line-clamp-2">{item.name}</h3>
            <p className="card-price">${item.price}</p>
        </div>

        {/* Add Button */}
        <button className="card-add-btn">
            <Plus size={16} />
        </button>
    </div>
);

const MenuSection = () => {
    const [filter, setFilter] = useState('all');

    const filteredItems = MENU_ITEMS.filter(item =>
        filter === 'all' ? true : item.type === filter
    );

    return (
        <section id="menu" className="py-20 px-6 mobile-compact-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">Top List</h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base hidden md:block">Our mainstay menu items that our customers keep coming back for. Taste the difference.</p>
                </div>

                <FilterBar activeFilter={filter} setFilter={setFilter} />

                {/* Mobile: Compact Overlay Grid */}
                <div className="mobile-grid-compact md:hidden">
                    {filteredItems.map((item) => (
                        <OverlayCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Desktop: Original Glass Card Design */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <GlassCard key={item.id} className="p-4 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="relative mb-6 flex justify-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute top-0 right-0 z-20">
                                    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm text-yellow-500 flex flex-col items-center justify-center font-bold text-xs">
                                        <Star size={14} fill="currentColor" />
                                        {item.rating}
                                    </div>
                                </div>
                            </div>

                            <div className="text-center space-y-3 px-2">
                                <div className="flex justify-center">
                                    <Badge type={item.type} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2 min-h-[40px]">{item.description}</p>

                                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200/50">
                                    <span className="text-2xl font-bold text-gray-800">${item.price}</span>
                                    <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-orange-500 hover:scale-110 transition-all duration-300">
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeatureSection = () => (
    <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
            <GlassCard className="p-8 md:p-16 relative overflow-hidden">
                {/* Background blobs for feature section */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="order-2 md:order-1">
                        <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=800&q=80"
                                alt="Featured Fries"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Chef's Special</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Crispy Golden <br />
                            <span className="text-orange-600">Perfect Fries</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our signature potatoes are hand-picked, twice-fried to perfection for that distinctive crunch outside and fluffy cloud-like texture inside. Served with our secret house truffle sauce.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Utensils size={14} /></div>
                                Organic Potatoes
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Utensils size={14} /></div>
                                Gluten Free Oil
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <div className="p-1 bg-green-100 rounded-full text-green-600"><Utensils size={14} /></div>
                                House-made Sauces
                            </li>
                        </ul>
                    </div>
                </div>
            </GlassCard>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 px-6 mt-10">
        <div className="max-w-7xl mx-auto">
            <GlassCard className="py-8 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { icon: Clock, label: "Fast Delivery", desc: "Within 30 mins" },
                        { icon: Award, label: "Best Quality", desc: "5-star Ratings" },
                        { icon: Users, label: "Membership", desc: "Get Discounts" },
                        { icon: Truck, label: "Free Shipping", desc: "Orders over $50" },
                    ].map((service, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-3 group cursor-default">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-orange-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                <service.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800">{service.label}</h4>
                                <p className="text-xs text-gray-500">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>

            <div className="text-center mt-12 text-gray-500 text-sm">
                <p>© 2024 KitchenCloud. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <div className="min-h-screen font-sans text-gray-800 selection:bg-orange-200">
            {/* Background Gradients */}
            <div className="fixed inset-0 -z-10 bg-[#FDFBF7]">
                {/* Warm Orbs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <Navbar />
            <Hero />
            <MenuSection />
            <FeatureSection />
            <Footer />
        </div>
    );
}
