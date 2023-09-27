import React from "react";
import "./Footer.css";
import logoImg from "../Home/Images/Credbevy Logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-1-container">
        <div className="footer__wrapper">
          <div className="footer-1">
            <div className="footer-1-content footer__links-mobile">
              <div className="ft-logo">
                <Link to="/">
                  <img src={logoImg} alt="logo-img"></img>
                </Link>
              </div>
              <div className="products">
                <div className="footer__link-head">
                  <h4 className="head">Products</h4>
                  <div className="footer__arrowdown">
                    <i className="bx bx-chevron-down "></i>
                  </div>
                </div>
                <h5 className="footer__links">Features</h5>
                <Link
                  to="/partners-integrations"
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="footer__links">Integrations</h5>
                </Link>
                <h5 className="footer__links">Support</h5>
                <h5 className="footer__links">Why CredBevy</h5>
              </div>
              <div className="resources">
                <div className="footer__link-head">
                  <h4>Resources </h4>
                  <div className="footer__arrowdown">
                    <i className="bx bx-chevron-down "></i>
                  </div>
                </div>

                <h5 className="footer__links">Guides</h5>
                <Link to="/calculator" style={{ textDecoration: "none" }}>
                  <h5 className="footer__links">EMI Calculator</h5>
                </Link>

                <h5 className="footer__links">Blog</h5>
                <h5 className="footer__links">Security</h5>
              </div>
              <div className="footer__company">
                <div className="footer__link-head">
                  <h4>Company</h4>
                  <div className="footer__arrowdown">
                    <i className="bx bx-chevron-down"></i>
                  </div>
                </div>
                <Link to="/about-us" style={{ textDecoration: "none" }}>
                  <h5 className="footer__links">About</h5>
                </Link>
                <Link to="/contact-us" style={{ textDecoration: "none" }}>
                  <h5 className="footer__links">Contact</h5>
                </Link>
                <Link to="/news" style={{ textDecoration: "none" }}>
                  <h5 className="footer__links">Media</h5>
                </Link>

                <Link to="/lending-partners" style={{ textDecoration: "none" }}>
                  <h5 className="footer__links">Partners</h5>
                </Link>
                <h5 className="footer__links">Team</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider">
        <div className="line"></div>
      </div>
      <div className="footer2">
        <div className="footer2__wrapper">
          <div className="footer2-text">
            <div className="all_right">2023 CredBevy. All right reserved.</div>

            <div className="footer2-text2">
              <div className="under_line">Privacy</div>
              <Link to="/terms&conditions" style={{ textDecoration: "none" }}>
                <div className="under_line">Terms of Service</div>
              </Link>
              <div className="under_line">Cookies Settings</div>
            </div>
          </div>

          <div className="footer-icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="foot-note">
        <div className="foot-note__wrapper">
          CredBevy and featured clients are financial technology companies and
          not a bank. Banking services are provided by Credbevy's partner banks
          who are Member FDIC.
        </div>
      </div>
    </div>
  );
}

export default Footer;
