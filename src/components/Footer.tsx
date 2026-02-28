'use client';

import React from 'react';
import { Landmark, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
    <footer id="iletisim" style={{ padding: '80px 0 40px 0', borderTop: '1px solid var(--glass-border)', background: 'white' }}>
        <div className="container">
            <div className="grid-3 grid" style={{ marginBottom: '4rem' }}>
                <div>
                    <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{
                            fontSize: '2.2rem',
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            color: 'var(--primary)',
                            lineHeight: 1
                        }}>
                            BARAJYOL <span style={{ color: 'var(--accent)' }}>İNŞAAT</span>
                        </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        Geleceğin şehirlerini bugünün teknolojisiyle inşa ediyoruz. Güvenilir, sağlam ve estetik yapılar için yanınızdayız.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Instagram size={20} className="social-icon" />
                        <Facebook size={20} className="social-icon" />
                        <Linkedin size={20} className="social-icon" />
                    </div>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Hızlı Bağlantılar</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
                        <li><a href="/" style={{ transition: 'var(--transition)' }}>Ana Sayfa</a></li>
                        <li><a href="/projeler/devam-eden" style={{ transition: 'var(--transition)' }}>Devam Eden Projeler</a></li>
                        <li><a href="/projeler/tamamlanan" style={{ transition: 'var(--transition)' }}>Tamamlanan Projeler</a></li>
                        <li><a href="/sertifikalar" style={{ transition: 'var(--transition)' }}>Sertifikalarımız</a></li>
                        <li><a href="/iletisim" style={{ transition: 'var(--transition)' }}>İletişim</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>İletişim Bilgileri</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                        <li style={{ display: 'flex', gap: '0.75rem' }}><MapPin size={20} color="var(--accent)" /> Barajyolu Caddesi No:45, Seyhan/Adana</li>
                        <li style={{ display: 'flex', gap: '0.75rem' }}><Phone size={20} color="var(--accent)" /> +90 (322) 123 45 67</li>
                        <li style={{ display: 'flex', gap: '0.75rem' }}><Mail size={20} color="var(--accent)" /> info@barajyolinsaat.com</li>
                    </ul>
                </div>
            </div>

            <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                © 2026 Barajyol İnşaat. Tüm Hakları Saklıdır.
            </div>
        </div>
        <style jsx>{`
            .social-icon { cursor: pointer; transition: var(--transition); color: var(--text-muted); }
            .social-icon:hover { color: var(--accent); transform: translateY(-3px); }
            ul a:hover { color: var(--text-main); padding-left: 5px; }
        `}</style>
    </footer>
);

export default Footer;
