import { CATEGORIES } from '@/data/menuItems';

export default function FilterBar({ activeFilter, setFilter }) {
    return (
        <div className="flex justify-center gap-3 mb-10 flex-wrap mobile-compact-filters">
            {CATEGORIES.map(({ id, label }) => {
                const isActive = activeFilter === id;

                return (
                    <button
                        key={id}
                        onClick={() => setFilter(id)}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 border text-sm ${isActive
                                ? 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/30 border-transparent transform scale-105'
                                : 'bg-white/5 hover:bg-white/10 text-gray-400 border-white/10'
                            }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
}
