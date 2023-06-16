import React from 'react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" className="active"><span>Home</span></Link></li>
              <li><Link to="" className="nav-link scrollto"><span>Hotel</span></Link></li>
              <li><Link to="" className="nav-link scrollto">Packages</Link></li>
              <li><Link to="" className="nav-link scrollto">Flights</Link></li>
              <li><Link to="" className="nav-link scrollto">Umrah Packages</Link></li>
              <li><Link to="/aboutus" className="nav-link scrollto">About</Link></li>
              <li><Link to="/login" className="getstarted scrollto">Login / SignUp</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            {/* <BiList className="mobile-nav-toggle" /> */}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
