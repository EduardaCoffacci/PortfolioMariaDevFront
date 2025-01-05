import styled from "styled-components";


export const HeaderWrapper = styled.header`
  width: 100vw;
  min-height: 70px;
  padding-top: 20px;
  padding-left: 30px;
  background-color:#000;
`;

export const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Logo = styled.div`
  h3 {
    font-size: 2rem;
  }

  span {
    color: var(--terciary);
  }
`;


interface MenuProps {
  isMenuVisible: boolean;
}



export const Menu = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  nav {
    ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin: 0 15px;

        a {
          text-decoration: none;
          color: var(--second);
          font-size: 1.6rem;
          font-weight: 500;
          transition: color 0.2s ease-in-out;

          &:hover {
            color: var(--terciary);
          }
        }
      }

      @media (max-width: 1200px) {
        flex-direction: column;
        position: absolute;
        top: 185%; 
        right: 0;
        width: 200px;  
        background-color: var(--bg-primary);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        display: ${({ isMenuVisible }) => (isMenuVisible ? "flex" : "none")};

        li {
          margin: 10px 0;
          width: 100%;

          a {
            display: block;
            text-align: center;
            font-size: 1.8rem;
            padding: 10px 0;
          }
        }
      }
    }
  }
`;


export const MenuMobile = styled.div`
  display: none;
  width: 30px;
  margin-right: 20px;
 

  .mm_line {
    height: 3px;
    background-color: var(--terciary);
    margin: 3px 0;
  }


  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer; 
  }
`;
