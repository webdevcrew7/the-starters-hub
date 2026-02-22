import { Phone, Instagram, MapPin } from 'lucide-react';

const PHONE = '8885067767';
const WHATSAPP_URL = 'https://wa.me/918885067767';
const WEBSITE = 'www.thestartershub.in';

export default function Footer() {
    return (
        <footer id="contact" className="py-6 px-4 mt-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

                    {/* Left: Logo */}
                    <div className="flex justify-center md:justify-center flex-1 shrink-0">
                        <img src="/assets/logos/s-hub.png" alt="The Starters Hub" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                        <div className="flex items-left gap-4 text-sm">
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
                        </div>
                    </div>
                    {/* Contacts */}


                    {/* Middle: Location block */}
                    <div className="flex justify-center border-y border-white/10 md:border-y-0 md:border-x py-4 my-2 md:py-0 md:my-0 md:px-6 w-full md:w-auto shrink-0 md:flex-none">
                        <div className="w-full max-w-[320px] md:w-[260px] h-[90px] rounded-xl overflow-hidden border border-white/10 relative group bg-gray-900 isolate">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7609.602059717897!2d78.3846348370164!3d17.517009006205427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f003e314325%3A0x7ec01f7a5f2a6f3a!2sThe%20Starters%20Hub!5e1!3m2!1sen!2sin!4v1771743171190!5m2!1sen!2sin"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="The Starters Hub Location"
                            ></iframe>
                            {/* Clickable Overlay to Get Directions */}
                            <a href="https://maps.app.goo.gl/3HDCmP7yTvpNTRxp6?g_st=aw" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/20 flex flex-col items-center justify-center transition-all">
                                <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <MapPin size={12} />
                                    Get Directions
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Connect & Order */}
                    <div className="flex flex-col items-center md:items-end flex-1 shrink-0 gap-3">

                        {/* Order Apps */}
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600 text-[10px] uppercase tracking-wider block mb-1">Coming soon on</span>
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs font-semibold text-orange-400 hover:bg-orange-500/20 transition-colors">
                                <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-white text-[9px] font-bold">S</div>
                                Swiggy
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600/10 border border-red-500/20 rounded-full text-xs font-semibold text-red-400 hover:bg-red-600/20 transition-colors">
                                <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-white text-[9px] font-bold">Z</div>
                                Zomato
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-4 text-gray-700 text-xs">
                    © 2026 <span className="text-orange-400">The Starters Hub</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
