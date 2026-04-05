'use client'
import './Education.styles.css'
import Aos from 'aos'
import { useEffect } from 'react'
import SchoolIcon from '@mui/icons-material/School'
import CodeIcon from '@mui/icons-material/Code'

const education = [
  {
    type: 'degree',
    icon: <SchoolIcon />,
    degree: 'BS (Information Technology)',
    institute: 'University of Punjab',
    period: '2017 — 2021',
    detail: 'Specialized in web technologies, databases, and software engineering.',
  },
]

const courses = [
  { name: 'JavaScript Course',         provider: 'Udemy (Newbie)',                  year: '2021' },
  { name: 'ReactJs Course',            provider: 'Zero To Mastery Academy (Udemy)', year: '2021' },
  { name: 'Advance ReactJs Course',    provider: 'Mysterious Academy (Google)',     year: '2022' },
]

const Education = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  return (
    <section className="edu-section">
      <div className="container">
        <span className="section-tag">background</span>
        <h2 className="section-title">Education &amp; <span>Courses</span></h2>
        <div className="section-divider"></div>

        <div className="row gy-5">
          {/* Education */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="edu-block-label">
              <SchoolIcon style={{ fontSize: 16 }} /> Education
            </div>
            {education.map((e, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-card-icon"><SchoolIcon /></div>
                <div className="edu-card-info">
                  <h4 className="edu-degree">{e.degree}</h4>
                  <p className="edu-institute">{e.institute}</p>
                  <span className="edu-period">{e.period}</span>
                  <p className="edu-detail">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="edu-block-label">
              <CodeIcon style={{ fontSize: 16 }} /> Courses &amp; Certifications
            </div>
            <div className="course-timeline">
              {courses.map((c, i) => (
                <div className="course-item" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="course-dot"></div>
                  <div className="course-content">
                    <div className="course-header">
                      <h5 className="course-name">{c.name}</h5>
                      <span className="course-year">{c.year}</span>
                    </div>
                    <p className="course-provider">
                      <span className="tok-str">"{c.provider}"</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
