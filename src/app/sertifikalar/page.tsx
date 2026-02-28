'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, FileText, CheckCircle } from 'lucide-react';

const certificates = [
    { id: 1, title: "ISO 9001:2015", subtitle: "Kalite Yönetim Sistemi", year: "2024" },
    { id: 2, title: "ISO 14001:2015", subtitle: "Çevre Yönetim Sistemi", year: "2024" },
    { id: 3, title: "ISO 45001:2018", subtitle: "İş Sağlığı ve Güvenliği", year: "2024" },
    { id: 4, title: "TSE Hizmet Yeterlilik", subtitle: "Altyapı ve Karayolu İşleri", year: "2023" },
    { id: 5, title: "Sınıf A Müteahhitlik Belgesi", subtitle: "Bakanlık Onaylı", year: "2023" },
    { id: 6, title: "Kalite Ödülü 2022", subtitle: "Sektörel Mükemmellik", year: "2022" }
];

export default function CertificatesPage() {
    return (
        <div className="full-page-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <ShieldCheck size={64} color="var(--accent)" style={{ marginBottom: '2rem' }} />
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Kalite ve <span className="gradient-text">Sertifikalarımız</span></h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
                        Uluslararası standartlarda mühendislik ve yönetim disiplinine sahibiz. Taahhütlerimizi en yüksek kalite ve güvenlik belgeleriyle taçlandırıyoruz.
                    </p>
                </div>

                <div className="grid-3 grid">
                    {certificates.map((c, i) => (
                        <motion.div
                            key={c.id}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card"
                            style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white' }}
                        >
                            <div style={{ width: '80px', height: '80px', background: 'rgba(255,157,0,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <FileText size={40} color="var(--accent)" />
                            </div>
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{c.title}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{c.subtitle}</p>
                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontWeight: 700, fontSize: '0.8rem' }}>
                                <CheckCircle size={16} /> GEÇERLİ: {c.year}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div style={{ marginTop: '6rem', padding: '4rem', background: 'var(--primary)', color: 'white', borderRadius: '2rem', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Yüksek Mühendislik Standartları</h3>
                    <p style={{ opacity: 0.8, maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
                        Tüm projelerimizde sıfır iş kazası hedefi ve çevre dostu yaklaşımımızla, geleceğe sürdürülebilir bir miras bırakıyoruz. Kalite standartlarımız bağımsız denetleme kuruluşları tarafından her yıl onaylanmaktadır.
                    </p>
                </div>
            </div>
        </div>
    );
}
