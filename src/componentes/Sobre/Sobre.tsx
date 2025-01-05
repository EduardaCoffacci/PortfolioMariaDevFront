import React from "react";
import {
  Section,
  Container,
  SobreMimWrapper,
  LeftSide,
  RightSide,
  Title,
  Description,
  Button,
} from "./style.ts";
import imgSobre from "../../images/imgsobre.png";
import CV from "../../Curriculum/MariaEduarda.pdf";

const SobreMim = () => {
  return (
    <Section id="sobre-mim">
      <Container>
        <SobreMimWrapper>
          <LeftSide data-anime="left">
            <img src={imgSobre} alt="Sobre" />
          </LeftSide>

          <RightSide data-anime="right">
            <Title>
              <h1>Sobre mim</h1>
            </Title>
            <Description>
              Olá meu nome é Maria Eduarda, tenho 30 anos, formada em Análise e
              Desenvolvimento de Sistemas. Apaixonada pelo mundo da
              tecnologia e pelo desenvolvimento, atualmente estou me dedicando
              para trabalhar com o desenvolvimento Web Frontend tenho
              conhecimento em HTML, CSS, JavaScript, Git/Github, React JS e
              Typescript, estou sempre em constante aprendizado e em busca por
              novos desafios. Sinta-se livre para me acompanhar e entrar em
              contato comigo! 🚀
            </Description>
            <Button href={CV} download target="_blank">
              Download CV
            </Button>
          </RightSide>
        </SobreMimWrapper>
      </Container>
    </Section>
  );
};

export default SobreMim;
