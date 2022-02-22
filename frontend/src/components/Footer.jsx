import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-top">
          <div className="info">
            <img src={logo} alt="GAEA SPACE" />
            <p className="graphik">
              GAEA Space offers a unique gaming experience by combining
              blockchain mechanics with traditional game mechanics. All assets
              are directly owned by players, and can be traded on the Trading
              market.
            </p>
          </div>
          <div className="links">
            <div className="links-col">
              <Link to="/">Home</Link>
              <Link to="/">Contact</Link>
              <Link to="/">Pricing</Link>
              <Link to="/">Help</Link>
              <Link to="/">Pricing</Link>
            </div>
            <div className="links-col">
              <Link to="/">Jobs</Link>
              <Link to="/">Videos</Link>
            </div>
          </div>
          <div className="contact">
            <address>
              GAEA SPACE <br />
              10565 N. 114th Street, Suite 107 <br />
              Scottsdale, AZ 85259
              <br />
              Phone: <a href="tel:+(877) 638-7487">(877) 638-7487</a>
            </address>
            <div className="socials">
              <a href="/">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaYoutube />
              </a>
              <a href="/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; GAEA SPACE ALL RIGHTS RESERVED</p>
          <div>
            <Link to="/">Terms</Link>
            <Link to="/">Privacy</Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 4rem 0 0;
  .footer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    &-top {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 0 0 4rem;
      @media (max-width: 768px) {
        flex-direction: column;
      }
      img {
        max-height: 40px;
      }
      p {
        margin-top: 1rem;
        line-height: 1.5;
        width: 100%;
        max-width: 480px;
        color: #a0a0a6;
      }
    }
    &-bottom {
      background: #000000;
      padding: 2rem 0;
      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        @media (max-width: 500px) {
          gap: 1rem;
          align-items: flex-start;
          flex-direction: column;
        }
        p,
        a {
          color: #a0a0a6;
          font-size: 0.9rem;
          line-height: 1.5;
          font-family: "Graphik", sans-serif;
        }
        div {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
      }
    }
  }
  .info {
    flex: 2;
  }
  .links {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
    .links-col {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        color: #a0a0a6;
        font-size: 0.9rem;
      }
    }
  }
  .contact {
    flex: 1;
    @media (max-width: 768px) {
      margin-top: 2rem;
    }
    address {
      font-style: normal;
      line-height: 1.8;
      color: #a0a0a6;
      text-align: center;
      font-size: 0.9rem;
      @media (max-width: 768px) {
        text-align: left;
      }
    }
  }
  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
    @media (max-width: 768px) {
      justify-content: flex-start;
    }
    a {
      font-size: 1.2rem;
      color: #a0a0a6;
    }
  }
`;
