import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import * as S from "./components/Style";

export default class extends React.Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
