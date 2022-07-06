import React, { useEffect } from "react";
import ImageSection1 from "../../assets/image-section-14.png";
import "./Home.scss";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="home">
      <div className="home-banner"></div>
      <section id="section1">
        <div className="section1-wrapper">
          <div>
            <p>事業内容</p>
            <p>TH・Familyでは 人、企業を繋ぎ</p>
            <p>人が活きる社会を創り出す 様々なサービスに取り組んでいます。</p>
          </div>
          <div>
            <img src={ImageSection1} alt="#" />
          </div>
          <div>
            <p>
              当社のコンサルタントが紹介先企業の要望をしっかりヒアリングし、豊富な人材ポートフォリオの中から最適な人材を紹介します。紹介先企業と求職者、それぞれのニーズを理解しているからこその、高いマッチング精度が強みです。
            </p>
            <p>
              人には必ず能力があり、 発揮できる場が融合することで
              その力は無限になります。
            </p>
            <p>
              海外から経験豊富な技術者を日本企業に提供したいとの思いからTH・Family
              株式会社を設立しました。
            </p>
          </div>
          <div>
            <p>紹介先企業のメリット：</p>
            <p>
              採用にかかるコスト（時間・費用）やリスク（入社後の離職率）を抑えられます。一般求人では見つけづらい、専門性の高いスキルやポジションの人材も見つかりやすくなります。
            </p>
            <p>
              <span>主な大学</span>
              <span>
                ハノイ工業大学/ハノイ工科大学/メカトロニクス工学/タイグエン大学/サイゴン工科大学
              </span>
            </p>
            <p>
              <span>主な対応職種</span>
              <span>
                機械工学/メンテナンス/エンジン修/電気技術/食品工業/ホテル業界に精通した。
              </span>
            </p>
          </div>
        </div>
      </section>
      <section id="section2">
        <div className="section2-wrapper">
          <p>会社概要</p>
          <table>
            <tr>
              <td>会社名</td>
              <td>TH-FAMILY 株式会社</td>
            </tr>
            <tr>
              <td>代表者</td>
              <td>代表取締役　グエン　アン　トゥアン</td>
            </tr>

            <tr>
              <td>資本金</td>
              <td>５００万円</td>
            </tr>
            <tr>
              <td>従業員</td>
              <td>１１名 (正社員・外注・アルバイトを含む)</td>
            </tr>
            <tr>
              <td>業務内容</td>
              <td>人材紹介事業 生活指導業務</td>
            </tr>
            <tr>
              <td>許可番号</td>
              <td>
                有料職業紹介事業許可番号　13-ユ-311739 <br />
                登録支援機関登録番号　20登-003534
              </td>
            </tr>
            <tr>
              <td>社歴</td>
              <td>
                取引先企業　約５００　社 (2022年06月までの実績) <br />
                国内人材紹介　約1,000 名 (2022年06月までの実績) <br />
                海外人材紹介　約４５０ 名 (2022年06月までの実績) <br />
              </td>
            </tr>
            <tr>
              <td>関連会社</td>
              <td>
                DONG DU.CT <br />
                www.dongdugroup.vn
              </td>
            </tr>
          </table>
        </div>
      </section>
      <section id="section3">
        <div className="section3-wrapper">
          <p>アクセス</p>
          <table>
            <tr>
              <td>本社</td>
              <td></td>
            </tr>
            <tr>
              <td>所在地</td>
              <td>〒110-0005東京都台東区上野5-7-7公徳堂ビル5階501室</td>
            </tr>
            <tr>
              <td>支店</td>
              <td></td>
            </tr>
            <tr>
              <td>所在地</td>
              <td>
                〒532-0011大阪府 大阪市淀川区 西中島　6-9-20 新大阪GHビル305号
              </td>
            </tr>
            <tr>
              <td>海外教育センター</td>
              <td></td>
            </tr>
            <tr>
              <td>会社設立</td>
              <td>2017年05月 DONG DU.CT</td>
            </tr>
            <tr>
              <td>所在地</td>
              <td>ハノイ市ロンビエン区１２番１４４コリン</td>
            </tr>
          </table>
        </div>
      </section>
      <section id="section4">
        <div className="section4-wrapper">
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.9739201775564!2d139.77450142924405!3d35.70418464876178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea0dc6512f1%3A0x83499ad986e8dd4c!2z5YWs5b6z5aCC44OT44Or!5e0!3m2!1sen!2s!4v1656325578124!5m2!1sen!2s"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
