import React, { useState } from "react";

const HeroSection = () => {
  const [currentTab, setCurrentTab] = useState("tab-1");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <section id="hotel_hero" className="d-flex align-items-center hero2">
      <div
        className="container  position-relative"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1 className="text-center" style={{ marginTop: "100px" }}>
          Discover Real Value of Travel
        </h1>
        <div
          className="container tab_container"
          style={{ textAlign: "left", marginTop: "80px" }}
        >
          <ul className="tabs">
            <li
              className={`tab-link ${currentTab === "tab-1" ? "current" : ""}`}
              onClick={() => handleTabClick("tab-1")}
            >
              <i className="fa-solid fa-plane"></i> Flight
            </li>
            <li
              className={`tab-link ${currentTab === "tab-2" ? "current" : ""}`}
              onClick={() => handleTabClick("tab-2")}
            >
              <i className="fa-solid fa-hotel"></i> Hotels
            </li>
            <li
              className={`tab-link ${currentTab === "tab-3" ? "current" : ""}`}
              onClick={() => handleTabClick("tab-3")}
            >
              <i className="fa-solid fa-ticket"></i> Activities
            </li>
          </ul>
          <div
            className={`tab-content ${currentTab === "tab-1" ? "current" : ""}`}
          >
            <FlightTabContent1 />
          </div>

          <div
            className={`tab-content ${currentTab === "tab-2" ? "current" : ""}`}
          >
            <HotelTabContent />
          </div>

          <div
            className={`tab-content ${currentTab === "tab-3" ? "current" : ""}`}
          >
            <ActivitiesTabContent />
          </div>
        </div>
      </div>
    </section>
  );
};

const FlightTabContent1 = () => {
  const [activeTab, setActiveTab] = useState("oneway");

  const openCity = (event, tabName) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab">
        <button
          className={`tablinks ${activeTab === "oneway" ? "active" : ""}`}
          onClick={(e) => openCity(e, "oneway")}
        >
          One-Way
        </button>
        <button
          className={`tablinks ${activeTab === "roundtrip" ? "active" : ""}`}
          onClick={(e) => openCity(e, "roundtrip")}
          id="defaultOpen"
        >
          Round-Trip
        </button>
        <button
          className={`tablinks ${activeTab === "multicity" ? "active" : ""}`}
          onClick={(e) => openCity(e, "multicity")}
        >
          Multi-City
        </button>
      </div>
      {activeTab === "oneway" && (
        <div>
          <form>
            <div className="tab-1_form_input1">
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  From
                </option>
                <option>Islamabad, Pakistan</option>
                <option>Lahore, Pakistan</option>
                <option>Faislabad, Pakistan</option>
                <option>Karachi, Pakistan</option>
              </select>
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  To
                </option>
                <option>Jeddah</option>
                <option>Makkah</option>
                <option>Madinah</option>
                <option>Riyad</option>
              </select>
              <input
                type="text"
                name="text"
                className="date-picker"
                placeholder="Depart"
              />
            </div>
            <div className="tab-1_form_input2">
              <div className="d-flex">
                <input type="checkbox" id="something" />
                <label htmlFor="something" style={{ marginTop: "5px" }}>
                  Direct Flights Only
                </label>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>1 Adult</option>
                  <option>2 Adult</option>
                  <option>3 Adult</option>
                </select>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>Payment Methods</option>
                  <option>Card Pay</option>
                  <option>Cash</option>
                </select>
              </div>
              <button
                type="button"
                className="btn-tabSearch"
                onClick={() => (window.location.href = "flightListing.html")}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "roundtrip" && (
        <div>
          <form>
            <div className="tab-1_form_input1">
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  From
                </option>
                <option>Islamabad, Pakistan</option>
                <option>Lahore, Pakistan</option>
                <option>Faislabad, Pakistan</option>
                <option>Karachi, Pakistan</option>
              </select>
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  To
                </option>
                <option>Jeddah</option>
                <option>Makkah</option>
                <option>Madinah</option>
                <option>Riyad</option>
              </select>
              <input
                type="text"
                name="text"
                className="date-picker"
                placeholder="Depart"
              />
              <input
                type="text"
                name="text"
                className="date-picker"
                placeholder="Return"
              />
            </div>

            <div className="tab-1_form_input2">
              <div className="d-flex">
                <input type="checkbox" id="something" />
                <label htmlFor="something" style={{ marginTop: "5px" }}>
                  Direct Flights Only
                </label>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>1 Adult</option>
                  <option>2 Adult</option>
                  <option>3 Adult</option>
                </select>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>Payment Methods</option>
                  <option>Card Pay</option>
                  <option>Cash</option>
                </select>
              </div>
              <button
                type="button"
                className="btn-tabSearch"
                onClick={() => (window.location.href = "flightListing.html")}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "multicity" && (
        <div>
          <form>
            <div className="tab-1_form_input1">
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  From
                </option>
                <option>Islamabad, Pakistan</option>
                <option>Lahore, Pakistan</option>
                <option>Faislabad, Pakistan</option>
                <option>Karachi, Pakistan</option>
              </select>
              <select id="inputState" className="form-select" required>
                <option value="" disabled selected>
                  To
                </option>
                <option>Jeddah</option>
                <option>Makkah</option>
                <option>Madinah</option>
                <option>Riyad</option>
              </select>
            </div>
            <div className="tab-1_form_input1">
              <input
                type="text"
                name="text"
                className="date-picker"
                placeholder="Depart"
              />
              <input
                type="text"
                name="text"
                className="date-picker"
                placeholder="Return"
              />
            </div>
            <div className="tab-1_form_input2">
              <div className="d-flex">
                <input type="checkbox" id="something" />
                <label htmlFor="something" style={{ marginTop: "5px" }}>
                  Direct Flights Only
                </label>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>1 Adult</option>
                  <option>2 Adult</option>
                  <option>3 Adult</option>
                </select>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="d-flex">
                <select
                  id="inputState"
                  className="form-select selectFields"
                  required
                >
                  <option selected>Payment Methods</option>
                  <option>Card Pay</option>
                  <option>Cash</option>
                </select>
              </div>
              <button
                type="button"
                className="btn-tabSearch"
                onClick={() => (window.location.href = "flightListing.html")}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const HotelTabContent = () => {
  return (
    <div id="tab-2" className="tab-content current">
      <h5 className="mb-lg-4">Where do you want to stay ?</h5>
      <form>
        <div className="tab-1_form_input1">
          <select id="inputState" className="form-select" required>
            <option value="" disabled selected>
              Destination
            </option>
            <option>Islamabad, Pakistan</option>
            <option>Lahore, Pakistan</option>
            <option>Faislabad, Pakistan</option>
            <option>Karachi, Pakistan</option>
          </select>
          <input
            type=""
            name="date"
            className="date-picker"
            placeholder="CheckIn"
          />
          <input
            type=""
            name="date"
            className="date-picker"
            placeholder="CheckOut"
          />
          <select id="inputState" className="form-select" required>
            <option selected>Guests and Rooms</option>
            <option>2 Adult</option>
            <option>3 Adult</option>
          </select>
        </div>
        <div className="tab-1_form_input2">
          <div className="d-flex">
            <input type="checkbox" className="checkboxHotelFlight" />
            <label htmlFor="something" style={{ marginTop: "5px" }}>
              {" "}
              Free Cancellation
            </label>
          </div>
          <button
            type="button"
            className="btn-tabSearch"
            onClick={() => {
              window.location.href = "hotelListing.html";
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

const ActivitiesTabContent = () => {
  const handleSearch = () => {
    window.location.href = "hotelListing.html";
  };

  return (
    <div >
      <h5 className="mb-4">Explore things to do near you</h5>
      <form>
        <div className="tab-1_form_input3">
          <input
            type="text"
            name="text"
            placeholder="Search by Destination, Activities or Attractions"
          />
          <button
            type="button"
            className="btn-tabSearch"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
