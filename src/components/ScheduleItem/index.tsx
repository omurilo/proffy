import React from "react";

import { Container, Info, Label, Arrow, WeekDay, Time } from "./styles";

import arrowIcon from '../../assets/images/icons/back.svg';

interface ScheduleItemProps {
  disabled?: boolean;
}

const ScheduleItem: React.FC<ScheduleItemProps> = (props) => {
  return (
    <Container disabled={props.disabled}>
      <Info>
        <Label>Dia</Label>
        <WeekDay>Segunda</WeekDay>
      </Info>
      <Arrow src={arrowIcon} alt="icone de seta" />
      <Info>
        <Label>Horário</Label>
        <Time>8h - 18h</Time>
      </Info>
    </Container>
  );
};

export default ScheduleItem;
