import Image from 'next/image';
import { Leaf, Flame, Plus } from 'lucide-react';

export default function OverlayCard({ item }) {
    const isVeg = item.isVeg;
    const badgeLabel = isVeg ? 'Veg' : 'Non-Veg';
    const whatsappUrl = `https://wa.me/918885067767?text=${encodeURIComponent(`Hi! I'd like to order: ${item.name}`)}`;

    return (
        <div className="overlay-card">
            <Image
                src={item.image}
                alt={item.name}
                fill
                className="card-image"
                sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="card-gradient"></div>

            {/* Category Badge */}
            <span className={`card-badge ${isVeg ? 'veg' : 'non-veg'}`}>
                {isVeg ? <Leaf size={10} className="inline mr-1" /> : <Flame size={10} className="inline mr-1" />}
                {badgeLabel}
            </span>

            {/* Content Overlay */}
            <div className="card-content">
                <h3 className="card-title line-clamp-2">{item.name}</h3>
            </div>

            {/* Add/Order Button → WhatsApp */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-add-btn"
                aria-label={`Order ${item.name}`}
            >
                <Plus size={16} />
            </a>
        </div>
    );
}
