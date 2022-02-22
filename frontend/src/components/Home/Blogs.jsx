import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bg from "../../assets/images/blogs.webp";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { API_URL } from "../../config";

export default function Blogs() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${API_URL}/blogs`);
      const data = await res.json();
      setApiData(data);
    };
    fetchData();
  }, []);

  return (
    <StyledBlogs>
      <div className="blogs">
        <div className="upper">
          <h2>Blogs</h2>
        </div>

        <div className="blog">
          {apiData &&
            apiData.map((item) => (
              <div className="blog__item" key={item?._id}>
                <div className="blog__item__img">
                  <img src={API_URL + item?.cover?.url} alt={item?.title} />
                </div>
                <div className="blog__item__content">
                  <p className="blog__item__content-date">
                    {item?.date} | {item?.tag}
                  </p>
                  <h3>{item?.title}</h3>
                  <p className="blog__item__content-preview">{item?.body}</p>
                  <div className="blog__item__content-links">
                    <Link to="/" className="blog__item__content-link">
                      READ MORE
                    </Link>
                    <FaFacebookF />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </StyledBlogs>
  );
}

const StyledBlogs = styled.section`
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
  .blogs {
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
  .blog {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.5rem;
    column-gap: 1.5rem;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    &__item {
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1rem 1rem 0;
      @media (max-width: 500px) {
        flex-direction: column;
      }
      &__img {
        flex: 1;
        background: #fff;
        overflow: hidden;
        clip-path: polygon(95% 0, 100% 10%, 100% 100%, 0 100%, 0 0);
        @media (max-width: 500px) {
          aspect-ratio: 16/9;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      &__content {
        flex: 1;
        @media (max-width: 500px) {
          padding: 0 0 0 1rem;
        }
        &-date {
          font-size: 0.7rem;
          font-family: "Graphik", sans-serif;
          font-weight: 400;
          margin-bottom: 0.5rem;
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 300;
        }
        &-preview {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-size: 0.9rem;
          font-family: "Graphik", sans-serif;
          line-height: 1.5;
          margin: 0.5rem 0;
          font-weight: 300;
        }
        &-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
          a {
            background: #da0606;
            color: #fff;
            font-family: "Graphik", sans-serif;
            border-radius: 0 0.5rem 0 0;
            padding: 0.5rem 1rem;
          }
        }
      }
    }
  }
`;
