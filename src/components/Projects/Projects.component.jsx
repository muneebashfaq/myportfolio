'use client'
import './Projects.styles.css'
import ArrayProject from './Array.Project'
import Aos from 'aos'
import { useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const ProjectCard = ({ title, description, stack, pic_url, liveUrl, github, index }) => (
  <div
    className="proj-card"
    data-aos="fade-up"
    data-aos-delay={index * 80}
  >
    <div className="proj-img-wrap">
      <img src={pic_url} alt={title} className="proj-img" />
      <div className="proj-img-overlay">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer" className="proj-overlay-btn">
            <OpenInNewIcon style={{ fontSize: 18 }} /> Live Demo
          </a>
        )}
      </div>
    </div>
    <div className="proj-body">
      <div className="proj-index">
        <span className="tok-comment">{'// '}</span>
        <span style={{ color: 'var(--orange)' }}>project_{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h4 className="proj-title">{title}</h4>
      <p className="proj-desc">{description}</p>
      {stack && stack.length > 0 && (
        <div className="proj-stack">
          {stack.map((tech, i) => (
            <span key={i} className="proj-tech-tag">{tech}</span>
          ))}
        </div>
      )}
      <div className="proj-footer">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer" className="proj-link">
            <OpenInNewIcon style={{ fontSize: 16 }} /> Live App
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noreferrer" className="proj-link">
            <GitHubIcon style={{ fontSize: 16 }} /> GitHub
          </a>
        )}
        {!liveUrl && !github && (
          <span className="proj-link proj-link-disabled">Private Project</span>
        )}
      </div>
    </div>
  </div>
)

const Projects = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  return (
    <section className="projects-section">
      <div className="container">
        <span className="section-tag">portfolio</span>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="section-divider"></div>

        <div className="row gy-4 gx-4">
          {ArrayProject.map((proj, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
              <ProjectCard {...proj} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
