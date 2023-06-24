import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLinks, stylePadding } from '../constants/HeaderFooterConstants';

const Header = () => {

 
  return (
    <header id="header" className="fixed-top d-flex">
      <div className="container-fluid" style={{ ...stylePadding }}>
        <div className="header-container d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="index.html"><img src="/img/logo.png" alt="" className="img-fluid" /></a>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              {
                HeaderLinks.map(({to, className, name}, index)=> <li key={index} ><Link to={to} className={className}><span>{name}</span></Link></li>)
              }
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
