'use client'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Intro from './../Intro/Intro';
import About from '../About/About.component';
import Education from '../Education/Education.components';
import Skills from '../Skills/Skills.component';
import Projects from '../Projects/Projects.component';
import Blog from '../Blog/Blog.component';
import Contactus from '../Contactus/Contactus.component';
import Services from '../Services/Services.component';
import Footer from '../Footer/Footer.components';
import './Menu.css';

const navItems = [
  { label: 'Home',     href: '#Home',      index: '01' },
  { label: 'About',    href: '#About',     index: '02' },
  { label: 'Skills',   href: '#Skills',    index: '03' },
  { label: 'Projects', href: '#Projects',  index: '04' },
  { label: 'Services', href: '#Services',  index: '05' },
  { label: 'Contact',  href: '#Contact',   index: '06' },
];

export default function Menu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled]     = React.useState(false);
  const [showTop, setShowTop]       = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────── */}
      <nav
        className="nav-custom"
        style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none' }}
      >
        <div className="nav-toolbar">
          {/* Logo */}
          <a href="#Home" className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-slash">/</span>
            <span className="logo-name">&nbsp;Portfolio&nbsp;</span>
            <span className="logo-bracket">&gt;</span>
          </a>

          {/* Desktop links */}
          <div className="nav-links">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link-item"
                data-index={item.index}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ──────────────────────────── */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ className: 'mobile-drawer' }}
      >
        <div style={{ width: 260 }} role="presentation" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer-logo">
            <span>&lt;/&gt;</span> Portfolio
          </div>
          {navItems.map(item => (
            <a key={item.label} href={item.href} className="mobile-nav-link">
              <span style={{ color: 'var(--blue)', marginRight: 8, fontFamily: 'var(--font-mono)', fontSize: 12 }}>
                {item.index}.
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </Drawer>

      {/* ── SCROLL-TO-TOP ───────────────────────────── */}
      {showTop && (
        <a href="#Home" className="scroll-top-btn" aria-label="scroll to top">
          <KeyboardArrowUpIcon style={{ fontSize: 28, color: '#fff' }} />
        </a>
      )}

      {/* ── SECTIONS ───────────────────────────────── */}
      <div id="Home"     className="color_dark"><Intro /></div>
      <div id="About"    className="color_light"><About /></div>
      <div id="Education" className="color_dark"><Education /></div>
      <div id="Skills"   className="color_light"><Skills /></div>
      <div id="Blog"     className="color_dark"><Blog /></div>
      <div id="Projects" className="color_light"><Projects /></div>
      <div id="Services" className="color_dark"><Services /></div>
      <div id="Contact"  className="color_light"><Contactus /></div>
      <div               className="footer"><Footer /></div>
    </>
  );
}
