import React from "react";
import Movies from "./Movies";
import * as S from "./Style";

export default class extends React.Component {
  render() {
    return (
      <S.Main>
        <S.Move>
          <Movies image="https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg" />
          <Movies image="https://lumiere-a.akamaihd.net/v1/images/poster_cf6525c0.png" />
          <Movies image="https://lumiere-a.akamaihd.net/v1/images/beta_epic_payoff_brazil_2a5f625f.jpeg" />
          <Movies image="https://lumiere-a.akamaihd.net/v1/images/image_425574a7.jpeg?region=0,0,540,810" />
          <Movies image="https://artgeist.com.br/wp-content/uploads/2018/05/irmao-urso.jpg" />
          <Movies image="https://apostiladecinema.com.br/wp-content/uploads/2021/06/luca-filme-pixar-animacao-disney-2021-critica-poster-scaled-e1629396654805.jpg" />
        </S.Move>
      </S.Main>
    );
  }
}