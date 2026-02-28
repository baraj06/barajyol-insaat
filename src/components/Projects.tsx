'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Sarısu Barajı ve Sulaması",
        category: "Tamamlanan",
        desc: "50 metre gövde yüksekliği, 5000 hektar sulama alanı.",
        year: "2023"
    },
    {
        id: 2,
        title: "Yeşilvadi Dere Islahı",
        category: "Tamamlanan",
        desc: "12 km dere ıslahı ve taş tahkimat işleri.",
        year: "2022"
    },
    {
        id: 3,
        title: "Kuzey Boru Hattı Etabı",
        category: "Devam Eden",
        desc: "80 km çelik boru hattı ve pompa istasyonları.",
        year: "2024-2026"
    },
    {
        id: 4,
        title: "Merkez Göleti İnşaatı",
        category: "Devam Eden",
        desc: "Kil çekirdekli dolgu gölet ve sanat yapıları.",
        year: "2024-2025"
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('Tamamlanan');

    return (
        <section id="projeler" className="full-page-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sektörel <span className="gradient-text">Projelerimiz</span></h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                        {['Tamamlanan', 'Devam Eden'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '2rem',
                                    border: filter === cat ? 'none' : '1px solid var(--glass-border)',
                                    background: filter === cat ? 'var(--accent)' : 'transparent',
                                    color: filter === cat ? 'var(--primary)' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    transition: 'var(--transition)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid-2 grid">
                    <AnimatePresence mode="wait">
                        {projects.filter(p => p.category === filter).map((p) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="glass-card"
                                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3 style={{ fontSize: '1.25rem' }}>{p.title}</h3>
                                    {filter === 'Tamamlanan' ? <CheckCircle2 color="var(--accent)" size={24} /> : <Clock color="#3b82f6" size={24} />}
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{p.desc}</p>
                                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--accent)' }}>
                                    <span>{p.category}</span>
                                    <span>{p.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
