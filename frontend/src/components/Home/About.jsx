import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";
import bg from "../../assets/images/about.webp";
import calico from "../../assets/images/calico-guardian.png";

export default function About() {
  return (
    <StyledAbout>
      <div className="about">
        <div className="backdrop">
          <p className="cinzel">EVERYTHING</p>
          <p className="cinzel">IS FUN</p>
        </div>
        <h2>ABOUT THIS GAME</h2>
        <div className="list">
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              A vast galaxy with over 20 star systems and more than 100 space
              stations
            </p>
          </div>
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              GAEA SPACE is a Defi +NFT space strategy classic Multi-chain Game
            </p>
          </div>
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              Over 50 customizable spaceships and hundreds of different
              power-ups
            </p>
          </div>
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              A unique mixture of story-driven, mission-based and sandbox
              gameplay
            </p>
          </div>
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              Detailed 3D models, hi-res textures and breath-taking Special FX
            </p>
          </div>
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              3D sound, orchestral soundtrack and full voice-acting
            </p>
          </div>
          <div className="item">
            <GiCheckMark />
            <p className="graphik">
              Action Freeze™: Take screenshots from any perspective and share
              them on Facebook
            </p>
          </div>
        </div>
        <img className="side" src={calico} alt="Ship" />
      </div>
    </StyledAbout>
  );
}

const StyledAbout = styled.section`
  padding: 16rem 0;
  min-height: 650px;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 16rem 0 8rem;
  }
  .about {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    @media (max-width: 960px) {
      display: flex;
      flex-direction: column;
    }
    h2 {
      font-size: 4rem;
      color: #f3d709;
      position: relative;
      z-index: 2;
    }
    .list {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      .item {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
    .side {
      position: absolute;
      top: 50%;
      left: 45%;
      width: 50%;
      @media (max-width: 1024px) {
        left: 60%;
        width: 35%;
      }
      @media (max-width: 960px) {
        top: auto;
        left: auto;
        position: relative;
        width: 100%;
        margin-top: 4rem;
        align-self: center;
      }
    }
    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(10%, -70%);
      z-index: 1;
      color: rgba(255, 255, 255, 0.25);
      @media (max-width: 500px) {
        transform: translate(5%, -70%);
      }
      p {
        font-size: 3rem;
        font-style: italic;
        &:last-child {
          font-size: 6rem;
          line-height: 1;
        }
      }
    }
  }
`;
