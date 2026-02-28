'use client';

import { motion } from 'framer-motion';
import { Hammer, Clock, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6 text-white overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b8860b]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#b8860b]/5 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full text-center z-10"
            >
                <div className="mb-12 flex justify-center">
                    <motion.div
                        animate={{
                            rotate: [0, 10, 0, -10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-24 h-24 bg-[#b8860b]/20 rounded-2xl flex items-center justify-center border border-[#b8860b]/30"
                    >
                        <Hammer className="w-12 h-12 text-[#b8860b]" />
                    </motion.div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Şu An <span className="text-[#b8860b]">Bakımdayız</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-lg mx-auto">
                    Sizlere daha iyi bir deneyim sunabilmek için sitemizi güncelliyoruz.
                    Kısa bir süre sonra tekrar görüşmek üzere.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <Clock className="w-6 h-6 text-[#b8860b] mx-auto mb-3" />
                        <span className="block text-sm font-medium">Yakında</span>
                        <span className="text-xs text-gray-500">Geri Döneceğiz</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <Mail className="w-6 h-6 text-[#b8860b] mx-auto mb-3" />
                        <span className="block text-sm font-medium">E-Posta</span>
                        <span className="text-xs text-gray-500">info@barajyolinsaat.com</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <Phone className="w-6 h-6 text-[#b8860b] mx-auto mb-3" />
                        <span className="block text-sm font-medium">Telefon</span>
                        <span className="text-xs text-gray-500">0212 123 45 67</span>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        Anlayışınız için teşekkür ederiz.
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
