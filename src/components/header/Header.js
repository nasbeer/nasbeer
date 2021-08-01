import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
// import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo/logo-01-old.png";
const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header" fixed="top">
            <NavLink to={link} tag={Link} className="logo">
              <img
                className="logo_header"
                src={logo}
                alt="Nasbeer Ahammed - Data Scientist &amp; Front end developer"
              />
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  am here for you :-)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  my career
                </NavLink>
              </li>
              <li></li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  what did i do ?
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.blue)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  connect me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
