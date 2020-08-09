import React, { useState, MouseEvent, ChangeEvent, useRef } from "react";
import { ValueType } from "react-select/src/types";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Select, { Option } from "../../components/Select";
import Card, { ClassItem } from "../../components/Card";

import api from "../../services/api";

import proffysIcon from "../../assets/images/icons/smile.svg";

import * as Styled from "./styles";

const ClassesList: React.FC = () => {
  const [subject, setSubject] = useState<Option>();
  const [week_day, setWeekDay] = useState<Option>();
  const [time, setTime] = useState("");
  const [classes, setClasses] = useState<ClassItem[]>();

  const mainRef = useRef<HTMLDivElement>(null);

  const handleGetFilteredClasses = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { data } = await api.get("classes", {
      params: {
        subject: (subject as Option).value,
        week_day: (week_day as Option).value,
        time,
      },
    });

    setClasses(data);
    window.scrollTo({
      left: 0,
      top: mainRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  const handleSetFilterTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleSetFilterWeekDay = (selected: ValueType<Option>) => {
    setWeekDay(selected as Option);
  };

  const handleSelectFilterSubject = (selected: ValueType<Option>) => {
    setSubject(selected as Option);
  };

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
            primary={true}
            value={(subject?.value && subject) as ValueType<Option> | undefined}
            onChange={handleSelectFilterSubject}
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
            primary={true}
            value={
              (week_day?.value && week_day) as ValueType<Option> | undefined
            }
            onChange={handleSetFilterWeekDay}
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
            primary={true}
            label="Horário"
            value={time}
            onChange={handleSetFilterTime}
            placeholder="Selecione"
            dimension={{ width: "calc(50% - 0.4rem)" }}
          />
          <Styled.Button
            to=""
            width="100%"
            height="5.6rem"
            style={{ alignSelf: "flex-end" }}
            onClick={handleGetFilteredClasses}
          >
            Filtrar
          </Styled.Button>
        </Styled.SearchForm>
      </Header>
      <Styled.Main ref={mainRef}>
        {classes?.map((classItem) => <Card classItem={classItem} />) ?? (
          <Styled.Fallback>
            Nenhum professor encontrado com sua pesquisa.
          </Styled.Fallback>
        )}
      </Styled.Main>
    </Styled.Container>
  );
};

export default ClassesList;
