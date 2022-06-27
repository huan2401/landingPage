import React, { useState, useEffect } from "react";
import Logo from "../../../assets/logo.jpg";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";

function Header(props) {
  const history = useHistory();
  return (
    <div className="header" style={props.style}>
      <div className="header-wrapper">
        <Link
          to="/"
          className="header-logo"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <img src={Logo} alt="logo" />
        </Link>
        <label className="nav-responsive" htmlFor="toggleNav">
          <i class="fa-solid fa-bars"></i>
        </label>
        <input type="checkbox" id="toggleNav" />
        <nav className="header-nav">
          <a
            href="#section1"
            onClick={() => {
              document.getElementById("toggleNav").click();
              history.push("/");
            }}
          >
            事業内容
          </a>
          <a
            href="#section2"
            onClick={() => {
              document.getElementById("toggleNav").click();
              history.push("/");
            }}
          >
            会社概要
          </a>
          <a
            href="#section3"
            onClick={() => {
              document.getElementById("toggleNav").click();
              history.push("/");
            }}
          >
            アクセス
          </a>
          <Link
            to="/contact"
            href="#"
            onClick={() => document.getElementById("toggleNav").click()}
          >
            <i class="fa-solid fa-envelope"></i>
            <span>お問い合わせ</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
