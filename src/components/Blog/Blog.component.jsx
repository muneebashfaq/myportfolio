'use client'
import blog_pic from '../../assets/blog.jpg'
import './Blog.styles.css'
import Aos from 'aos'
import { useEffect } from 'react'
import ArticleIcon from '@mui/icons-material/Article'

const Blog = () => {
  useEffect(() => { Aos.init({ duration: 900, once: true }) }, [])

  return (
    <section className="blog-section">
      <div className="container">
        <span className="section-tag">writing</span>
        <h2 className="section-title">My <span>Blogs</span></h2>
        <div className="section-divider"></div>

        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7" data-aos="fade-up">
            <div className="blog-card">
              <div className="blog-img-wrap">
                <img src={blog_pic.src || blog_pic} alt="blog" className="blog-img" />
                <div className="blog-coming-tag">
                  <span>Coming Soon</span>
                </div>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <ArticleIcon style={{ fontSize: 14, color: 'var(--text-muted)' }} />
                  <span className="blog-meta-text">Technical Articles</span>
                </div>
                <h4 className="blog-title">My Official Blog Site</h4>
                <p className="blog-desc">
                  I'll be posting articles on web development, React, Django,
                  and modern JavaScript. Stay tuned — great content is coming!
                </p>
                <div className="blog-footer">
                  <span className="blog-status-badge">
                    <span className="tok-bool">false</span>
                    {' '}// published
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
