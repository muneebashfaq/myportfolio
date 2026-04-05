'use client'
import './Footer.styles.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const socials = [
  { href: 'https://www.instagram.com/muhammad_muneeb01/', icon: <InstagramIcon />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: 'https://github.com/muneebashfaq', icon: <GitHubIcon />, label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UC1Cl2U0l8OWRvaJR4ZgQwfw', icon: <YouTubeIcon />, label: 'YouTube' },
]

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="container">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="footer-bracket">&lt;</span>
          <span className="footer-slash">/</span>
          <span className="footer-name">&nbsp;muneeb&nbsp;</span>
          <span className="footer-bracket">&gt;</span>
        </div>

        <div className="footer-copy">
          <span className="tok-comment">{'// '}</span>
          Copyright © {new Date().getFullYear()} Muhammad Muneeb. All rights reserved.
        </div>

        <div className="footer-socials">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="footer-social-link" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
