import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import ImageSection1 from "../../assets/image-section-14.png";
import "./Home.scss";

function Home() {
  const [scrollPage, setScrollPage] = useState(0);
  const [styleHeader, setStyleHeader] = useState({});
  useEffect(() => {
    const eventScroll = window.addEventListener("scroll", () => {
      setScrollPage(window.scrollY);
    });
    if (scrollPage > 300) {
      setStyleHeader({
        position: "fixed",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#fff",
        borderBottom: "1px solid #000",
        zIndex: "100",
        width: "100%",
        padding: "0 20px",
      });
    } else {
      setStyleHeader({});
    }
    return () => window.removeEventListener("scroll", eventScroll);
  }, [scrollPage]);
  return (
    <div className="home">
      <Header style={styleHeader} />
      <div className="home-banner"></div>
      <section id="section1">
        <div className="section1-wrapper">
          <div>
            <p>事業内容</p>
            <p>TH・Familyでは　人、企業を繋ぎ</p>
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
              <span style={{ color: "red" }}>主な大学</span>
              <span>
                ハノイ工業大学/ハノイ工科大学/メカトロニクス工学/タイグエン大学/サイゴン工科大学
              </span>
            </p>
            <p>
              <span style={{ color: "red" }}>主な対応職種</span>
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
              <td>１１名（正社員・外注・アルバイトを含む</td>
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
      {/* <div className="home-about">
        <div className="home-about-wrapper">
          <div className="home-about-img">
            <img
              src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/staffing-service/staffing-service_02.png"
              alt="#"
            />
          </div>
          <div className="home-about-content">
            <p>Giới thiệu nguồn nhân lực tốt nhất đáp ứng nhu cầu của bạn</p>
            <p>
              Từ những sinh viên mới ra trường đến những lời giới thiệu về nhân
              sự cấp điều hành, cũng như những lời giới thiệu của các giám đốc
              bên ngoài, kiểm toán viên của công ty và cố vấn cần thiết để đáp
              ứng Quy tắc quản trị công ty, chúng tôi sẽ phản hồi để giải quyết
              vấn đề của công ty bạn.
            </p>
          </div>
        </div>
      </div>
      <div className="home-recruitment">
        <div className="home-recruitment-wrapper">
          <p className="home-recruitment-title">Recruitment</p>
          <p className="home-recruitment-desc">
            From new graduates to middle management (MGR, general manager),
            executives (executive) We will provide the best coordination
            according to your company's needs and support the solution of
            personnel strategy issues.
          </p>
          <div className="home-recruitment-img">
            <div className="home-recruitment-img-wrapper">
              <img
                src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/staffing-service/staffing-service_03.jpg"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-sideBusiness ">
        <div className="home-sideBusiness-wrapper">
          <p className="home-sideBusiness-title">Recruitment</p>
          <p className="home-sideBusiness-desc">
            From new graduates to middle management (MGR, general manager),
            executives (executive) We will provide the best coordination
            according to your company's needs and support the solution of
            personnel strategy issues.
          </p>
          <div className="home-sideBusiness-img">
            <div className="home-sideBusiness-img-wrapper">
              <img
                src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/staffing-service/staffing-service_04.jpg"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-info">
        <div className="home-info-wrapper">
          <div>
            <p>Test</p>
            <div className="home-info-overlay"></div>
            <img
              src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/link-fulltime-employment-type-hr-service.jpg"
              alt="#"
            />
          </div>
          <div>
            <p>Test</p>
            <div className="home-info-overlay"></div>
            <img
              src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/link-fulltime-employment-type-hr-service.jpg"
              alt="#"
            />
          </div>
          <div>
            <p>Test</p>
            <div className="home-info-overlay"></div>
            <img
              src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/link-fulltime-employment-type-hr-service.jpg"
              alt="#"
            />
          </div>
          <div>
            <p>Test</p>
            <div className="home-info-overlay"></div>
            <img
              src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/service/link-fulltime-employment-type-hr-service.jpg"
              alt="#"
            />
          </div>
        </div>
      </div>
      <div className="home-contact">
        <div className="home-contact-wrapper">
          <div className="home-contact-title">
            <p>
              <span>Contact</span>
              <span>お問い合わせ</span>
            </p>
          </div>
          <div className="home-contact-content">
            <div className="home-contact-content-left">
              <div className="home-contact-img">
                <img
                  src="https://www.yellspec.co.jp/wp-content/themes/yellspec/img/common/contact.png"
                  alt="#"
                />
              </div>
            </div>
            <div className="home-contact-content-right">
              <div>
                <p>お問い合わせ・ご相談はこちらから</p>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <span>お問い合わせ</span>
                </div>
              </div>
              <div>
                <p>採用選考をご希望の方はこちら</p>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <span>応募する</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {scrollPage > 300 && (
        <div
          className="scrollTop"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <p>Top</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Home;
