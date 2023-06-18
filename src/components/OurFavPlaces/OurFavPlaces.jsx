import React from "react";

const FavoritePlaces = () => {
    return (
      <section id="why-us" className="fav-places">
        <div className="container">
          <div className="row">
            <div className="section-title text-center" data-aos="fade-left">
              <h2>Our Favourite Places</h2>
            </div>
            <div className="col-lg-12 d-flex align-items-stretch">
              <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="card">
                    <div className="card-img">
                      <img src="/img/countries/1.jpg" alt="" className="img-fluid" />
                    </div>
                    <h3><a href="#" className="stretched-link">Amsterdam</a></h3>
                    <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                    <p>Starting from <strong>$1870/ Per Person</strong></p>
                    <p className="fav-places-btn1"><i className="fa-solid fa-clock"></i> <span>15 Days</span> <i className="fa-solid fa-plane"></i> Pakistan, Amsterdam</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                  <div className="card">
                    <div className="card-img">
                      <img src="/img/countries/2.jpg" alt="" className="img-fluid" />
                    </div>
                    <h3><a href="#" className="stretched-link">Key West</a></h3>
                    <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
                    <p>Starting from <strong>$1870/ Per Person</strong></p>
                    <p className="fav-places-btn1"><i className="fa-solid fa-clock"></i> <span>15 Days</span> <i className="fa-solid fa-plane"></i> Pakistan, Key West</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
                  <div className="card">
                    <div className="card-img">
                      <img src="/img/countries/4.jpg" alt="" className="img-fluid" />
                    </div>
                    <h3><a href="#" className="stretched-link">New York City</a></h3>
                    <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>
                    <p>Starting from <strong>$1870/ Per Person</strong></p>
                    <p className="fav-places-btn1"><i className="fa-solid fa-clock"></i> <span>15 Days</span> <i className="fa-solid fa-plane"></i> Pakistan, NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FavoritePlaces;
  