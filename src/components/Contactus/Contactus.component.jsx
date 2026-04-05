'use client'
import './Contactus.styles.css'
import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import SendIcon from '@mui/icons-material/Send'
import Aos from 'aos'

const socialLinks = [
  { href: 'https://www.instagram.com/muhammad_muneeb01/', icon: <InstagramIcon />, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/muhammad-muneeb-82b5791b6/', icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: 'https://github.com/muneebashfaq', icon: <GitHubIcon />, label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UC1Cl2U0l8OWRvaJR4ZgQwfw', icon: <YouTubeIcon />, label: 'YouTube' },
]

const Contactus = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  const form = useRef()
  const [fields, setFields] = useState({ user_name: '', user_email: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [sending, setSending] = useState(false)

  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  const validate = (name, value) => {
    if (!value) return 'Required'
    if (name === 'user_email' && !emailRegex.test(value)) return 'Invalid email'
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: validate(name, value) }))
  }

  const sendEmail = (e) => {
    e.preventDefault()
    const newErrors = {
      user_name:  validate('user_name',  fields.user_name),
      user_email: validate('user_email', fields.user_email),
      message:    validate('message',    fields.message),
    }
    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) return

    setSending(true)
    emailjs.sendForm('service_47h4va7', 'template_6ub9p8v', form.current, 'wHTAn1YPSyWt8yS2F')
      .then(() => {
        toast.success('Message sent successfully!', { theme: 'dark', position: 'bottom-center' })
        setFields({ user_name: '', user_email: '', message: '' })
      })
      .catch(() => toast.error('Failed to send. Try again.', { theme: 'dark' }))
      .finally(() => setSending(false))
  }

  return (
    <section className="contact-section">
      <div className="container">
        <span className="section-tag">get in touch</span>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="section-divider"></div>

        <div className="row gy-5 align-items-start">
          {/* Form */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">send_message.js</span>
                <div style={{ width: 60 }}></div>
              </div>
              <div className="terminal-body">
                <form ref={form} onSubmit={sendEmail} noValidate>
                  <div className="term-field">
                    <label className="term-label">
                      <span className="tok-kw">const</span>{' '}
                      <span className="tok-var">name</span>{' '}
                      <span className="tok-op">=</span>
                    </label>
                    <input
                      className={`term-input ${errors.user_name ? 'term-input-error' : ''}`}
                      type="text"
                      name="user_name"
                      value={fields.user_name}
                      onChange={handleChange}
                      placeholder='"Your full name"'
                      autoComplete="name"
                    />
                    {errors.user_name && <span className="term-error">{errors.user_name}</span>}
                  </div>

                  <div className="term-field">
                    <label className="term-label">
                      <span className="tok-kw">const</span>{' '}
                      <span className="tok-var">email</span>{' '}
                      <span className="tok-op">=</span>
                    </label>
                    <input
                      className={`term-input ${errors.user_email ? 'term-input-error' : ''}`}
                      type="email"
                      name="user_email"
                      value={fields.user_email}
                      onChange={handleChange}
                      placeholder='"your@email.com"'
                      autoComplete="email"
                    />
                    {errors.user_email && <span className="term-error">{errors.user_email}</span>}
                  </div>

                  <div className="term-field">
                    <label className="term-label">
                      <span className="tok-kw">const</span>{' '}
                      <span className="tok-var">message</span>{' '}
                      <span className="tok-op">=</span>
                    </label>
                    <textarea
                      className={`term-input term-textarea ${errors.message ? 'term-input-error' : ''}`}
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder='"Tell me about your project..."'
                    />
                    {errors.message && <span className="term-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="term-submit" disabled={sending}>
                    {sending
                      ? <><span className="cursor-blink">▌</span> Sending...</>
                      : <><SendIcon style={{ fontSize: 16 }} /> Send Message</>
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Info + socials */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="contact-info-card">
              <h3 className="contact-info-title">Let's work together</h3>
              <p className="contact-info-desc">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="contact-info-item">
                <span className="contact-info-label">
                  <span className="tok-kw">const</span> email
                </span>
                <span className="contact-info-value">mmuneeb840@gmail.com</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">
                  <span className="tok-kw">const</span> phone
                </span>
                <span className="contact-info-value">+92324-8406920</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">
                  <span className="tok-kw">const</span> location
                </span>
                <span className="contact-info-value">Lahore, Pakistan</span>
              </div>
              <div className="contact-socials">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-link" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" theme="dark" />
    </section>
  )
}

export default Contactus
