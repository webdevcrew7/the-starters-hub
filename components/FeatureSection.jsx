import Image from 'next/image';
import { Flame } from 'lucide-react';

export default function FeatureSection() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden">
                    {/* Background fire glows */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="order-2 md:order-1">
                            <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-black/50 rotate-3 hover:rotate-0 transition-transform duration-700 relative border-2 border-orange-500/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1527477396000-e27163b868f2?auto=format&fit=crop&w=800&q=80"
                                    alt="Signature Chicken Wings"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <span className="text-orange-400 font-bold tracking-widest text-sm uppercase">House Special</span>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="text-white">Sizzling </span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">Chicken 65</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our signature Chicken 65 — deep-fried to a golden crisp, tossed in fiery red chilli glaze with curry leaves and garlic. Bold, crunchy, and irresistibly spicy.
                            </p>
                            <ul className="space-y-3">
                                {['Farm-fresh Chicken', 'Secret Spice Blend', 'Crispy Golden Finish'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                                        <div className="p-1.5 bg-orange-500/15 rounded-full text-orange-400 border border-orange-500/20">
                                            <Flame size={14} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-2 flex items-center gap-4">
                                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">₹240</span>
                                <a
                                    href="https://wa.me/918885067767?text=Hi!%20I'd%20like%20to%20order%20Chicken%2065%20(₹240)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-full font-bold text-sm shadow-lg shadow-orange-600/30 hover:scale-105 transition-all"
                                >
                                    Order Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
