'use client'
import './Loader.css'
import { useEffect, useState } from 'react'

const lines = [
  { delay: 0,    text: 'Initializing portfolio...',       color: '#8b949e' },
  { delay: 400,  text: 'Loading components...',           color: '#8b949e' },
  { delay: 800,  text: 'Compiling React modules...',      color: '#8b949e' },
  { delay: 1200, text: 'Mounting Muhammad Muneeb...',     color: '#3fb950' },
  { delay: 1600, text: 'Ready!',                          color: '#58a6ff' },
]

export default function Loader() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [progress, setProgress]         = useState(0)
  const [done, setDone]                 = useState(false)

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), lines[i].delay)
    })

    // Smooth progress bar
    let p = 0
    const tick = setInterval(() => {
      p += 1
      setProgress(p)
      if (p >= 100) clearInterval(tick)
    }, 20)

    // Hide loader
    setTimeout(() => setDone(true), 2200)

    return () => clearInterval(tick)
  }, [])

  if (done) return null

  return (
    <div className="loader-overlay">
      {/* Logo */}
      <div className="loader-logo">
        <span className="loader-bracket">&lt;</span>
        <span className="loader-slash">/</span>
        <span className="loader-bracket">&gt;</span>
      </div>

      {/* Terminal window */}
      <div className="loader-terminal">
        <div className="loader-terminal-header">
          <div className="loader-dots">
            <span className="loader-dot red"></span>
            <span className="loader-dot yellow"></span>
            <span className="loader-dot green"></span>
          </div>
          <span className="loader-terminal-title">portfolio.js</span>
          <div style={{ width: 60 }}></div>
        </div>
        <div className="loader-terminal-body">
          {lines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="loader-line">
              <span className="loader-prompt">$</span>
              <span style={{ color: line.color }}>{line.text}</span>
              {i === visibleLines - 1 && <span className="loader-cursor">▌</span>}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-track">
            <div
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="loader-progress-pct">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
