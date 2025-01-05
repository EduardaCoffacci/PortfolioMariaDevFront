import styled from "styled-components";

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 10px 20px;
  z-index: 1000;
  height: 40px;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffffff;
    }
  }
`;