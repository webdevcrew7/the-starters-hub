import { Phone, Instagram } from 'lucide-react';

const PHONE = '8885067767';
const WHATSAPP_URL = 'https://wa.me/918885067767';
const WEBSITE = 'www.thestartershub.in';

export default function Footer() {
    return (
        <footer id="contact" className="py-6 px-4 mt-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                    {/* Left: Contact Details */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                        <a href={`tel:+91${PHONE}`} className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                            <Phone size={15} className="text-orange-400" />
                            {PHONE}
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.816-6.347-2.183l-.443-.353-3.06 1.025 1.025-3.06-.353-.443A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                            WhatsApp
                        </a>
                        <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors">
                            <Instagram size={15} className="text-pink-400" />
                            @thestartershub
                        </a>
                        <a href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors hidden sm:block">
                            {WEBSITE}
                        </a>
                    </div>

                    {/* Right: Order Platforms */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-gray-600 text-xs uppercase tracking-wider hidden sm:block">Order on</span>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-semibold text-orange-400 hover:bg-orange-500/20 transition-colors">
                            <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold">S</div>
                            Swiggy
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-sm font-semibold text-red-400 hover:bg-red-600/20 transition-colors">
                            <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white text-[10px] font-bold">Z</div>
                            Zomato
                        </a>
                    </div>
                </div>

                <p className="text-center mt-4 text-gray-700 text-xs">
                    © 2026 <span className="text-orange-400">The Starters Hub</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
