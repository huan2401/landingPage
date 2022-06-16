import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
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
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        borderBottom: '1px solid #000',
        zIndex: '100',
        width: '100%',
        padding: '0 20px',
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
      <div className="home-about">
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
      </div>
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
