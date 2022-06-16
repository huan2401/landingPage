import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav.jsx";

function Header(props) {
  return (
    <div className="header" style={props.style}>
      <div className="header-wrapper">
        <div className="header-logo">
          <img
            src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/common/logo_text.png"
            alt="#"
          />
        </div>
        <div className="header-nav">
          <Nav />
          {/* <div>
            <p>About</p>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
          <div>
            <p>Service</p>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
          <div>
            <p>New</p>
          </div>
          <div>
            <p>Employment </p>
          </div>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>Inquiry</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
