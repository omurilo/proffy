import React from "react";

import Header from "../../components/Header";
import rocketIcon from '../../assets/images/icons/rocket.svg';

import { Container } from "./styles";

const ClassForm: React.FC = () => {
  return (
    <Container>
      <Header
        title="Que incrível que você quer dar aulas."
        topTitle="Dar Aulas"
      >
        <div style={{ gridArea: 'children', display: 'flex' }}>
          <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
          <span>
            <img src={rocketIcon} alt="Foguete verde" /> 
            Preparare-se! vai ser o máximo.</span>
        </div>
      </Header>
    </Container>
  );
};

export default ClassForm;
