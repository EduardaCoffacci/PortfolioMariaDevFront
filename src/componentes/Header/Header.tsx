import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  HeaderWrapper,
  Container,
  Logo,
  Menu,
  MenuMobile,
} from "../Header/style.ts";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setIsMenuVisible(false); // Fecha o menu ao clicar em um item
  };

  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <h3>
            MariaD<span>e</span>v.
          </h3>
        </Logo>

        <Menu isMenuVisible={isMenuVisible}>
          <nav>
            <MenuMobile aria-label="Menu Mobile" onClick={toggleMenu}>
              <div className="mm_line"></div>
              <div className="mm_line"></div>
              <div className="mm_line"></div>
            </MenuMobile>

            <ul className="lista">
              <li className="item">
                <Link to="/" className="active" onClick={closeMenu}>
                  Início
                </Link>
              </li>
              <li className="item">
                <Link to="/sobre" onClick={closeMenu}>
                  Sobre
                </Link>
              </li>
              <li className="item">
                <Link to="/projetos" onClick={closeMenu}>
                  Projetos
                </Link>
              </li>
              <li className="item">
                <a
                  href="https://www.github.com/EduardaCoffacci"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                  onClick={closeMenu}
                >
                  <FaGithub size={30} />
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.linkedin.com/in/maria-eduarda-coffacci-3b0205a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={closeMenu}
                >
                  <FaLinkedin size={30} />
                </a>
              </li>
            </ul>
          </nav>
        </Menu>
      </Container>
    </HeaderWrapper>
  );
};
