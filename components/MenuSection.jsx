'use client';

import { useState } from 'react';
import { Leaf, Plus } from 'lucide-react';
import FilterBar from './ui/FilterBar';
import OverlayCard from './ui/OverlayCard';
import { MENU_ITEMS, CATEGORIES } from '@/data/menuItems';

const WHATSAPP_BASE = 'https://wa.me/918885067767?text=';

// Group items by category for desktop table view
function groupByCategory(items) {
    const groups = {};
    CATEGORIES.filter(c => c.id !== 'all').forEach(cat => {
        const catItems = items.filter(item => item.category === cat.id);
        if (catItems.length > 0) {
            groups[cat.id] = { label: cat.label, items: catItems };
        }
    });
    return groups;
}

export default function MenuSection() {
    const [filter, setFilter] = useState('all');
    const [vegOnly, setVegOnly] = useState(false);

    const filteredItems = MENU_ITEMS.filter(item => {
        const matchesCategory = filter === 'all' ? true : item.category === filter;
        const matchesVeg = vegOnly ? item.isVeg === true : true;
        return matchesCategory && matchesVeg;
    });

    const grouped = groupByCategory(filteredItems);
    const groupEntries = Object.entries(grouped);

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

                {/* Mobile: Compact Overlay Grid */}
                <div className="mobile-grid-compact md:hidden">
                    {filteredItems.map((item) => (
                        <OverlayCard key={item.id} item={item} />
                    ))}
                </div>

                {/* Desktop: Categorized Table Layout */}
                <div className="hidden md:block">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {groupEntries.map(([catId, group]) => (
                            <div key={catId} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                                {/* Category Header */}
                                <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 px-6 py-3">
                                    <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                                        {group.label}
                                    </h3>
                                </div>

                                {/* Item List */}
                                <div className="divide-y divide-white/5">
                                    {group.items.map((item) => {
                                        const waUrl = `${WHATSAPP_BASE}${encodeURIComponent(`Hi! I'd like to order: ${item.name}`)}`;
                                        return (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between px-6 py-3 hover:bg-white/5 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    <span className="text-gray-200 font-medium text-sm truncate">
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 flex-shrink-0">
                                                    <a
                                                        href={waUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-7 h-7 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
                                                        aria-label={`Order ${item.name} `}
                                                    >
                                                        <Plus size={14} />
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
