import { Leaf, Flame } from 'lucide-react';

export default function Badge({ type }) {
    const isVeg = type === 'veg';
    return (
        <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${isVeg
                ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                : 'bg-red-500/15 text-red-400 border border-red-500/20'
            }`}>
            {isVeg ? <Leaf size={10} /> : <Flame size={10} />}
            {type}
        </span>
    );
}
