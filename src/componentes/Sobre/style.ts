import styled, { keyframes } from "styled-components";

const bubbleAnimation = keyframes`
  0% {
    transform: scale(0) translate(0, 0);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.5) translate(-10px, -10px);
    opacity: 0.5;
  }
  100% {
    transform: scale(0) translate(10px, 10px);
    opacity: 0;
  }
`;

export const Section = styled.section`
  width: 100vw;
  padding: 15vh 5vw;
  margin-top: -8vh;

  @media (max-width: 768px) {
    padding: 8vh 4vw;
  }
  
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const SobreMimWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  position: relative;

  img {
    border-radius: 50%;
    width: clamp(200px, 25vw, 320px);
    height: clamp(260px, 30vw, 400px);
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      filter 0.3s ease-in-out;
    border: 15px solid transparent;
    padding: 5px;
    background-image: linear-gradient(
      to right,
      rgb(161, 83, 224),
      rgb(153, 0, 255)
    );
    background-origin: border-box;
    background-clip: content-box;
    box-shadow: 0 15px 200px rgba(149, 12, 173, 0.2);
    filter: brightness(0.95);

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: transparent;
    z-index: 1;
    pointer-events: none;
    animation: ${bubbleAnimation} 4s ease-in-out infinite;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &::before {
    top: 50%;
    left: 50%;
    width: 15vw;
    height: 15vw;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }

  &::after {
    top: 50%;
    left: 50%;
    width: 20vw;
    height: 20vw;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
`;

export const RightSide = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
  }
`;

export const Title = styled.div`
  h1 {
    font-size: clamp(2.8rem, 5vw, 4.5rem);
    margin: 20px 0;
  }
  @media (max-width: 320px) {
    display:none;
  }
`;

export const Description = styled.p`
  font-size: clamp(1.6rem, 2vw, 2rem);
  max-width: 500px;
  line-height: 1.6;
  font-size: 17px;
  color: #fff;
  text-align: justify;
  width: 100%;
  flex-grow: 1;
  

  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 425px) {
   font-size:15px;
  }
`;

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--second);
  background: var(--primary);
  padding: clamp(8px, 2vw, 10px) clamp(12px, 4vw, 20px);
  border-radius: 10px;
  margin-top: 30px;
  font-size: clamp(1.6rem, 2vw, 2rem);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
  
`;
