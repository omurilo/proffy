import React, { useEffect, useState, useMemo } from "react";

import ScheduleItem, { ScheduleItemType } from "../ScheduleItem";

import api from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import * as Styled from "./styles";

export type ClassItem = {
  id: number;
  user_id: number;
  name: string;
  avatar: string;
  bio: string;
  subject: string;
  cost: number;
  whatsapp: number;
  schedules: ScheduleItemType[];
};

interface CardProps {
  classItem: ClassItem;
}

const Card: React.FC<CardProps> = ({ classItem }) => {
  const [schedules, setSchedules] = useState<ScheduleItemType[]>([]);
  const days: { [key: number]: string } = useMemo(
    () => ({
      1: "Segunda",
      2: "Terça",
      3: "Quarta",
      4: "Quinta",
      5: "Sexta",
    }),
    []
  );

  useEffect(() => {
    const arrayFilledOfDisabledSchedules: ScheduleItemType[] = [];
    Array(5)
      .fill(0)
      .map((item, index) => {
        const scheduleItem = classItem.schedules.find(
          (schedule: ScheduleItemType) => schedule.week_day === index + 1
        );
        if (scheduleItem) {
          arrayFilledOfDisabledSchedules[index] = {
            ...scheduleItem,
            week_day: days[scheduleItem.week_day as number],
            disabled: false,
          };
          return item;
        }

        arrayFilledOfDisabledSchedules[index] = {
          week_day: days[index + 1],
          from: 0,
          to: 0,
          disabled: true,
        };

        return item;
      });
    setSchedules(arrayFilledOfDisabledSchedules);
  }, []); //eslint-disable-line

  const handleSetNewSubscription = (user_id: number) => {
    api.post("subscriptions", {
      user_id,
    });
  };
  return (
    <Styled.Container>
      <Styled.Header>
        <img src={classItem.avatar} alt={`Proffy ${classItem.name}`} />
        <Styled.Teacher>
          <strong className="proffy">{classItem.name}</strong>
          <span className="class">{classItem.subject}</span>
        </Styled.Teacher>
      </Styled.Header>
      <Styled.Bio>{classItem.bio}</Styled.Bio>
      <Styled.Schedules>
        <Styled.HeaderSchedules>
          <span>Dia</span>
          <span>Horário</span>
        </Styled.HeaderSchedules>
        {schedules.map((schedule: ScheduleItemType) => (
          <ScheduleItem key={schedule.week_day} schedule={schedule} />
        ))}
      </Styled.Schedules>
      <Styled.Footer>
        <Styled.Cost>
          Preço/hora
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(classItem.cost)}
          </strong>
        </Styled.Cost>
        <Styled.Whatsapp
          to=""
          height="5.6rem"
          width="20rem"
          size="1.4rem"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              `https://wa.me/${classItem.whatsapp}?text=Olá, gostaria de saber mais detalhes sobre a aula de ${classItem.subject} oferecida no Proffy.`,
              "_blank"
            );
            handleSetNewSubscription(classItem.user_id);
          }}
        >
          <img src={whatsappIcon} alt="botão whatsapp" />
          Entrar em contato
        </Styled.Whatsapp>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Card;
