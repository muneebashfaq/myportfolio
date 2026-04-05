'use client'
import './About.styles.css'
import mypicture from '../../assets/MyPicture.jpeg'
import Aos from 'aos'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect } from 'react'

const About = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  return (
    <section className="about-section">
      <div className="container">
        <span className="section-tag">about me</span>
        <h2 className="section-title">Who Am <span>I?</span></h2>
        <div className="section-divider"></div>

        <div className="row align-items-center gy-5">
          {/* Image */}
          <div className="col-lg-5 text-center" data-aos="fade-right">
            <div className="about-img-wrapper">
              <img src={mypicture.src || mypicture} alt="Muhammad Muneeb" className="about-img" />
              <div className="about-img-ring"></div>
              <div className="about-img-badge">
                <span className="badge-num">4+</span>
                <span className="badge-txt">Years<br />Experience</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="about-card">
              <div className="about-card-header">
                <span className="about-card-title">
                  <span className="tok-kw">class</span>{' '}
                  <span className="tok-var">Developer</span>{' '}
                  <span className="tok-op">{'{'}</span>
                </span>
              </div>

              <div className="about-card-body">
                <h3 className="about-role">Full-Stack Web Developer</h3>
                <p className="about-bio">
                  I am a Full Stack Developer with 4+ years of experience in designing and developing scalable,
                  secure and high-performance web applications. I specialize in React.js, Next.js, TypeScript
                  &amp; Node.js with a strong focus on building clean architectures and efficient APIs.
                  I enjoy solving complex problems and delivering reliable, production-ready solutions.
                </p>

                <div className="about-info-grid">
                  <div className="info-item">
                    <GitHubIcon style={{ fontSize: 16, color: 'var(--text-muted)' }} />
                    <span className="info-label">GitHub</span>
                    <a href="https://github.com/muneebashfaq" target="_blank" rel="noreferrer" className="info-value">
                      muneebashfaq
                    </a>
                  </div>
                  <div className="info-item">
                    <LinkedInIcon style={{ fontSize: 16, color: 'var(--text-muted)' }} />
                    <span className="info-label">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/" target="_blank" rel="noreferrer" className="info-value">
                      Muhammad Muneeb
                    </a>
                  </div>
                  <div className="info-item">
                    <EmailIcon style={{ fontSize: 16, color: 'var(--text-muted)' }} />
                    <span className="info-label">Email</span>
                    <span className="info-value">mmuneeb840@gmail.com</span>
                  </div>
                  <div className="info-item">
                    <PhoneAndroidIcon style={{ fontSize: 16, color: 'var(--text-muted)' }} />
                    <span className="info-label">Phone</span>
                    <span className="info-value">+92324-8406920</span>
                  </div>
                  <div className="info-item info-item-full">
                    <HomeIcon style={{ fontSize: 16, color: 'var(--text-muted)' }} />
                    <span className="info-label">Location</span>
                    <span className="info-value">Lahore, Pakistan</span>
                  </div>
                </div>

                <a href="/Muhammad Muneeb.pdf" download="Muhammad Muneeb.pdf" className="btn-primary-custom" style={{ marginTop: 24 }}>
                  <DownloadOutlined /> Download Resume
                </a>
              </div>

              <div className="about-card-footer">
                <span className="tok-op">{'}'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
