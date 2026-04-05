'use client'
import './Services.styles.css'
import ArrayProject from './Array.Project'
import Aos from 'aos'
import { useEffect } from 'react'

const ServiceCard = ({ title, description, icon, index }) => (
  <div
    className="srv-card"
    data-aos="fade-up"
    data-aos-delay={index * 80}
  >
    <div className="srv-icon">{icon}</div>
    <h4 className="srv-title">{title}</h4>
    <p className="srv-desc">{description}</p>
    <div className="srv-footer">
      <span className="srv-tag">service.{String(index + 1).padStart(2, '0')}</span>
    </div>
  </div>
)

const Services = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  return (
    <section className="services-section">
      <div className="container">
        <span className="section-tag">what i offer</span>
        <h2 className="section-title">My <span>Services</span></h2>
        <div className="section-divider"></div>

        <div className="row gy-4 gx-4">
          {ArrayProject.map((srv, i) => (
            <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
              <ServiceCard {...srv} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
