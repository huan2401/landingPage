import React, { useState, useEffect } from "react";
import "./Contact.scss";

const Contact = () => {
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-step">
          <div>
            <p
              onClick={() => setActiveStep(1)}
              className={activeStep === 1 ? "active" : ""}
            >
              Step 1
            </p>
            <p
              onClick={() => setActiveStep(2)}
              className={activeStep === 2 ? "active" : ""}
            >
              Step 2
            </p>
          </div>
          <p>
            当社への問い合わせは、こちらからお願いいたします。
            後日、弊社より折り返しご連絡いたします。
          </p>
        </div>
        <div className="contact-form">
          <table>
            <tbody>
                <tr>
                  <th>
                    <span>お問い合わせ 内容</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <textarea />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>お名前</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>フリガナ</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>メールアドレス</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>会社名</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>お電話番号</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>HPアドレス</span>
                    <span className="label">必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span>当サイトを 知ったきっかけ</span>
                    <span>必須</span>
                  </th>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="contact-submit">
          <div>
            <span>この内容で送信</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
