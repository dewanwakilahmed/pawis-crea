'use client';

import React, { FC, useState } from 'react';
import Link from 'next/link';

// CSS
import '@/styles/header.css';

// Icons
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

// Component
import CompanyLogo from '@/components/CompanyLogo';

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const [lang, setLang] = useState('English');

  const switchLang = () => setLang(lang === 'English' ? 'Español' : 'English');

  const navItems = [
    { en: 'Home', es: 'Inicio', href: '/' },
    { en: 'About', es: 'Sobre', href: '/about' },
    { en: 'Portfolio', es: 'Portafolio', href: '/portfolio' },
    { en: 'Services', es: 'Servicios', href: '/services' },
    { en: 'Contact', es: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="company-logo-container">
          <CompanyLogo />
        </div>

        <nav className="nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {lang === 'English' ? item.en : item.es}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-btns">
          <button onClick={switchLang} className="switch-lang-btn">
            {lang === 'English' ? 'English' : 'Español'}
          </button>
          <Link href="/booking" className="book-a-session-header-btn">
            {lang === 'English' ? 'Book a Session' : 'Reservar Sesión'}
          </Link>

          <button onClick={switchLang} className="switch-lang-mobile-btn">
            {lang === 'English' ? 'EN' : 'ES'}
          </button>
          {isMobileMenuOpen ? (
            <RiCloseFill
              className="mobile-nav-toggle-btn"
              onClick={toggleMobileMenu}
            />
          ) : (
            <RiMenu3Fill
              className="mobile-nav-toggle-btn"
              onClick={toggleMobileMenu}
            />
          )}
        </div>

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <hr className="mobile-nav-divider" />
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.href} onClick={toggleMobileMenu}>
                  <Link href={item.href} className="mobile-nav-link">
                    {lang === 'English' ? item.en : item.es}
                  </Link>
                </li>
              ))}
              <li onClick={toggleMobileMenu}>
                <Link
                  href="/booking"
                  className="book-a-session-header-mobile-nav-btn"
                >
                  {lang === 'English' ? 'Book a Session' : 'Reservar Sesión'}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
