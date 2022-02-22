import styled from "styled-components";
import bg from "../../assets/images/mid1.webp";
import darkmatter from "../../assets/images/darkmatter.png";

export default function Mid1() {
  return (
    <StyledMid1>
      <div className="mid1">
        <div className="left">
          <div className="quote">
            <h2>
              So long as a glimmer of hope exists, we should never give up. On a
              finite world a cosmic perspective isn't a luxury, it's a
              necessity.
            </h2>
            <h3>——Murmurs of Earth </h3>
          </div>
          <p className="graphik">
            GAEA Space is a Simulation Game based on Defi +NFT. It's inspired by
            traditional games like Minecraft, EVE, Roblox, etc. Our goal is to
            provide players around the world with an ever-expanding METAVERSE
            product that integrates multiple gaming elements such as simulation
            operation, starship battle and planet collection.
          </p>
        </div>
        <div className="right">
          <img src={darkmatter} alt="another ship" />
        </div>
      </div>
    </StyledMid1>
  );
}

const StyledMid1 = styled.section`
  padding: 16rem 0;
  min-height: 650px;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 8rem 0;
  }
  .mid1 {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .left {
      flex: 1;
    }
    .right {
      @media (max-width: 768px) {
        margin-top: 4rem;
      }
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img {
        width: 100%;
      }
    }
    .quote {
      h2 {
        font-size: 3.5rem;
        font-weight: 300;
      }
      h3 {
        font-weight: 300;
        font-size: 3rem;
        color: #f3d709;
        text-align: right;
        margin-top: 1rem;
      }
    }
    p {
      margin-top: 2rem;
      line-height: 1.5;
      width: 100%;
      max-width: 480px;
      color: #a0a0a6;
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
`;
