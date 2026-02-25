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
                        <div className="w-full max-w-[460px] md:w-[360px] h-[180px] rounded-xl overflow-hidden border border-white/10 relative group bg-gray-900 isolate">
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
                            <span className="text-gray-500 text-xs font-semibold mr-2 block">Order Now</span>
                            <a href="https://www.swiggy.com/city/hyderabad/the-starter-hub-nizampet-and-pragathi-nagar-rest1336057" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 h-[36px] bg-white rounded-lg hover:bg-gray-100 hover:scale-105 transition-all flex items-center gap-1.5 shadow-md shadow-[#FC8019]/20">
                                <div className="w-[20px] h-[20px] rounded-md bg-[#FC8019] flex items-center justify-center shrink-0">
                                    <svg role="img" viewBox="0 0 24 24" fill="white" className="w-[12px] h-[12px]" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.034 24c-.376-.411-2.075-2.584-3.95-5.513-.547-.916-.901-1.63-.833-1.814.178-.48 3.355-.743 4.333-.308.298.132.29.307.29.409 0 .44-.022 1.619-.022 1.619a.441.441 0 1 0 .883-.002l-.005-2.939c0-.255-.278-.319-.331-.329-.511-.002-1.548-.006-2.661-.006-2.457 0-3.006.101-3.423-.172-.904-.591-2.383-4.577-2.417-6.819C3.849 4.964 5.723 2.225 8.362.868A8.13 8.13 0 0 1 12.026 0c4.177 0 7.617 3.153 8.075 7.209l.001.011c.084.981-5.321 1.189-6.39.904-.164-.044-.206-.212-.206-.284L13.5 4.996a.442.442 0 0 0-.884.002l.009 3.866a.33.33 0 0 0 .268.32l3.354-.001c1.79 0 2.542.207 3.042.588.333.254.461.739.349 1.37C18.633 16.755 12.273 23.71 12.034 24z" />
                                    </svg>
                                </div>
                                <span className="text-[#FC8019] text-[14px] font-extrabold tracking-tight leading-none">Swiggy</span>
                            </a>
                            <a href="" target="_blank" rel="noopener noreferrer" className="h-[36px] w-[90px] bg-[#E23744] hover:bg-[#c12a36] rounded-lg hover:scale-105 transition-all flex items-center justify-center shadow-md shadow-red-500/20 relative overflow-hidden">
                                <svg role="img" viewBox="0 0 24 24" fill="white" className="absolute w-[65px] h-[65px]" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.615 9.45l-1.258.473-.167.71-.446.021-.115.978h.408l-.211 1.51c-.131.939.036 1.381.865 1.381.488 0 .91-.175 1.135-.297l.145-.9c-.167.083-.436.19-.618.19-.247 0-.276-.13-.225-.488l.189-1.396h.843c.03-.206.131-.877.16-1h-.865zm-3.779 1.002c-.115.002-.236.01-.361.026a3.592 3.592 0 0 0-1.347.432l.26.789c.269-.15.615-.28.978-.326.538-.066.757.1.79.375.014.109.004.199-.005.289l-.014.056a3.46 3.46 0 0 0-1.097-.036c-.518.063-.943.273-1.204.6a1.324 1.324 0 0 0-.225 1.034c.127.583.553.84 1.199.76.45-.055.812-.27 1.076-.63a2.665 2.665 0 0 1-.03.304 1.74 1.74 0 0 1-.072.29l1.244.001a3.657 3.657 0 0 1-.001-.365c.036-.459.118-1.143.247-2.051a2.397 2.397 0 0 0-.002-.59c-.08-.644-.628-.969-1.436-.958zm6.536.063c-1.194 0-2.107 1.067-2.107 2.342 0 .959.552 1.693 1.628 1.693 1.2 0 2.107-1.067 2.107-2.35 0-.95-.538-1.685-1.628-1.685zm-11.777.041c-.538 0-1.12.465-1.52 1.236.102-.504.08-1.076.051-1.198a8.964 8.964 0 0 1-1.287.122 6.9 6.9 0 0 1-.073 1.243l-.167 1.145c-.066.45-.138.969-.211 1.297h1.353c.007-.199.058-.511.094-.786l.116-.786c.095-.511.502-1.114.815-1.114.182 0 .175.176.124.504l-.131.885c-.066.45-.138.969-.211 1.297h1.367c.008-.199.051-.512.088-.786l.116-.786c.094-.512.502-1.114.814-1.114.182 0 .175.168.146.396l-.327 2.29H13l.438-2.609c.095-.649.044-1.236-.676-1.236-.523 0-1.09.443-1.49 1.182.087-.61.036-1.182-.677-1.182zm-4.88.008c-1.177 0-2.08 1.053-2.08 2.312 0 .946.546 1.67 1.608 1.67 1.185 0 2.08-1.052 2.08-2.319 0-.938-.531-1.663-1.607-1.663zm-5.126.091c-.05.39-.102.778-.175 1.13.328-.008.619-.016 1.411-.016l-1.81 1.96-.015.703c.444-.03.997-.039 1.63-.039.566 0 1.134.008 1.497.039.065-.458.13-.763.21-1.137-.275.015-.755.023-1.512.023l1.81-1.969.023-.694c-.437.023-.83.03-1.52.03-.749 0-.975-.007-1.549-.03zm4.988.927c.255 0 .408.228.408.701 0 .687-.276 1.251-.626 1.251-.261 0-.414-.236-.414-.702 0-.694.283-1.25.632-1.25zm16.629 0c.254 0 .407.228.407.701 0 .687-.276 1.251-.625 1.251-.262 0-.415-.236-.415-.702 0-.694.284-1.25.633-1.25zM15.51 12.64c.206-.003.403.024.55.058l-.013.118c-.075.44-.39.881-.848.938-.31.037-.578-.148-.608-.39a.538.538 0 0 1 .114-.41c.117-.159.336-.268.599-.3.069-.009.138-.013.206-.014Z" />
                                </svg>
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
