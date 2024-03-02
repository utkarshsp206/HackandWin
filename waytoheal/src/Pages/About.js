import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='ab top'>
        <div class='background-image top'>
          <h2>Our Mission</h2>
          <p>
            Way2Heal is on a mission to make quality healthcare affordable and
            accessible for over a billion+ Indians. We believe in empowering our
            users with the most accurate, comprehensive, and curated information
            and care, enabling them to make better healthcare decisions.
          </p>
        </div>
      </div>
      <br />
      <div className='ab mid'>
        <h2>Our approach to healthcare</h2>
        <p>
          Providing high-quality, trusted, and accessible healthcare is our
          reason for being
        </p>
        <div className='approach'>
          <div className='a-card'>
            <img src='/about/connect.png' alt='' />
            <h2>Connect</h2>
            <p>
              We understand healthcare goes beyond signs, symptoms, diagnosis,
              and treatment. It’s about the deep connection between doctors and
              patients that leads to continuous care and sustained, better
              outcomes.
            </p>
          </div>
          <div className='a-card'>
            <img src='/about/trans.png' alt='' />
            <h2>Transparency</h2>
            <p>
              We believe in full disclosure. We believe in communicating openly
              and honestly, and holding ourselves to the highest ethical
              standards.
            </p>
          </div>
          <div className='a-card'>
            <img src='/about/trust.png' alt='' />
            <h2>Trust</h2>
            <p>
              way2Heal works on trust. We are aware of the responsibility placed
              on us by 30 crore+ patients and over a lakh doctors. We always
              have and always will do everything we possibly can to uphold this
              trust.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className='ab down'>
        <div className='left'>
          <h2>Data privacy and security is our top priority</h2>
          <p>
            Data privacy and security has always served as one of the founding
            philosophies of Practo, and we go to great lengths to safeguard the
            confidentiality and integrity of our users. Read more here
          </p>
        </div>
        <div className='right'>
          <img src='/about/security.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default About
