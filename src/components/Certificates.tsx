'use client';

import React from 'react';
import { Award, ShieldCheck, FileCheck, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const certificates = [
    { icon: <ShieldCheck size={40} />, title: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
    { icon: <Award size={40} />, title: "ISO 14001:2015", desc: "Çevre Yönetim Sistemi" },
    { icon: <FileCheck size={40} />, title: "OHSAS 18001", desc: "İş Sağlığı ve Güvenliği" },
    { icon: <BadgeCheck size={40} />, title: "TSE Hizmet Yeterlilik", desc: "Teknik Standartlara Uygunluk" }
];

const Certificates = () => {
    return (
        <section className="full-page-section" style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2rem' }}>Kalite ve <span className="gradient-text">Yeterlilik</span></h2>
                </div>
                <div className="grid-4 grid">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card"
                            style={{ padding: '2rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)' }}
                        >
                            <div style={{ color: 'var(--accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {cert.icon}
                            </div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{cert.title}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
