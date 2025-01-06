import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";


const bye = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(40deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(40deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;


export const Banner = styled.section`
  width: 100vw;
  height: 100vh;
`;


export const BannerContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding:100px ;
  }
`;


export const BannerLeft = styled.div`
  flex: 1;
  position: relative;


  p{
    font-size:2rem;
  }
  @media (max-width: 768px) {
    text-align: center; 
   
  }
`;


export const FloatingComputer = styled.img`
  position: absolute;
  top: -50px;
  left: 20px;
  width: 300px;
  height: auto;

  @media (max-width: 768px) {
    display: none; 
    flex-direction: column
  }
`;


export const BannerTitle = styled.h1`
  font-size: 7.5rem;
  margin: 10px 0;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 4rem; 
  }

  @media (max-width: 480px) {
    font-size: 3rem; 
  }
`;


export const BannerSubtitle = styled.h2`
  text-transform: uppercase;
  margin: 20px 0;
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 2.2rem; 
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; 
  }
`;


export const BannerText = styled.p`
  font-size: 2.5rem;
  max-width: 550px;
  line-height: 1.5;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: 100%; 
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;


export const BannerButton = styled(Link)`
  padding: 15px 30px;
  border-radius: 10px;
  display: inline-block;
  color: var(--second);
  background: var(--primary);
  font-size: 2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  margin-top: 30px;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 12px 24px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 10px 20px;
    margin-top: 20px;
  }
`;

export const ScrollIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -190px;

  @media (max-width: 768px) {
    margin-top: -100px;
  }
`;


export const ScrollIcon = styled.img`
  width: 40px;
  height: 40px;
  animation: ${bye} 3s ease-in 1s infinite reverse both;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;
export const BannerRight = styled.div`
  img {
    width: 400px;
    height: auto;
  }

  @media (max-width: 768px) {
    display: none;
  }
  
`;
