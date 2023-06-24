import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../OurClients/OurClients.css";

function ClientsSection() {
  useEffect(() => {
    Aos.init();
  }, []);

  const images = [
    "/img/clients/client-1.png",
    "/img/clients/client-2.png",
    "/img/clients/client-3.png",
    "/img/clients/client-4.png",
    "/img/clients/client-4.png",
    "/img/clients/client-6.png",
  ];

  return (
    <div className="container-fluid">
      <div className="section-title text-center" data-aos="fade-down">
        <h2 className="p-0 m-0">Our Clients</h2>
      </div>
      <section id="clients" className="clients mb-0">
        <div className="marquee_text">
          <div className="marquee_container">
          {[...Array(4)].map((_, index) => (
              <React.Fragment key={`marquee1-${index}`}>
                {images.map((image, innerIndex) => (
                  <div className="marqueeElement" key={`marquee1-${index}-${innerIndex}`}>
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <div className="marquee_text2">
          <div className="marquee_container">
          {[...Array(4)].map((_, index) => (
              <React.Fragment key={`marquee1-${index}`}>
                {images.slice().reverse().map((image, innerIndex) => (
                  <div className="marqueeElement" key={`marquee1-${index}-${innerIndex}`}>
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClientsSection;
