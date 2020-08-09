import React from "react";

import * as Styled from "./styles";

import arrowIcon from "../../assets/images/icons/back.svg";

export type ScheduleItemType = {
  week_day: number | string;
  from: number;
  to: number;
  disabled?: boolean;
};

interface ScheduleItemProps {
  schedule: ScheduleItemType;
}

const ScheduleItem: React.FC<ScheduleItemProps> = (props) => {
  return (
    <Styled.Container disabled={props.schedule.disabled}>
      <Styled.Info>
        <Styled.Label>Dia</Styled.Label>
        <Styled.WeekDay>{props.schedule.week_day}</Styled.WeekDay>
      </Styled.Info>
      <Styled.Arrow src={arrowIcon} alt="icone de seta" />
      <Styled.Info>
        <Styled.Label>Horário</Styled.Label>
        <Styled.Time>
          {props.schedule.from
            ? `${props.schedule.from / 60}h - ${props.schedule.to / 60}h`
            : "-"}
        </Styled.Time>
      </Styled.Info>
    </Styled.Container>
  );
};

export default ScheduleItem;
