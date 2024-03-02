import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='ab top'>
        <div class='background-image top'>
          <h2>Our Mission</h2>
          <p>
            Way2Heal is committed to making quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.
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
              At Way2Heal, we recognize that healthcare transcends mere signs, symptoms, diagnosis, and treatment. It embodies the profound bond between doctors and patients, fostering continuous care and achieving sustained, improved outcomes.
            </p>
          </div>
          <div className='a-card'>
            <img src='/about/trans.png' alt='' />
            <h2>Transparency</h2>
            <p>
              At Way2Heal, transparency is our cornerstone. We advocate for full disclosure, communicating openly and honestly, and upholding ourselves to the highest ethical standards.
            </p>
          </div>
          <div className='a-card'>
            <img src='/about/trust.png' alt='' />
            <h2>Trust</h2>
            <p>
              Way2Heal operates on trust. We understand the responsibility placed on us by patients and doctors alike. We are dedicated to upholding this trust in everything we do.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className='ab down'>
        <div className='left'>
          <h2>Data privacy and security is our top priority</h2>
          <p>
            Data privacy and security have always been foundational principles at Practo. We prioritize safeguarding the confidentiality and integrity of our users' information, going to great lengths to ensure their privacy and security.
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
