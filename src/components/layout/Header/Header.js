import React from "react";
import "./Header.scss";

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
        <nav className="header-nav">
          <a href="#section1">事業内容</a>
          <a href="#section2">会社概要</a>
          <a href="#section3">アクセス</a>
          <a href="#">
            <i class="fa-solid fa-envelope"></i>
            <span>お問い合わせ</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
