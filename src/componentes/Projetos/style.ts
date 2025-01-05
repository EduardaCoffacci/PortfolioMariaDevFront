import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin-top: -40px;
  padding: 50px 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-content: flex-start;
  height: 90%;
  overflow-y: auto;
  padding-right: 10px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
  }

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;
`;

export const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
  height: 480px;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  transition: transform 0.3s;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin: 10px 0;
`;

export const ProjectDescription = styled.p`
  font-size: 17px;
  color: #fff;
  text-align: justify;
  width: 100%;
  flex-grow: 1;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const IconLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #00aaff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: rgb(16, 112, 221);
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.5s ease, transform 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 8px; 
  }
`;
