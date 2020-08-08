import React from "react";

import ScheduleItem from "../ScheduleItem";

import * as Styled from "./styles";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const Card: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <img
          src="https://avatars0.githubusercontent.com/u/1813234?s=460&u=e09cce60e5de03355ecfae710128048a6f37ab4e&v=4"
          alt="Proffy + name"
          className="avatar"
        />
        <Styled.Teacher>
          <strong className="proffy" style={{ display: "block" }}>
            Murilo Henrique
          </strong>
          <span className="class">Química</span>
        </Styled.Teacher>
      </Styled.Header>
      <Styled.Bio>
        Apaixonado por Tecnologia e desenvolvimento web &lt;3.
        <br />
        <br />
        Amante do Javascript e no momento flertando com React.js, ReactNative e
        Node.js. Professor de Química quando sobre tempo (nunca sobra).
      </Styled.Bio>
      <Styled.Schedules>
        <ScheduleItem />
        <ScheduleItem disabled={true} />
        <ScheduleItem />
        <ScheduleItem />
        <ScheduleItem disabled={true} />
      </Styled.Schedules>
      <Styled.Footer>
        <Styled.Cost>
          Preço/hora
          <strong>R$20,00</strong>
        </Styled.Cost>
        <Styled.Whatsapp
          to=""
          height="5.6rem"
          width="20rem"
          size="1.4rem"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://wa.me/5562982082088?text=Olá", "_blank");
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
