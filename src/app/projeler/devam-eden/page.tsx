'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ongoingProjects = [
    {
        id: 1,
        title: "Mersin Toroslar Yüksekoluk Göleti İkmali",
        client: "DSİ 6. Bölge Müdürlüğü",
        location: "Mersin",
        startDate: "01.01.2025",
        progress: "15%",
        images: ["/yüksekoluk.png"],
        desc: "Mersin Toroslar bölgesinde sulama ve taşkın koruma amaçlı gölet ikmali yapım işi tüm hızıyla sürmektedir."
    },
    {
        id: 2,
        title: "Osmaniye Arıklıkaş Göleti Deprem Hasarı Rehabilitasyonu",
        client: "DSİ 6. Bölge Müdürlüğü",
        location: "Osmaniye",
        startDate: "01.04.2025",
        progress: "5%",
        images: ["/arikli.png", "/ariklikas.jpeg"],
        desc: "Deprem sonrası hasar gören Arıklıkaş Göleti'nin güvenli hale getirilmesi ve rehabilitasyon çalışmaları titizlikle yürütülmektedir."
    }
];

const ImageSlider = ({ images, title }: { images: string[], title: string }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* Dinamik Link: O anki görsel hangisiyse href ona bağlanır */}
            <a
                href={images[currentIndex]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    cursor: 'zoom-in',
                    zIndex: 25,
                    position: 'relative'
                }}
            >
                {images.map((img, idx) => (
                    <motion.img
                        key={idx}
                        src={img}
                        alt={`${title} - ${idx + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentIndex === idx ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1000';
                        }}
                    />
                ))}
            </a>

            {images.length > 1 && (
                <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '0.5rem',
                    zIndex: 30
                }}>
                    {images.map((_, idx) => (
                        <div key={idx} style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: currentIndex === idx ? 'white' : 'rgba(255,255,255,0.5)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease'
                        }}></div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function OngoingProjectsPage() {
    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '120px 0' }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--primary)' }}>
                        Devam Eden <span className="gradient-text">Projelerimiz</span>
                    </h1>
                    <div style={{ width: '80px', height: '4px', background: 'var(--accent)', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                <div className="grid-2 grid" style={{ gap: '3rem' }}>
                    {ongoingProjects.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card"
                            style={{
                                overflow: 'hidden',
                                background: 'white',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                            }}
                        >
                            {/* Proje Görsel Alanı (Slider) */}
                            <div style={{ width: '100%', height: '350px', background: '#e2e8f0', position: 'relative' }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: '#3b82f6',
                                    color: 'white',
                                    padding: '0.5rem 1.2rem',
                                    borderRadius: '100px',
                                    fontSize: '0.8rem',
                                    fontWeight: 800,
                                    zIndex: 26
                                }}>
                                    DEVAM EDİYOR
                                </div>
                                <ImageSlider images={p.images} title={p.title} />

                                {/* Progress Bar Over Image */}
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', width: '100%', background: 'rgba(0,0,0,0.2)', zIndex: 11, display: 'flex', alignItems: 'flex-end', pointerEvents: 'none' }}>
                                    <div style={{ height: '6px', width: p.progress, background: '#3b82f6', transition: 'width 1s ease-in-out' }}></div>
                                </div>
                            </div>

                            {/* Proje Bilgi Alanı */}
                            <div style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.6rem', lineHeight: 1.3, fontWeight: 800, color: 'var(--primary)', maxWidth: '80%' }}>
                                        {p.title}
                                    </h3>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#3b82f6' }}>{p.progress}</span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, minWidth: '140px', color: 'var(--text-muted)' }}>İşveren:</span>
                                        <span style={{ color: 'var(--primary)', fontWeight: 600 }}> {p.client}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, minWidth: '140px', color: 'var(--text-muted)' }}>İşin Yeri:</span>
                                        <span style={{ color: 'var(--text-main)' }}> {p.location}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, minWidth: '140px', color: 'var(--text-muted)' }}>Başlama Tarihi:</span>
                                        <span style={{ color: 'var(--text-main)' }}> {p.startDate}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <span style={{ fontWeight: 700, minWidth: '140px', color: 'var(--text-muted)' }}>Bitiş Tarihi:</span>
                                        <span style={{ color: '#3b82f6', fontWeight: 700 }}> DEVAM EDİYOR</span>
                                    </div>
                                    <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        {p.desc}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
