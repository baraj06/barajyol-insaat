'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      top: '1.5rem',
      left: '0',
      right: '0',
      zIndex: 1000,
      padding: '0 1.5rem'
    }}>
      <nav className="glass-card container" style={{
        height: '80px',
        padding: '0 4rem',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)',
        maxWidth: '98%',
        width: '98%',
        position: 'relative',
        background: '#ffffff', // Pure white to match logo background exactly
        border: '1px solid #eee',
        borderRadius: '100px',
      }}>
        {/* Devasa Logo Container */}
        <div className="logo-container" style={{
          flex: '1',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginLeft: '-1rem'
        }}>
          <img
            src="/logo_final.png"
            alt="Barajyol İnşaat"
            className="navbar-logo"
            style={{
              height: '300px',
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'contain',
              position: 'absolute',
              top: '50%',
              left: '-20px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              pointerEvents: 'none',
              transition: 'all 0.3s ease'
            }}
          />
        </div>

        {/* Desktop Menu - Starting from center towards right */}
        <div className="hidden-mobile" style={{
          display: 'flex',
          flex: 2,
          justifyContent: 'center',
          gap: '4rem',
          fontWeight: 800,
          fontSize: '1rem'
        }}>
          <a href="/" className="nav-link">Ana Sayfa</a>

          {/* Projects Dropdown */}
          <div className="nav-dropdown-parent" style={{ position: 'relative' }}>
            <span className="nav-link" style={{ cursor: 'pointer' }}>Projeler</span>
            <div className="nav-dropdown">
              <a href="/projeler/dev-eden">Devam Eden</a>
              <a href="/projeler/tamamlanan">Tamamlanan</a>
            </div>
          </div>

          <a href="/sertifikalar" className="nav-link">Sertifikalar</a>
          <a href="/iletisim" className="nav-link">İletişim</a>
        </div>

        <div style={{ flex: '1' }}></div>

        {/* Mobile Toggle */}
        <button className="mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', padding: '0.5rem', zIndex: 1100 }}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Content */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0, display: 'flex' } : { opacity: 0, y: -20, display: 'none' }}
        className="glass-card mobile-menu"
        style={{
          marginTop: '0.5rem',
          padding: '2rem',
          flexDirection: 'column',
          gap: '1.5rem',
          textAlign: 'center',
          fontWeight: 700,
          fontSize: '1.1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
      >
        <a href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--primary)' }}>Ana Sayfa</a>
        <a href="/projeler/devam-eden" onClick={() => setMobileMenuOpen(false)}>Devam Eden Projeler</a>
        <a href="/projeler/tamamlanan" onClick={() => setMobileMenuOpen(false)}>Tamamlanan Projeler</a>
        <a href="/sertifikalar" onClick={() => setMobileMenuOpen(false)}>Sertifikalar</a>
        <a href="/iletisim" onClick={() => setMobileMenuOpen(false)}>İletişim</a>
      </motion.div>

      <style jsx>{`
                .nav-link {
                    position: relative;
                    color: var(--text-muted);
                    transition: var(--transition);
                    font-size: 0.95rem;
                }
                .nav-link:hover {
                    color: var(--text-main);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--accent);
                    transition: var(--transition);
                }
                .nav-link:hover::after {
                    width: 100%;
                }

                /* Dropdown Styles */
                .nav-dropdown-parent:hover .nav-dropdown {
                  opacity: 1;
                  visibility: visible;
                  transform: translateY(0);
                }
                .nav-dropdown {
                  position: absolute;
                  top: 100%;
                  left: 50%;
                  transform: translateX(-50%) translateY(10px);
                  background: white;
                  min-width: 200px;
                  border-radius: 1rem;
                  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                  padding: 1rem;
                  display: flex;
                  flex-direction: column;
                  gap: 0.5rem;
                  opacity: 0;
                  visibility: hidden;
                  transition: all 0.3s ease;
                  margin-top: 1rem;
                  border: 1px solid #eee;
                }
                .nav-dropdown a {
                  color: var(--text-muted);
                  padding: 0.75rem 1rem;
                  border-radius: 0.5rem;
                  transition: all 0.2s ease;
                  font-size: 0.9rem;
                }
                .nav-dropdown a:hover {
                  background: rgba(255,157,0,0.05);
                  color: var(--accent);
                  padding-left: 1.25rem;
                }

                @media (max-width: 768px) {
                    .hidden-mobile { display: none !important; }
                    .navbar-logo {
                        height: 90px !important;
                        width: auto !important;
                        position: static !important;
                        transform: none !important;
                        margin-left: 0 !important;
                        filter: drop-shadow(0 4px 6px rgba(0,0,0,0.05));
                    }
                    .logo-container {
                        overflow: visible !important;
                        margin-left: 0 !important;
                        flex: 1 !important;
                        background: transparent !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: flex-start !important;
                        height: auto !important;
                    }
                    nav {
                        padding: 0 1rem !important;
                        height: 75px !important;
                        background: rgba(255,255,255,0.98) !important;
                        backdrop-filter: blur(10px) !important;
                        border-radius: 50px !important;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.08) !important;
                        border: 1px solid rgba(0,0,0,0.05) !important;
                    }
                }
                @media (min-width: 769px) {
                    .mobile-only { display: none !important; }
                }
            `}</style>
    </div>
  );
};

export default Navbar;
