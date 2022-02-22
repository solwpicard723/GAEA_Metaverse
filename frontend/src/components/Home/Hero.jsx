import styled from "styled-components";
import heroBg from "../../assets/images/hero.webp";
import Button from "../Button";
//Bottom images
import img1 from "../../assets/images/hero/1.png";
import img2 from "../../assets/images/hero/2.png";
import img3 from "../../assets/images/hero/3.png";
import img4 from "../../assets/images/hero/4.png";

export default function Hero() {
  return (
    <StyledHero>
      <img className="bg" src={heroBg} alt=" " />
      <div className="intro">
        <h1>
          <span>
            <b>HEAD OFF</b> TO
          </span>
          <span>ENDEAVOURS</span>
        </h1>
        <h3>OUR GALACTIC ADVENTURE AWAITS</h3>
        <div className="button-wrapper">
          <Button>PLAY NOW</Button>
        </div>
      </div>
      <div className="more">
        <div>
          <img src={img1} alt=" " />
        </div>
        <div>
          <img src={img2} alt=" " />
        </div>
        <div>
          <img src={img3} alt=" " />
        </div>
        <div>
          <img src={img4} alt=" " />
        </div>
      </div>
    </StyledHero>
  );
}

const StyledHero = styled.section`
  position: relative;
  min-height: 650px;
  height: 100vh;
  max-height: 1080px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  .intro {
    background: rgba(0, 0, 0, 0.75);
    padding: 4rem 2rem;
    @media (max-width: 500px) {
      width: 100%;
    }
    h1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border-left: 4px solid #ffffff;
      padding-left: 1rem;
      font-weight: 400;
      font-size: 6rem;
      height: 10.25rem;
      @media (max-width: 500px) {
        font-size: 4rem;
        height: 7.25rem;
      }
      span {
        font-family: inherit;
        display: inline-block;
        line-height: 1;
      }
      b {
        color: #f3d709;
        font-family: inherit;
        font-weight: 400;
        line-height: 1;
      }
    }
    h3 {
      margin-top: 1.2rem;
      border-left: 2px solid transparent;
      padding-left: 1rem;
      font-weight: 400;
      font-size: 3rem;
      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
    .button-wrapper {
      margin-top: 1rem;
      border-left: 2px solid transparent;
      padding-left: 0.5rem;
    }
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }
  .more {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
    padding: 1rem 2rem;
    img {
      width: 100%;
    }
    @media (max-width: 500px) {
      gap: 0.5rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
