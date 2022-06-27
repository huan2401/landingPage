import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-left">
            <p>TH-FAMILY 株式会社</p>
            <div>
              <p>
                <span>〒110-0005</span>
                <span>東京都台東区上野5-7-7公徳堂ビル5階501室</span>
              </p>
              <p>TEL: 03-5604-9180 / FAX: 03-5604-9181</p>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-right">
          <a
            href="#section1"
            onClick={() => {
              // document.getElementById("toggleNav").click();
              history.push("/");
            }}
          >
            事業内容
          </a>
          <a
            href="#section2"
            onClick={() => {
              // document.getElementById("toggleNav").click();
              history.push("/");
            }}
          >
            会社概要
          </a>
          <a
            href="#section3"
            onClick={() => {
              // document.getElementById("toggleNav").click();
              history.push("/");
            }}
          >
            アクセス
          </a>
            {/* <div>
              <p>企業情報</p>
              <ul>
                <li>企業理念</li>
                <li>会社概要</li>
                <li>アクセス</li>
              </ul>
            </div>
            <div>
              <p>サービス案内</p>
              <ul>
                <li>正社員雇用型人材サービス</li>
                <li>雇用転換サービス</li>
                <li>ビジネスマッチング事業</li>
              </ul>
            </div>
            <div>
              <p>企業情報</p>
              <ul>
                <li>企業理念</li>
                <li>会社概要</li>
                <li>アクセス</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="footer-copyright">
          <p>©2022 エールスペック</p>
          <p>
            個人情報保護方針個人情報の取り扱いについて反社会的勢力排除に関する誓約書
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
