import React from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Card from "../../components/Card";

import proffysIcon from "../../assets/images/icons/smile.svg";

import * as Styled from "./styles";

const ClassesList: React.FC = () => {
  return (
    <Styled.Container>
      <Header
        topBarTitle="Estudar"
        title="Estes são os proffys disponíveis."
        titleRight={
          <Styled.Proffys>
            <img src={proffysIcon} alt="proffys cadastrados" />
            <span>Nós temos 34 professores</span>
          </Styled.Proffys>
        }
      >
        <Styled.SearchForm>
          <Input name="subject" label="Matéria" dimension={{ width: "100%" }} />
          <Input
            name="week_day"
            label="Dia da semana"
            dimension={{ width: "calc(50% - 1.4rem)" }}
          />
          <Input
            name="time"
            type="time"
            label="Horário"
            dimension={{ width: "calc(50% - 1.4rem)" }}
          />
          <Styled.Button
            to=""
            width="100%"
            height="5.6rem"
            style={{ alignSelf: "flex-end" }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Filtrar
          </Styled.Button>
        </Styled.SearchForm>
      </Header>
      <Styled.Main>
        <Card />
        <Card />
        <Card />
      </Styled.Main>
    </Styled.Container>
  );
};

export default ClassesList;
