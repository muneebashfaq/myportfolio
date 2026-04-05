'use client'
import './Footer.styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const socials = [
  { href: 'https://www.instagram.com/muhammad_muneeb01/',          icon: <InstagramIcon />, label: 'Instagram', color: '#e1306c' },
  { href: 'https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/', icon: <LinkedInIcon />, label: 'LinkedIn',  color: '#0a66c2' },
  { href: 'https://github.com/muneebashfaq',                        icon: <GitHubIcon />,   label: 'GitHub',    color: '#f1f5f9' },
  { href: 'https://www.youtube.com/channel/UC1Cl2U0l8OWRvaJR4ZgQwfw', icon: <YouTubeIcon />, label: 'YouTube', color: '#ff0000' },
]

const freelance = [
  {
    href:  'https://www.fiverr.com/users/muneebmughal840/manage_gigs',
    label: 'Fiverr',
    color: '#1dbf73',
    logo: (
      /* Fiverr "f" wordmark */
      <svg viewBox="0 0 42 44" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.0625 0H4.9375C2.2095 0 0 2.2095 0 4.9375V39.0625C0 41.7905 2.2095 44 4.9375 44H37.0625C39.7905 44 42 41.7905 42 39.0625V4.9375C42 2.2095 39.7905 0 37.0625 0Z"/>
        <path d="M26.6 13.8H20.2V11.6C20.2 10.7 20.9 10 21.8 10H24.4V5H21.8C18.1 5 15.2 7.9 15.2 11.6V13.8H12V18.8H15.2V34H20.2V18.8H24.8L26.6 13.8Z" fill="white"/>
        <circle cx="29" cy="8" r="2.5" fill="white"/>
      </svg>
    ),
  },
  {
    href:  'https://www.upwork.com/freelancers/~0167cdbb866059d3be',
    label: 'Upwork',
    color: '#14a800',
    logo: (
      /* Upwork "U" circle mark */
      <svg viewBox="0 0 40 40" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20"/>
        <path d="M28.5 14.5C26.1 14.5 24.2 16 23.3 18.2C22.5 16.3 21.8 14.8 21.8 11.5H18.5C18.5 15.4 19.6 17.9 20.8 20.2L18.3 27H21.7L23.3 22.5C24.3 24.5 26.2 25.8 28.5 25.8C31.5 25.8 34 23.4 34 20.1C34 16.9 31.5 14.5 28.5 14.5ZM28.5 23C26.8 23 25.5 21.7 25.5 20.1C25.5 18.5 26.8 17.2 28.5 17.2C30.2 17.2 31.5 18.5 31.5 20.1C31.5 21.7 30.2 23 28.5 23ZM11.5 14.7V20.6C11.5 22.2 12.6 23.3 14.1 23.3C15.6 23.3 16.7 22.2 16.7 20.6V14.7H19.9V20.6C19.9 24.1 17.4 26.5 14.1 26.5C10.8 26.5 8.3 24.1 8.3 20.6V14.7H11.5Z" fill="white"/>
      </svg>
    ),
  },
]

const navLinks = [
  { label: 'Home',     href: '#Home' },
  { label: 'About',    href: '#About' },
  { label: 'Skills',   href: '#Skills' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Services', href: '#Services' },
  { label: 'Contact',  href: '#Contact' },
]

const Footer = () => (
  <footer className="footer-wrapper">
    {/* Top glow line */}
    <div className="footer-glow-line" />

    <div className="container">
      {/* Main grid */}
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="fl-bracket">&lt;</span>
            <span className="fl-slash">/</span>
            <span className="fl-name">&nbsp;muneeb&nbsp;</span>
            <span className="fl-bracket">&gt;</span>
          </div>
          <p className="footer-tagline">
            Building <span>beautiful</span> & <span>performant</span> web apps — one commit at a time.
          </p>
          {/* Social icons */}
          <div className="footer-socials">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label={s.label}
                style={{ '--hover-color': s.color }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links">
            {navLinks.map((l, i) => (
              <li key={i}>
                <a href={l.href} className="footer-link">
                  <span className="footer-link-arrow">›</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hire me */}
        <div className="footer-col">
          <h4 className="footer-col-title">Hire Me On</h4>
          <div className="freelance-cards">
            {freelance.map((f, i) => (
              <a
                key={i}
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="freelance-card"
                style={{ '--accent': f.color }}
              >
                <span className="freelance-icon" style={{ color: f.color }}>{f.logo}</span>
                <div>
                  <span className="freelance-label">{f.label}</span>
                  <span className="freelance-sub">Available for work</span>
                </div>
                <span className="freelance-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} <strong>Muhammad Muneeb</strong>. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
