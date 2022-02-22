import { useState, useEffect } from "react";
import styled from "styled-components";
import { API_URL } from "../../config";

export default function Videos() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/videos`);
      const data = await res.json();
      setApiData(data);
    };
    fetchData();
  }, []);
  return (
    <StyledVideos>
      <div className="videos">
        <div className="upper">
          <h2>Videos</h2>
        </div>
        <div className="items">
          {apiData &&
            apiData.map((item) => (
              <div className="item" key={item?._id}>
                <video src={API_URL + item?.video?.url} controls></video>
              </div>
            ))}
        </div>
      </div>
    </StyledVideos>
  );
}

const StyledVideos = styled.section`
  padding: 8rem 0;
  min-height: 650px;
  background: #111111;
  overflow: hidden;
  @media (max-width: 900px) {
    padding: 4rem 0;
  }
  .videos {
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
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
`;
