import React from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import { Button } from "../../components/ButtonLink";

import proffysIcon from "../../assets/images/icons/smile.svg";

import { Container, Proffys, SearchForm } from "./styles";

const ClassesList: React.FC = () => {
  return (
    <Container>
      <Header topTitle="Estudar" title="Estes são os proffys disponíveis.">
        <Proffys>
          <img src={proffysIcon} alt="proffys cadastrados" />
          <span>Nós temos 34 professores</span>
        </Proffys>
        <SearchForm>
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input name="time" type="time" label="Horário" />
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
    </Container>
  );
};

export default ClassesList;
