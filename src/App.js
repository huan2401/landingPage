import React, { useState, useEffect } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
  const [scrollPage, setScrollPage] = useState(0);
  const [styleHeader, setStyleHeader] = useState({});
  useEffect(() => {
    const eventScroll = window.addEventListener("scroll", () => {
      setScrollPage(window.scrollY);
    });
    if (scrollPage > 150) {
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
    <div className="app">
      <div className="app-content">
        <Router>
          <Header style={styleHeader} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
        {scrollPage > 150 && (
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

      </div>
    </div>
  );
}

export default App;
