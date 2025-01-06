import React from "react";
import {
  Banner,
  BannerContent,
  BannerLeft,
  BannerRight,
  BannerTitle,
  BannerSubtitle,
  BannerText,
  BannerButton,
  ScrollIconWrapper,
  ScrollIcon,
} from "../Home/style.ts";
import laptopGif from "../../images/laptop.gif"; // Verifique o caminho
import mouse from "../../images/mouse.png";

const Home = () => {
  return (
    <Banner id="banner">
      <BannerContent>
        <BannerLeft>
          <p>Seja bem-vindo(a) ao meu Portfólio, Sou a</p>
          <BannerTitle>Maria Eduarda</BannerTitle>
          <BannerSubtitle>Desenvolvedora</BannerSubtitle>
          <BannerText>Programadora web apaixonada por tecnologia ❤️</BannerText>
          <BannerButton to="/Sobre">Saiba mais</BannerButton>
        </BannerLeft>
        <BannerRight>
          <img src={laptopGif} alt="Laptop" />
        </BannerRight>
      </BannerContent>
      <ScrollIconWrapper>
        <ScrollIcon src={mouse} alt="Scroll Icon" />
      </ScrollIconWrapper>
    </Banner>
  );
};

export default Home;
