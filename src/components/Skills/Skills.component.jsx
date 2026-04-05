'use client'
import './Skills.styles.css'
import Aos from 'aos'
import { useEffect, useState } from 'react'

const skillGroups = [
  {
    label: 'frontend',
    color: '#58a6ff',
    skills: [
      { name: 'HTML5', level: 90, tag: 'markup' },
      { name: 'CSS3', level: 90, tag: 'styling' },
      { name: 'JavaScript', level: 90, tag: 'language' },
      { name: 'ReactJs', level: 90, tag: 'library' },
      { name: 'NextJs', level: 85, tag: 'framework' },
      { name: 'Redux ', level: 85, tag: 'state' },
      { name: 'TypeScript', level: 80, tag: 'language' },
    ],
  },
  {
    label: 'backend',
    color: '#3fb950',
    skills: [
      { name: 'NodeJs', level: 90, tag: 'runtime' },
      { name: 'ExpressJs', level: 90, tag: 'framework' },
      { name: 'Python', level: 90, tag: 'language' },
      { name: 'Django', level: 90, tag: 'framework' },
      { name: 'RESTful APIs', level: 90, tag: 'api' },
      { name: 'GraphQL', level: 70, tag: 'api' },
      { name: 'MongoDB', level: 80, tag: 'database' },
      { name: 'MySQL', level: 70, tag: 'database' },
    ],
  },
  {
    label: 'tools & practices',
    color: '#f778ba',
    skills: [
      { name: 'Git', level: 85, tag: 'tool' },
      { name: 'Agile', level: 85, tag: 'process' },
      { name: 'Jira', level: 85, tag: 'tool' },
      { name: 'ClickUp', level: 80, tag: 'tool' },
      { name: 'Bitrix24', level: 75, tag: 'tool' },
      { name: 'Performance Optimization', level: 80, tag: 'performance' },
      { name: 'API Integration', level: 90, tag: 'integration' },
      { name: 'Authentication', level: 85, tag: 'security' },
    ],
  }
]

const techTags = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Django', 'Python', 'Git', 'REST APIs', 'MySQL', 'Redux', 'CSS3']

// Each bar manages its own width state so the transition is guaranteed
const SkillBar = ({ name, level, color, tag }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    // Double rAF: first frame paints width:0, second frame starts transition to target
    const id1 = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setWidth(level))
      return () => cancelAnimationFrame(id2)
    })
    return () => cancelAnimationFrame(id1)
  }, [level])

  return (
    <div className="skill-item">
      <div className="skill-meta">
        <span className="skill-name">
          <span className="tok-kw">const </span>
          <span style={{ color }}>{name}</span>
        </span>
        <span className="skill-badge">{tag}</span>
        <span className="skill-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  return (
    <section className="skills-section">
      <div className="container">
        <span className="section-tag">expertise</span>
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="section-divider"></div>

        <div className="row gy-4" data-aos="fade-up">
          {skillGroups.map((group, gi) => (
            <div className="col-lg-6" key={gi}>
              <div className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-group-label">
                    <span className="tok-comment">{'// '}</span>
                    {group.label}
                  </span>
                </div>
                {group.skills.map((s, si) => (
                  <SkillBar key={si} {...s} color={group.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-tags" data-aos="fade-up">
          {techTags.map((tag, i) => (
            <span key={i} className="tech-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
