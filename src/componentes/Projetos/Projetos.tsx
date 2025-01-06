import project1Image from "../../images/imgfood.png";
import project2Image from "../../images/imgmarmoraria.png";
import project3Image from "../../images/portfolio.png";
import project4Image from "../../images/imgawax.png";
import project5Image from "../../images/imgstarbucks.png";
import project6Image from "../../images/bikecraft.png";
import React from "react";
import {
  Section,
  Container,
  Card,
  ProjectImage,
  ProjectDescription,
  Title,
  LinksContainer,
  Button,
} from "../Projetos/style.ts";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const projects = [
  {
    id: 1,
    image: project1Image,
    title: "Foodie",
    description:
      "O projeto Restaurante Landing Page é uma aplicação responsiva criada com React e Vite, Material-UI para estilização moderna, React Icons para ícones personalizados e React Scroll para navegação suave. Ele oferece uma interface atraente e funcional, ideal para apresentar um restaurante de forma profissional.",
    link: "https://foodie-restaurante.netlify.app/",
    repo: "https://github.com/EduardaCoffacci/Restaurant-Landing-Page",
  },
  {
    id: 2,
    image: project2Image,
    title: "GNTMarmoraria",
    description:
      "A página GNT Marmoraria serve como um portfólio online para a empresa, apresentando seus serviços e produtos de forma profissional. O uso de HTML e CSS/SCSS garante uma estrutura sólida e um design moderno, enquanto o JavaScript adiciona interatividade, melhorando a experiência do usuário. O design responsivo assegura que a página seja acessível e funcional em diversos dispositivos.",
    link: "https://gntmarmoraria.netlify.app/",
    repo: "https://github.com/EduardaCoffacci/GNTMarmoraria",
  },
  {
    id: 3,
    image: project3Image,
    title: "Portfólio       ",
    description:
      "Este é o meu projeto de portfólio, onde apresento minhas habilidades e trabalhos.Utilizei React para construir os componentes de forma dinâmica, React Router para o gerenciamento das rotas, TypeScript para garantir uma maior segurança no código e Styled-Components para a estilização. Meu objetivo foi criar um design moderno, responsivo e intuitivo, que reflita meu estilo e profissionalismo como desenvolvedora.",
    link: "",
    repo: "https://github.com/EduardaCoffacci/PortfolioMariaDevFront",
  },
  {
    id: 4,
    image: project4Image,
    title: "Awax",
    description:
      "A landing page Awax é uma interface web projetada para apresentar os serviços de agências de comunicação visual, marketing e fotografia. Construída com HTML e CSS, a página oferece uma estrutura organizada e estilização. O design responsivo garante acessibilidade em diversos dispositivos, proporcionando uma experiência de usuário consistente.",
    link: "https://eduardacoffacci.github.io/Awax/",
    repo: "https://github.com/EduardaCoffacci/Awax",
  },
  {
    id: 5,
    image: project5Image,
    title: "Starbucks",
    description:
      "O projeto Starbucks Landing Page é uma página da web responsiva projetada como um mock-up para a marca Starbucks. Ele se concentra em mostrar as ofertas e a identidade visual da marca. A página é construída com HTML , CSS e JavaScript para criar uma experiência de usuário envolvente e acessível.",
    link: "https://eduardacoffacci.github.io/Starbucks/",
    repo: "https://github.com/EduardaCoffacci/Starbucks",
  },
  {
    id: 6,
    image: project6Image,
    title: "Bikecraft",
    description:
      "A Bikcraft Landing Page é um projeto de web design responsivo criado para mostrar uma loja de bicicletas fictícia. Ele utiliza HTML , CSS e JavaScript para criar uma interface limpa e moderna com navegação suave e exibições de produtos. O design é otimizado para todos os dispositivos, garantindo uma experiência de usuário e acessibilidade.",
    link: "https://eduardacoffacci.github.io/bikcraft/",
    repo: "https://github.com/EduardaCoffacci/bikcraft",
  },
];

const Projetos = () => {
  return (
    <Section>
      <Container>
        {projects.map((project) => (
          <Card key={project.id}>
            <ProjectImage
              src={project.image}
              alt={project.title}
              onClick={() => window.open(project.link, "_blank")}
            />
            <Title>{project.title}</Title>
            <ProjectDescription>{project.description}</ProjectDescription>

            <LinksContainer>
              <Button
                as="a"
                href={project.link}
                target="_blank"
                title="Ver Projeto"
              >
                <FaExternalLinkAlt /> Ver Projeto
              </Button>
              <Button
                as="a"
                href={project.repo}
                target="_blank"
                title="Ver Repositório"
              >
                <FaGithub /> Ver Repositório
              </Button>
            </LinksContainer>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Projetos;
