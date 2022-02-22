import { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../../assets/images/partners.webp";
import { API_URL } from "../../config";

export default function Partners() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/partners`);
      const data = await res.json();
      setApiData(data);
    };
    fetchData();
  }, []);
  return (
    <StyledPartners>
      <div className="partners">
        <div className="upper">
          <h2>Partners & Investors</h2>
        </div>
        <div className="items">
          {apiData &&
            apiData.map((item) => (
              <div className="item" key={item?._id}>
                <img src={API_URL + item?.image?.url} alt=" " />
              </div>
            ))}
        </div>
      </div>
    </StyledPartners>
  );
}

const StyledPartners = styled.section`
  padding: 8rem 0;
  min-height: 650px;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 900px) {
    padding: 4rem 0;
  }
  .partners {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .upper {
    h2 {
      font-size: 3.5rem;
      font-weight: 300;
    }
  }
  .items {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .item {
      background: #fff;
      aspect-ratio: 16/9;
      overflow: hidden;
      clip-path: polygon(95% 0, 100% 10%, 100% 100%, 0 100%, 0 0);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;
