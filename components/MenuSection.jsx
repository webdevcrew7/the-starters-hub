'use client';

import { useState } from 'react';
import { Leaf } from 'lucide-react';
import FilterBar from './ui/FilterBar';
import OverlayCard from './ui/OverlayCard';
import { MENU_ITEMS } from '@/data/menuItems';

export default function MenuSection() {
    const [filter, setFilter] = useState('all');
    const [vegOnly, setVegOnly] = useState(false);

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = filter === 'all' ? true : item.category === filter;
        const matchesVeg = vegOnly ? item.isVeg === true : true;
        return matchesCategory && matchesVeg;
    });

    return (
        <section id="menu" className="py-20 px-6 mobile-compact-section">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Our Menu</span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4 mt-2">Starters & More</h2>

                    <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base hidden md:block">
                        Desi spice meets Chinese fire — explore our full range of sizzling starters, crispy pakodas, and more.
                    </p>
                </div>

                <FilterBar activeFilter={filter} setFilter={setFilter} />

                {/* Veg-Only Toggle */}
                <div className="flex justify-center mt-3 mb-6">
                    <button
                        onClick={() => setVegOnly(v => !v)}
                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${vegOnly
                            ? 'bg-green-500/20 border-green-500/60 text-green-400 shadow-lg shadow-green-900/20'
                            : 'bg-white/5 border-white/10 text-gray-500 hover:border-green-500/40 hover:text-green-500'
                            }`}
                        aria-pressed={vegOnly}
                    >
                        <span className={`w-4 h-4 rounded-sm border-2 flex items-center justify-center flex-shrink-0 ${vegOnly ? 'bg-green-500 border-green-500' : 'border-gray-500'
                            }`}>
                            {vegOnly && <Leaf size={10} className="text-white" />}
                        </span>
                        Veg Only
                    </button>
                </div>

                {/* Overlay Card Grid */}
                <div className="mobile-grid-compact">
                    {filteredItems.map((item) => (
                        <OverlayCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
