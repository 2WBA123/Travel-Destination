import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-left">
          <h2>More About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <img src="/img/countries/airfares-101_0.webp" className="more-about-img" alt="About Us" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <h2>Book your next trip with us!</h2>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </h5>
            <ul>
              <li>✓ Our travel company specializes in creating unforgettable journeys tailored to each individual's unique interests and preferences.</li>
              <li>✓ With our extensive network of trusted partners and a commitment to exceptional customer service, we strive to provide the ultimate travel experience for every client.</li>
              <li>✓ Tailored journeys, unforgettable memories – that's our travel company.</li>
              <li>✓ Exceptional service, curated experiences – your dream vacation starts with us.</li>
            </ul>
            <Link to="/booking" className="btn-win">BOOK NOW</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;