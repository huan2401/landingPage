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
        </div>
      </div>
    </div>
  );
}

export default Header;
