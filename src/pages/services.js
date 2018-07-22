import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout/layout'
import CallToAction from '../components/call-to-action/call-to-action'

const services = () => (
  <Layout>
    <div className="container">
      <section className='section'>
        <div className="content">
          <h1 className='has-text-centered title'>What I Can Do For You</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim eius numquam
            qui expedita iure rerum suscipit nam doloremque temporibus maxime facere
            pariatur dolore, obcaecati praesentium aperiam iusto. Ad placeat voluptatum quam
            ea totam explicabo. Consequuntur ab delectus earum alias! Incidunt alias nihil
            sed impedit deleniti aut maxime nemo cupiditate.</p>
          <p className='has-text-centered is-size-5'>Already Know what you need?</p>
          <div className='has-text-centered'>
            <Link to='/start-your-project' className='button is-medium is-rounded'>Get Started Now
            </Link>
          </div>
          <hr className="border"/>

          <div className='columns'>
            <div className="card column is-6">
              <div className="card-header">
                <Link to='/services/design' className='card-header-title is-centered'>
                  <h3 className=''>
                    <i className="card-header-icon bx bxs-layout bx-border-circle"></i>
                    Design</h3>
                </Link>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
                <hr className="border"/>
                <div className="columns card-list">
                  <div className="column">
                    <ul>
                      <li>Branding</li>
                      <li>Logos</li>
                      <li>Print</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      <li>User Interface / User Experience</li>
                      <li>Advertising / Promotional</li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">
                  <Link to='/services/design'>Find Out More</Link>
                  <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
                </div>
              </footer>
            </div>
            <div className="card column is-6">
              <div className="card-header">
                <Link to='/services/development' className='card-header-title is-centered'>
                  <h3 className=''>
                    <i className="card-header-icon bx bx-code-curly bx-border-circle"></i>
                    Development</h3>
                </Link>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
                <hr className="border"/>
                <div className="columns card-list">
                  <div className="column">
                    <ul>
                      <li>Front-End</li>
                      <li>Wordpress</li>
                      <li>Applications</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      <li>E-Commerce</li>
                      <li>Back-End and Integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">
                  <Link to='/services/development'>Find Out More</Link>
                  <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
                </div>
              </footer>
            </div>
          </div>

          <div className='columns'>
            <div className="card column is-6">
              <div className="card-header">
                <Link to='/services/marketing' className='card-header-title is-centered'>
                  <h3 className=''>
                    <i className="card-header-icon bx bx-trending-up bx-border-circle"></i>
                    Marketing</h3>
                </Link>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
                <hr className="border"/>
                <div className="columns card-list">
                  <div className="column">
                    <ul>
                      <li>Social Media Management</li>
                      <li>Content Marketing and Management</li>
                      <li>E-Mail Marketing</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      <li>Search Engine Optimization</li>
                      <li>Pay-Per-Click Advertising</li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">
                  <Link to='/services/marketing'>Find Out More</Link>
                  <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
                </div>
              </footer>
            </div>
            <div className="card column is-6">
              <div className="card-header">
                <Link
                  to='/services/research-and-analytics'
                  className='card-header-title is-centered'>
                  <h3 className=''>
                    <i className="card-header-icon bx bx-globe bx-border-circle"></i>
                    Research and Analytics</h3>
                </Link>
              </div>
              <div className="card-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facilis neque
                  a! Quibusdam, cum sequi?</p>
                <hr className="border"/>
                <div className="columns card-list">
                  <div className="column">
                    <ul>
                      <li>Discovery</li>
                      <li>Google Analytics</li>
                      <li>Develop Buyer Persona's</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      <li>Custom Reporting</li>
                      <li>Consulting and Strategy Development</li>
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <div className="card-footer-item">
                  <Link to='/services/research-and-analytics'>Find Out More</Link>
                  <i className="bx bx-chevrons-right bx-fade-right-hover"></i>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
    <CallToAction/>
  </Layout>
)

export default services