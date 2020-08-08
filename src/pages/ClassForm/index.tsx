import React from "react";

import Header from "../../components/Header";
import rocketIcon from "../../assets/images/icons/rocket.svg";

import * as Styled from "./styles";

const ClassForm: React.FC = () => {
  return (
    <Styled.Container>
      <Header
        title="Que incrível que você quer dar aulas."
        topBarTitle="Dar Aulas"
      >
        <div style={{ gridArea: "children", display: "flex" }}>
          <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
          <span>
            <img src={rocketIcon} alt="Foguete verde" />
            Preparare-se! vai ser o máximo.
          </span>
        </div>
      </Header>
    </Styled.Container>
  );
};

export default ClassForm;
