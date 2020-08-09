import React, { useState, MouseEvent, useMemo } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Select, { Option } from "../../components/Select";
import Textarea from "../../components/Textarea";
import Input from "../../components/Input";

import rocketIcon from "../../assets/images/icons/rocket.svg";
import warningIcon from "../../assets/images/icons/warning.svg";

import * as Styled from "./styles";
import api from "../../services/api";
import { ValueType } from "react-select/src/types";

const ClassForm: React.FC = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState<Option>();
  const [cost, setCost] = useState("");
  const [week_day, setWeekDay] = useState<Option[]>([]);
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: "", from: "", to: "" },
  ]);

  const options: { [key: string]: Option } = useMemo(
    () => ({
      1: { value: "1", label: "Segunda" },
      2: { value: "2", label: "Terça" },
      3: { value: "3", label: "Quarta" },
      4: { value: "4", label: "Quinta" },
      5: { value: "5", label: "Sexta" },
    }),
    []
  );

  const history = useHistory();

  const handleAddScheduleItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (scheduleItems.length >= 5) return;

    setScheduleItems([...scheduleItems, { week_day: "", from: "", to: "" }]);
  };

  const handleSetScheduleItemValue = (
    index: number,
    field: string,
    value: string | Option
  ) => {
    if (field === "week_day") {
      const updatedWeekDay = [...week_day];
      updatedWeekDay[index] = value as Option;
      setWeekDay(updatedWeekDay);
    }
    const updatedScheduleItems = scheduleItems.map(
      (scheduleItem, scheduleItemIndex) => {
        if (index === scheduleItemIndex) {
          return {
            ...scheduleItems[index],
            [field]: (value as Option)?.value ?? value,
          };
        }

        return scheduleItem;
      }
    );
    setScheduleItems(updatedScheduleItems);
  };

  const handleCreateClass = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    api.post("classes", {
      name,
      avatar,
      whatsapp,
      bio,
      subject: subject?.value,
      cost,
      schedules: scheduleItems,
    });

    history.push("/");
  };

  return (
    <Styled.Container>
      <Header
        title="Que incrível que você quer dar aulas."
        topBarTitle="Dar Aulas"
      >
        <Styled.DescriptionContainer>
          <Styled.Description>
            O primeiro passo, é preencher esse formulário de inscrição.
          </Styled.Description>
          <Styled.DescriptionMotivation>
            <img src={rocketIcon} alt="Foguete verde" />
            <span>Preparare-se! vai ser o máximo.</span>
          </Styled.DescriptionMotivation>
        </Styled.DescriptionContainer>
      </Header>
      <Styled.Main>
        <Styled.Form>
          <Styled.GroupForm>
            <Styled.GroupFormLegend>Seus Dados</Styled.GroupFormLegend>
            <Input
              type="text"
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              marginTop={"0rem"}
            />
            <Input
              type="text"
              name="avatar"
              label="Link da sua foto"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              marginTop={"2.4rem"}
            />
            <Input
              type="text"
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              marginTop={"2.4rem"}
            />
            <Textarea
              name="bio"
              value={bio}
              label="Biografia"
              marginTop={"2.4rem"}
              onChange={(e) => setBio(e.target.value)}
            />
          </Styled.GroupForm>
          <Styled.GroupForm>
            <Styled.GroupFormLegend>Sobre a aula</Styled.GroupFormLegend>
            <Select
              name="subject"
              label="Matéria"
              placeholder="Selecione qual você quer ensinar"
              value={
                (subject?.value && subject) as ValueType<Option> | undefined
              }
              onChange={(value) => setSubject(value as Option)}
              marginTop={"0rem"}
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
            <Input
              type="text"
              name="cost"
              label="Custa da sua aula por hora"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              marginTop={"2.4rem"}
            />
          </Styled.GroupForm>
          <Styled.GroupForm>
            <Styled.GroupFormLegend>
              Horarios disponíveis{""}
              <Styled.Button to="" onClick={handleAddScheduleItem}>
                + Novo horário
              </Styled.Button>
            </Styled.GroupFormLegend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <Styled.ScheduleItem
                  key={String(Math.floor(Math.random() * Date.now()))}
                >
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    placeholder="Selecione"
                    marginTop={"0rem"}
                    value={
                      (week_day[index]?.value && week_day[index]) as
                        | ValueType<Option>
                        | undefined
                    }
                    dimension={{ width: "100%" }}
                    onChange={(selected) => {
                      handleSetScheduleItemValue(
                        index,
                        "week_day",
                        selected as Option
                      );
                    }}
                    options={Object.values(options)}
                  />
                  <Input
                    type="time"
                    name="from"
                    label="Das"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      handleSetScheduleItemValue(index, "from", e.target.value)
                    }
                    marginTop={"2.4rem"}
                    dimension={{ width: "calc(50% - 0.4rem)" }}
                  />
                  <Input
                    type="time"
                    name="to"
                    label="Até"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      handleSetScheduleItemValue(index, "to", e.target.value)
                    }
                    marginTop={"2.4rem"}
                    dimension={{ width: "calc(50% - 0.4rem)" }}
                  />
                </Styled.ScheduleItem>
              );
            })}
          </Styled.GroupForm>
        </Styled.Form>
        <Styled.Footer>
          <Styled.AlertUser>
            <img src={warningIcon} alt="Aviso importante!" />
            <span>
              Importante! <br />
              Preencha todos os dados
            </span>
          </Styled.AlertUser>
          <Styled.SaveClassButton to="" onClick={handleCreateClass}>
            Salvar Cadastro
          </Styled.SaveClassButton>
        </Styled.Footer>
      </Styled.Main>
    </Styled.Container>
  );
};

export default ClassForm;
