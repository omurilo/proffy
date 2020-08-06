import React from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Card from "../../components/Card";

import proffysIcon from "../../assets/images/icons/smile.svg";

import { Container, Proffys, SearchForm, Main, Button } from "./styles";

const ClassesList: React.FC = () => {
  return (
    <Container>
      <Header topTitle="Estudar" title="Estes são os proffys disponíveis.">
        <Proffys>
          <img src={proffysIcon} alt="proffys cadastrados" />
          <span>Nós temos 34 professores</span>
        </Proffys>
        <SearchForm>
          <Input name="subject" label="Matéria" dimension={{ width: '100%' }} />
          <Input name="week_day" label="Dia da semana" dimension={{ width: 'calc(50% - 1.4rem)' }} />
          <Input name="time" type="time" label="Horário" dimension={{ width: 'calc(50% - 1.4rem)' }} />
          <Button
            to=""
            width="100%"
            height="5.6rem"
            style={{ alignSelf: "flex-end" }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Filtrar
          </Button>
        </SearchForm>
      </Header>
      <Main>
        <Card />
        <Card />
        <Card />
      </Main>
    </Container>
  );
};

export default ClassesList;
