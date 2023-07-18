import React from "react";
import OverviewParagraphs from "../OverviewParagraphs/OverviewParagraphs";
import Sidebar from "../SideBar/SideBar";
import BookingCard from "../BookingCard/BookingCard";
import { items } from "../../constants/CardsConstants";

const PayNow = () => {
  return (
    <>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <h2>Pay Now</h2>
        </div>
      </section>

      <section
        id="bookNow_details"
        className="bookNow_details portfolio-details"
      >
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  {[1, 2].map((index) => (
                    <div className="swiper-slide" key={index}>
                      <img
                        src={`/img/countries/${index}.jpg`}
                        alt=""
                        style={{ height: "550px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="portfolio-info">
                <h3>
                  <span style={{ fontWeight: "200", fontSize: "13px" }}>
                    from
                  </span>{" "}
                  $43.38
                </h3>
                <p style={{ marginTop: "-20px", fontSize: "13px" }}>
                  Lowest Price Guarantee
                </p>
                <hr />
                <div className="portfolio-info-form">
                  <form style={{ display: "flex", flexDirection: "column" }}>
                    <h3>Contact Information</h3>
                    <div className="portfolio-info-form-input1">
                      <input type="email" name="email" placeholder="Email" />
                      <input type="name" name="name" placeholder="Name" />
                    </div>
                    <div className="portfolio-info-form-input2">
                      <input
                        type="number"
                        name="number"
                        placeholder="Enter your number"
                      />
                    </div>
                    <div className="portfolio-info-form-input3">
                      <h3>Card Information</h3>
                      <input
                        type="text"
                        name="cardInfo"
                        placeholder="xxxx xxxx xxx"
                      />
                    </div>
                    <div className="portfolio-info-form-input4">
                      <input
                        type="text"
                        name="date"
                        className="date-picker"
                        placeholder="Select Date"
                      />
                      <input type="text" name="cvc" placeholder="CVC" />
                    </div>
                    <div className="portfolio-info-form-input5">
                      <input
                        type="text"
                        name="nameCard"
                        placeholder="Name on Card"
                      />
                    </div>
                    <div className="portfolio-info-form-input5">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country or Region"
                      />
                    </div>
                    <button type="submit" className="btn-requestCall">
                      PAY NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lists" class="lists">
        <div class="container">
          <div class="row">
            <Sidebar />
            <div
              id="mainContent"
              className="col-lg-9 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-12 align-items-stretch">
                    <OverviewParagraphs />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookingCard items={items} heading={"Our Top Destinations"}/>
    </>
  );
};

export default PayNow;
