import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-left">
            <p>エールスペック株式会社</p>
            <div>
              <p>
                <span>〒100-0005</span>
                <span>東京都千代田区丸の内 3-1-1 国際ビル8F</span>
              </p>
              <p>TEL: 03-6268-0255(代) / FAX: 03-6268-0256</p>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-right">
            <div>
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
            </div>
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
