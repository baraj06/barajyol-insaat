'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="full-page-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Bizimle <span className="gradient-text">İletişime Geçin</span></h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Projeleriniz, teklif talepleriniz ve iş ortaklığı için merkez ofisimizle veya şantiyelerimizle irtibata geçebilirsiniz.
                    </p>
                </div>

                <div className="grid-2 grid" style={{ gap: '4rem' }}>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="glass-card"
                        style={{ padding: '4rem', background: 'white' }}
                    >
                        <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem' }}>Mesaj Gönderin</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="grid-2 grid" style={{ gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Ad Soyad</label>
                                    <input type="text" placeholder="Adınız" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #eee', background: '#fcfcfc' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>E-Posta</label>
                                    <input type="email" placeholder="E-Posta Adresiniz" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #eee', background: '#fcfcfc' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Konu</label>
                                <input type="text" placeholder="Hangi proje hakkında?" style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #eee', background: '#fcfcfc' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Mesajınız</label>
                                <textarea placeholder="Detayları buraya yazınız..." rows={5} style={{ padding: '1rem', borderRadius: '0.5rem', border: '1px solid #eee', background: '#fcfcfc', resize: 'none' }}></textarea>
                            </div>
                            <button className="premium-button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.25rem' }}>
                                <Send size={20} /> Gönder
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                    >
                        <div className="glass-card" style={{ padding: '3rem', background: 'white' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Merkez Ofis</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(255,157,0,0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <MapPin size={24} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Adres</h4>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Barajyolu Caddesi Mühendisler Plaza Kat:12, Seyhan/Adana</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(255,157,0,0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Phone size={24} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Telefon</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>+90 (322) 123 45 67</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(255,157,0,0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Mail size={24} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>E-Posta</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>info@barajyolinsaat.com</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'rgba(255,157,0,0.1)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Clock size={24} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Çalışma Saatleri</h4>
                                        <p style={{ color: 'var(--text-muted)' }}>Pazartesi - Cumartesi: 09:00 - 18:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map Placeholder */}
                        <div className="glass-card" style={{ height: '300px', background: '#eee', borderRadius: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                                alt="Map Placeholder"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                            />
                            <div style={{ position: 'absolute', background: 'white', padding: '1rem 2rem', borderRadius: '2rem', fontWeight: 700, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                                Google Haritalar'da Gör
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
