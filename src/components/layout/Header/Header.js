import React, { useState } from "react";
import Logo from "../../../assets/logo.jpg";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  return (
    <div className="header" style={props.style}>
      <div className="header-wrapper">
        <Link to="/" className="header-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <label className="nav-responsive" htmlFor="toggleNav">
          <i class="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="toggleNav" />
        <nav className="header-nav">
          <a href="#section1" onClick={() => history.push("/")}>
            事業内容
          </a>
          <a href="#section2" onClick={() => history.push("/")}>
            会社概要
          </a>
          <a href="#section3" onClick={() => history.push("/")}>
            アクセス
          </a>
          <Link to="/contact" href="#">
            <i class="fa-solid fa-envelope"></i>
            <span>お問い合わせ</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
