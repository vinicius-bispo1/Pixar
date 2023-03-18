import React from "react";
import * as S from "./Style";

export default class extends React.Component {
  render() {
    return (
      <S.Header>
        <S.NavBox>
          <ul>
            <li>Inicio</li>
            <li>Noticias</li>
            <li>Contato</li>
          </ul>
        </S.NavBox>
        <S.Fundo></S.Fundo>
      </S.Header>
    );
  }
}