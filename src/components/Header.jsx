import React from 'react';

const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex">
      <div className="container-fluid" style={{ paddingLeft: '0px!important', paddingRight: '0px!important' }}>
        <div className="header-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="index.html"><img src="/img/logo.png" alt="" className="img-fluid" /></a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="active" href="index.html"><span>Home</span> </a></li>
              <li><a className="nav-link scrollto" href="hotels.html"><span>Hotel</span> </a></li>
              <li><a className="nav-link scrollto" href="listing.html">Packages</a></li>
              <li><a className="nav-link scrollto " href="flights.html">Flights</a></li>
              <li><a className="nav-link scrollto" href="umrah.html">Umrah Packages</a></li>
              <li><a className="nav-link scrollto" href="aboutUs.html">About</a></li>
              <li><a className="getstarted scrollto" href="login.html">Login / SignUp</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
