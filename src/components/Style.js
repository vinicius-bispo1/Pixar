import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;
// estilização da header
export const Header = styled.header`
  background-color: #1e1e1e;
  color: white;
`;

export const NavBox = styled.nav`
  ul {
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  li {
    width: 10%;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 30%;
    }
  }
`;

export const Fundo = styled.div`
  height: 60vh;
  width: 100%;
  background-image: url("https://static-assets.bamgrid.com/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  @media (max-width: 800px) {
    background-size: cover;
  }
`;
// main
export const Move = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 5em;
    width: 100%;
  }
  img {
    border: 3px solid black;
    width: 20vw;
    height: 50vh;
    border-radius: 20px;
    cursor: pointer;
    @media (max-width: 800px) {
      width: 50vw;
      height: 45vh;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 120vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    height: 300vh;
  }
`;
// footer
export const Footer = styled.div`
  background-color: #1e1e1e;
  color: white;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    p {
      width: 90%;
    }
  }
`;