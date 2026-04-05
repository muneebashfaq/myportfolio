'use client'
import './Intro.css'
import Aos from 'aos'
import { useEffect, useState } from 'react'
import { DownloadOutlined, ArrowRightOutlined } from '@ant-design/icons'

const CodeBlock = () => {
  const [visibleLines, setVisibleLines] = useState(0)

  const lines = [
    { tokens: [
      { type: 'kw', text: 'const' }, { type: 'space', text: ' ' },
      { type: 'var', text: 'developer' }, { type: 'op', text: ' = {' }
    ]},
    { tokens: [
      { type: 'indent', text: '  ' },
      { type: 'prop', text: 'name' }, { type: 'op', text: ': ' },
      { type: 'str', text: '"Muhammad Muneeb"' }, { type: 'op', text: ',' }
    ]},
    { tokens: [
      { type: 'indent', text: '  ' },
      { type: 'prop', text: 'title' }, { type: 'op', text: ': ' },
      { type: 'str', text: '"Full Stack Developer"' }, { type: 'op', text: ',' }
    ]},
    { tokens: [
      { type: 'indent', text: '  ' },
      { type: 'prop', text: 'stack' }, { type: 'op', text: ': ' },
      { type: 'op', text: '[' },
      { type: 'str', text: '"React"' }, { type: 'op', text: ', ' },
      { type: 'str', text: '"Next.js"' }, { type: 'op', text: ', ' },
      { type: 'str', text: '"Django"' },
      { type: 'op', text: '],' }
    ]},
    { tokens: [
      { type: 'indent', text: '  ' },
      { type: 'prop', text: 'experience' }, { type: 'op', text: ': ' },
      { type: 'num', text: '3' }, { type: 'op', text: '+' },
      { type: 'str', text: '" years"' }, { type: 'op', text: ',' }
    ]},
    { tokens: [
      { type: 'indent', text: '  ' },
      { type: 'prop', text: 'location' }, { type: 'op', text: ': ' },
      { type: 'str', text: '"Lahore, Pakistan"' }, { type: 'op', text: ',' }
    ]},
    { tokens: [
      { type: 'indent', text: '  ' },
      { type: 'prop', text: 'available' }, { type: 'op', text: ': ' },
      { type: 'bool', text: 'true' }
    ]},
    { tokens: [{ type: 'op', text: '};' }]},
    { tokens: [] },
    { tokens: [
      { type: 'obj', text: 'console' }, { type: 'op', text: '.' },
      { type: 'fn', text: 'log' }, { type: 'op', text: '(' },
      { type: 'str', text: '`Hello World! 👋`' },
      { type: 'op', text: ');' }
    ]},
  ]

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= lines.length) clearInterval(interval)
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="code-editor" data-aos="fade-left">
      <div className="code-header">
        <div className="dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="code-filename">developer.js</span>
        <div className="code-header-spacer"></div>
      </div>
      <div className="code-body">
        <div className="line-numbers">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="code-content">
          {lines.map((line, i) => (
            <div
              key={i}
              className="code-line"
              style={{
                opacity: i < visibleLines ? 1 : 0,
                transform: i < visibleLines ? 'translateX(0)' : 'translateX(-8px)',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
              }}
            >
              {line.tokens.length === 0 ? '\u00A0' : line.tokens.map((tok, j) => (
                <span key={j} className={`tok-${tok.type}`}>{tok.text}</span>
              ))}
            </div>
          ))}
          {visibleLines >= lines.length && (
            <div className="code-line">
              <span className="cursor-blink">▌</span>
            </div>
          )}
        </pre>
      </div>
    </div>
  )
}

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 900, once: true })
  }, [])

  return (
    <div className="intro-wrapper">
      {/* Floating background elements */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      <div className="container intro-container">
        <div className="row align-items-center gy-5">

          {/* Left: text */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="intro-badge">
              <span className="badge-dot"></span>
              Available for work
            </div>
            <p className="intro-greeting">Hi, I'm</p>
            <h1 className="intro-name">
              Muhammad<br />
              <span className="name-accent">Muneeb</span>
            </h1>
            <div className="intro-role">
              <span className="role-prefix">{'> '}</span>
              <span className="role-text">Full Stack Developer</span>
            </div>
            <p className="intro-desc">
              Passionate about crafting <span className="highlight">beautiful</span> and{' '}
              <span className="highlight">performant</span> web applications using React,
              Next.js &amp; Django. Turning ideas into code, one commit at a time.
            </p>
            <div className="intro-actions">
              <a href="/MyCv.pdf" download="MyCv.pdf" className="btn-primary-custom">
                <DownloadOutlined /> Download CV
              </a>
              <a href="#Contact" className="btn-secondary-custom">
                Let's Talk <ArrowRightOutlined />
              </a>
            </div>
            <div className="intro-stats">
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <span className="stat-num">5+</span>
                <span className="stat-label">Tech Stack</span>
              </div>
            </div>
          </div>

          {/* Right: code block */}
          <div className="col-lg-6">
            <CodeBlock />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line"></div>
      </div>
    </div>
  )
}

export default Intro
