'use client';

import React from 'react';
import { ArrowRight, Landmark, ShieldCheck, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const imgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        // Eğer görsel zaten önbellekten yüklendiyse state'i hemen güncelle
        if (imgRef.current?.complete) {
            setIsLoaded(true);
        }
    }, []);

    return (
        <section className="full-page-section" style={{
            padding: 0,
            overflow: 'hidden',
            position: 'relative',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* Full Screen Background Image Layer */}
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0
            }}>
                <img
                    ref={imgRef}
                    src="/hero_main.png"
                    alt="Barajyol İnşaat Mühendislik Vizyonu"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 1.5s ease-in-out'
                    }}
                    onLoad={() => setIsLoaded(true)}
                />

                {/* Modern Gradient Overlay for Text Readability */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, transparent 100%)',
                    zIndex: 1
                }}></div>
            </div>

            <div className="container hero-content" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-text-wrapper"
                    style={{ maxWidth: '800px' }}
                >
                    <span className="hero-badge" style={{
                        color: 'var(--primary)',
                        fontWeight: 700,
                        display: 'block',
                        marginBottom: '1.5rem',
                        letterSpacing: '0.3rem',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem',
                        opacity: 0.8
                    }}>
                        Mühendislikte Çeyrek Asırlık Güven
                    </span>

                    <h1 className="hero-title" style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '2.5rem',
                        fontWeight: 900,
                        color: 'var(--text-main)'
                    }}>
                        Doğayı <br />
                        <span className="gradient-text">Mühendislik ve Tutkuyla</span> <br />
                        Şekillendiriyoruz
                    </h1>

                    <p className="hero-desc" style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-main)',
                        marginBottom: '3.5rem',
                        maxWidth: '650px',
                        lineHeight: 1.8,
                        fontWeight: 500
                    }}>
                        Barajyol İnşaat olarak genel olarak Devlet Su İşleri Genel Müdürlüğü altında barajlar, göletler, taşkın koruma ve çeşitli altyapı projelerini başarıyla tamamlamıştır. <br /><br />
                        10 yılı aşkın sürede edindiği teknik ve mühendislik bakış açısıyla projelerimize devam ediyoruz.
                    </p>

                    <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem', marginBottom: '3.5rem' }}>
                        <a href="/projeler/devam-eden" className="premium-button" style={{
                            padding: '1.4rem 3rem',
                            fontSize: '1.1rem',
                            borderRadius: '100px',
                            boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)',
                            justifyContent: 'center'
                        }}>
                            Projelerimiz <ArrowRight size={20} />
                        </a>
                        <a href="/iletisim" className="secondary-button" style={{
                            background: 'rgba(255,255,255,0.8)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            padding: '1.4rem 3rem',
                            borderRadius: '100px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            color: 'var(--primary)',
                            transition: 'all 0.3s ease',
                            textAlign: 'center'
                        }}
                        >
                            Bize Ulaşın
                        </a>
                    </div>

                    {/* Compact Feature Grid Integrated into Hero */}
                    <div className="hero-features grid" style={{ gap: '2rem', marginTop: '1rem' }}>
                        {[
                            { icon: <ShieldCheck size={32} />, title: 'Güven ve Kalite', desc: 'Uluslararası standartlarda mühendislik ve güvenlik sertifikaları.' },
                            { icon: <HardHat size={32} />, title: 'Ağır Altyapı Uzmanlığı', desc: 'Baraj ve tünel inşaatlarında devleşen tecrübe.' },
                            { icon: <Landmark size={32} />, title: 'Modern Yapılar', desc: 'Geleceğin şehirlerini sağlam temellerle kuruyoruz.' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.4)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem'
                                }}
                            >
                                <div style={{ color: 'var(--primary)' }}>{feature.icon}</div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>{feature.title}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', opacity: 0.8, lineHeight: 1.4 }}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .hero-content {
                            padding-top: 140px !important;
                            padding-bottom: 60px !important;
                        }
                        .hero-title {
                            font-size: 2.8rem !important;
                            line-height: 1.2 !important;
                            margin-bottom: 1.5rem !important;
                        }
                        .hero-desc {
                            font-size: 1rem !important;
                            line-height: 1.6 !important;
                            margin-bottom: 2rem !important;
                        }
                        .hero-btns {
                            flex-direction: column !important;
                            gap: 1rem !important;
                        }
                        .hero-features {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Hero;
