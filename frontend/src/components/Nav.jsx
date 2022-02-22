import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { FaRegUser, FaChevronDown, FaBars } from "react-icons/fa";

export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <StyledNav>
      <div className="logo">
        <img src={logo} alt="gaea space" />
      </div>
      <div className="links">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/">News</Link>
        <Link to="/">Support</Link>
        <Link to="/">Store</Link>
        <Link to="/">Blogs</Link>
      </div>
      <div
        className="dropdown"
        style={{
          backgroundColor: isDropdownOpen ? "#25262c" : "transparent",
        }}
      >
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <FaChevronDown />
          <div>
            <FaRegUser className="pc" />
            <FaBars className="mobile" />
          </div>
        </button>
        {isDropdownOpen && (
          <div className="dropdown__content">
            <Link to="/">SIGN IN</Link>
            <Link to="/">CREATE ACCOUNT</Link>
            <div className="mobile">
              <Link to="/">HOME</Link>
              <Link to="/">NEWS</Link>
              <Link to="/">SUPPORT</Link>
              <Link to="/">STORE</Link>
              <Link to="/">BLOGS</Link>
            </div>
          </div>
        )}
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #0a0a0a;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  .pc {
    display: block;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
  .logo {
    padding: 0 0 0 1rem;
    display: flex;
    align-items: center;
    min-height: 100%;
    img {
      max-height: 40px;
    }
  }
  .links {
    @media (max-width: 768px) {
      display: none;
    }
    a {
      display: inline-block;
      padding: 1rem;
      font-weight: 400;
      text-transform: uppercase;
      transition: all 0.3s ease;
      &:hover {
        background-color: #25262c;
      }
    }
    .active {
      background-color: #25262c;
    }
  }
  .dropdown {
    min-height: 100%;
    position: relative;
    button {
      min-height: 100%;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      color: #656a6c;
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        background-color: #25262c;
      }
      @media (max-width: 768px) {
        padding: 1rem;
      }
      div {
        margin-left: 0.5rem;
        display: grid;
        place-items: center;
        background-color: #d4e1e8;
        width: 2.2rem;
        aspect-ratio: 1;
        border-radius: 50%;
        svg {
          font-size: 1.2rem;
        }
      }
    }
    &__content {
      background-color: #25262c;
      position: absolute;
      top: 100%;
      right: 0.5rem;
      border-radius: 0 0 0.5rem 0.5rem;
      a {
        padding: 1rem;
        display: block;
        font-size: 0.9rem;
        font-weight: 300;
        white-space: nowrap;
      }
    }
  }
`;
