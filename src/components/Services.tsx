'use client';

import React from 'react';
import { Droplets, Waves, Mountain, Shovel, HardHat, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Droplets size={32} />,
        title: "Sulama & Baraj",
        desc: "RCC ve kaya dolgu baraj gövdeleri, enerji tünelleri ve kapalı sistem tarımsal sulama şebekeleri."
    },
    {
        icon: <Waves size={32} />,
        title: "Karayolu & Altyapı",
        desc: "Otoyol, tünel, köprülü kavşak ve devlet yolları inşaatında yüksek mühendislik standartları."
    },
    {
        icon: <Mountain size={32} />,
        title: "Taşkın Koruma",
        desc: "Dere ıslah çalışmaları, taş tahkimat ve hidrolik yapılarla yerleşim alanlarını güvenceye alıyoruz."
    },
    {
        icon: <Shovel size={32} />,
        title: "Ağır Altyapı & Kazı",
        desc: "Büyük hacimli toprak işleri, stabilize yollar, tünel portalları ve madencilik odaklı dekapaj faaliyetleri."
    },
    {
        icon: <HardHat size={32} />,
        title: "Sanat Yapıları",
        desc: "Köprüler, menfezler, istinat duvarları ve özel betonarme mühendislik yapıları kurulumu."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Proje Yönetimi",
        desc: "Hidrolik yapılar üzerine teknik danışmanlık, fizibilite çalışmaları ve kapsamlı şantiye yönetimi."
    }
];

const Services = () => {
    return (
        <section id="hizmetler" className="full-page-section" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Uzmanlık <span className="gradient-text">Alanlarımız</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Barajyol İnşaat olarak, sektördeki geniş tecrübemizle her türlü yapı ihtiyacınıza modern ve kalıcı çözümler sunuyoruz.
                    </p>
                </div>

                <div className="grid-3 grid">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{ padding: '2.5rem', transition: 'var(--transition)' }}
                        >
                            <div style={{
                                color: 'var(--accent)',
                                marginBottom: '1.5rem',
                                padding: '1rem',
                                background: 'rgba(255,157,0,0.1)',
                                width: 'fit-content',
                                borderRadius: '0.75rem'
                            }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
