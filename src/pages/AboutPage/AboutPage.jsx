import React from "react";
import HeroSection from "./HeroSection";

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-left">
              <h2>More About Us</h2>
            </div>

            <div className="row content">
              <div
                className="col-lg-6"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src="/img/countries/airfares-101_0.webp"
                  className="more-about-img"
                  alt="More About Us"
                />
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0 aboutUs_text"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <p>
                  Travel Destination Online is a complete B2B travel management
                  company specialized in providing excellent travel-related
                  services and products such as hotels, furnished service
                  apartments, transfers, professionally guided sightseeing
                  tours, and packages to customers around the world.
                </p>
                <p>
                  We are incomparable when it comes to customer service and
                  cost-containment. We believe that innovation is vital to our
                  success; therefore, flexible service options and our online
                  booking engine keep our business relations on the leading
                  edge.
                </p>
                <p>
                  Our winning situation means that we will secure the best
                  possible value for your business without compromising the
                  standard of quality, service, or convenience. At Travel
                  Destination Online, we are committed to placing the interests
                  of our customers as a priority. We establish relationships
                  with individuals based on transparency, mutual business
                  understanding, and dedication to delivering our commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutUs_overviewText">
          <div className="container">
            <h2>Overview</h2>
            <p>
              Travel Destination Online has taken a step ahead by developing its
              own Online Booking Engine that caters to the fast-growing demand
              of the online bookings market. Our team of professionals ranges
              from excellent and proven track records in the tourism industry.
              We specialize in Free Independent Travelers (FIT) and MICE
              (Meetings, Incentives, Conventions, and Exhibitions) and have been
              actively and successfully handling both segments from the Middle
              East and Asia. Our clients include SUBC, Middle East, and GCC. We
              are also delighted to share that success and strength in FIT and
              MICE (Groups) have become the symbols of our company and what we
              are renowned for. In return, it has made us one of the premier
              companies in the region. The reputation that we have developed has
              further encouraged us to focus on creating awareness of FIT
              importance amongst our travel partners. With this goal in mind, we
              have gone from strength to strength in negotiating the most
              competitive rates with hotels and suppliers in accordance with the
              demands of our specific markets. In developing and maintaining a
              cost-effective travel policy for your company, we will not only
              make sure that you get to your destination, but our destination
              management and caretaker team will work with you to ensure that
              your journey is seamless.
            </p>

            <h2>Vision</h2>
            <p>
              To become a dedicated Wholesale Travel Company in the next coming
              two years by establishing a network of our offices in over 5
              countries within the Middle East, Europe, Far East, and
              Sub-Continent Region, in addition to our existing operational and
              sales offices in Bahrain, Saudi Arabia, and Pakistan.
            </p>

            <h2>Core Activities of Travel Destination Online</h2>
            <ul>
              <li>
                <i className="fa-solid fa-check-double"></i> Hotel Accommodation
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Events Management,
                Promotions
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Transportation
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Dynamic Packages
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Contracting
                Division (Hotels & Resorts)
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Corporate Services
                to Travel Agent Partners (MICE-Meetings, Incentive Conference,
                Exhibition)
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Online Travel
                Technology (XML-Online Booking Engine with XML in & XML out
                options)
              </li>
            </ul>

            <h2>TDO Team</h2>
            <p>
              Our strength lies in our highly professional and self-driven team.
              Travel Destination Online invests in extensive team-building
              programs that ultimately fabricate a unified and dynamic
              workforce. It is imperative that hired personnel adhere to the
              following core values of the company:
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-check-double"></i> Consistency
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Transparency
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Efficiency
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Teamwork
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Initiative
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Integrity
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Respect
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Loyalty
              </li>
              <li>
                <i className="fa-solid fa-check-double"></i> Professionalism
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
