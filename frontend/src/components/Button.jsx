import styled from "styled-components";

export default function Button({ type, children }) {
  return <StyledButton type={type ? type : "button"}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  display: inline-block;
  background: #ffffff;
  color: #0a0a0a;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0 0.5rem 0 0;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #f3d709;
  }
`;
