import React from "react";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Select from "../../components/Select";
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
          <Select
            name="subject"
            label="Matéria"
            placeholder="Selecione"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            placeholder="Selecione"
            dimension={{ width: "calc(50% - 0.4rem)" }}
            options={[
              { value: "1", label: "Segunda" },
              { value: "2", label: "Terça" },
              { value: "3", label: "Quarta" },
              { value: "4", label: "Quinta" },
              { value: "5", label: "Sexta" },
            ]}
          />
          <Input
            name="time"
            type="time"
            label="Horário"
            placeholder="Selecione"
            dimension={{ width: "calc(50% - 0.4rem)" }}
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
