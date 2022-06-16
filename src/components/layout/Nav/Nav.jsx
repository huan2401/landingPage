import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <nav>
        <label for="drop" class="toggle">
          &#8801;
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <label for="drop-1" class="toggle">
              Service
            </label>
            <a href="#">Service</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              Portfolio
            </label>
            <a href="#">Portfolio</a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a href="#">Portfolio 1</a>
              </li>
              <li>
                <a href="#">Portfolio 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#"><i className="fa-solid fa-envelope"></i> Submit</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
