import styled from "styled-components";
import bg from "../../assets/images/mid2.webp";
import map from "../../assets/images/map.png";

export default function Mid2() {
  return (
    <StyledMid2>
      <div className="mid2">
        <div className="left">
          <div className="upper">
            <h2>
              Real-world environment in <br />
              GAEA Space game
            </h2>
            <p className="graphik">
              GAEA Space offers a unique gaming experience by combining
              blockchain mechanics with traditional game mechanics. All assets
              are directly owned by players, and can be traded on the Trading
              market.
            </p>
          </div>
          <div className="lower">
            <div>
              <h3>NFT (Non-Fungiable Token)</h3>
              <p className="graphik">
                NFT is a multifunctional governance token, with applications
                both in-game and in directing real-world economic policy.
              </p>
            </div>
            <div>
              <h3>DarkMatter (DARK)</h3>
              <p className="graphik">
                DARK is the native in-game currency used to acquire building,
                ships, crew and equipment. It is also the predominant
                marketplace currency.
              </p>
            </div>
            <div>
              <h3>Trading market</h3>
              <p className="graphik">
                Players can sell their in-game assets (crystals, components,
                weapons and even planets) in the trading market, and all
                relevant transaction information is disclosed on the blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={map} alt="game map" />
        </div>
      </div>
    </StyledMid2>
  );
}

const StyledMid2 = styled.section`
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
  .mid2 {
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
    p {
      line-height: 1.5;
      width: 100%;
      max-width: 480px;
      color: #a0a0a6;
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
  .upper {
    margin-bottom: 2.5rem;
    h2 {
      font-size: 3.5rem;
      font-weight: 300;
    }
    p {
      margin-top: 1.5rem;
    }
  }
  .lower {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 300;
    }
    p {
      margin-top: 1rem;
    }
  }
`;
