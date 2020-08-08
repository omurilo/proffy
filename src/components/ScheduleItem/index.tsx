import React from "react";

import * as Styled from "./styles";

import arrowIcon from "../../assets/images/icons/back.svg";

interface ScheduleItemProps {
  disabled?: boolean;
}

const ScheduleItem: React.FC<ScheduleItemProps> = (props) => {
  return (
    <Styled.Container disabled={props.disabled}>
      <Styled.Info>
        <Styled.Label>Dia</Styled.Label>
        <Styled.WeekDay>Segunda</Styled.WeekDay>
      </Styled.Info>
      <Styled.Arrow src={arrowIcon} alt="icone de seta" />
      <Styled.Info>
        <Styled.Label>Horário</Styled.Label>
        <Styled.Time>8h - 18h</Styled.Time>
      </Styled.Info>
    </Styled.Container>
  );
};

export default ScheduleItem;
