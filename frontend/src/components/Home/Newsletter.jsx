import styled from "styled-components";
import bg from "../../assets/images/newsletter.jpg";
import Button from "../Button";

export default function Newsletter() {
  return (
    <StyledNewsletter>
      <div className="newsletter">
        <div className="left">
          <h2>NEWSLETTER</h2>
          <p className="graphik">
            Sign up to receive the latest news, community exclusive content and
            latest game trailers from Deep Silver
          </p>
        </div>
        <div className="right">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="email" placeholder="Email*" required />
            <Button type="submit">SUBSCRIBE</Button>
          </form>
        </div>
      </div>
    </StyledNewsletter>
  );
}

const StyledNewsletter = styled.section`
  padding: 8rem 0;
  background: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
  .newsletter {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .left {
    flex: 1;
    h2 {
      font-size: 3.5rem;
      font-weight: 300;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    P {
      line-height: 1.5;
      margin-top: 0.5rem;
      color: #a0a0a6;
      font-weight: 300;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }
  .right {
    flex: 1;
    @media (max-width: 500px) {
      width: 100%;
    }
    form {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      @media (max-width: 500px) {
        flex-direction: column;
      }
      input {
        width: 100%;
        padding: 0.8rem 1.2rem;
        background: #3b3b3b;
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        &::placeholder {
          color: #fff;
        }
      }
      button {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
