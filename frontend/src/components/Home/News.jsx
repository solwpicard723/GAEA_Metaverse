import { useState, useEffect } from "react";
import styled from "styled-components";
import bg from "../../assets/images/news.webp";
import { API_URL } from "../../config";

export default function News() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/news-contents`);
      const data = await res.json();
      setApiData(data);
    };
    fetchData();
  }, []);

  const parseDateTime = (date) => {
    return new Date(Date.parse(date)).toLocaleString();
  };

  return (
    <StyledNews>
      <div className="container">
        <div className="upper">
          <h2>
            First-class News <br />
            help us to make higher quality products
          </h2>
          <p className="graphik">
            We will use our experience in the traditional game industry, with
            the great innovation of blockchain, to make world-class games and
            change the game industry.
          </p>
        </div>
        <div className="news">
          {apiData &&
            apiData.map((item) => (
              <div className="news-item" key={item?._id}>
                <div className="news-item-img">
                  <img src={API_URL + item?.cover?.url} alt={item?.title} />
                </div>
                <div className="news-item-content">
                  <p>{parseDateTime(item?.published_at)}</p>
                  <h3>{item?.title}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </StyledNews>
  );
}

const StyledNews = styled.section`
  padding: 8rem 0;
  min-height: 650px;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  .upper {
    h2 {
      font-size: 3.5rem;
      font-weight: 300;
    }
    p {
      margin-top: 1.5rem;
      font-weight: 300;
      line-height: 1.5;
      color: #a0a0a6;
      width: 100%;
      max-width: 600px;
    }
  }
  .news {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 4rem;
    column-gap: 1.5rem;
    margin-top: 4rem;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
    .news-item {
      &-img {
        background: #fff;
        aspect-ratio: 16/9;
        overflow: hidden;
        clip-path: polygon(90% 0, 100% 20%, 100% 100%, 0 100%, 0 0);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-content {
        p {
          font-size: 0.8rem;
          font-family: "Graphik", sans-serif;
          margin: 1rem 0 0.5rem 0;
        }
        h3 {
          font-size: 1.6rem;
          font-weight: 300;
        }
      }
    }
  }
`;
