import React, { useEffect, useState } from "react";

import heartIcon from "../../assets/images/icons/purple-heart.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";

import * as Styled from "./styles";
import api from "../../services/api";

const Landing: React.FC = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get("subscriptions").then((response) => {
      setTotal(response.data.total);
    });
  }, []);
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderContent className="container">
          <Styled.LogoContainer>
            <Styled.Logo alt="Proffy" />
            <Styled.Title>Sua plaforma de estudos online.</Styled.Title>
          </Styled.LogoContainer>
          <Styled.Hero alt="Plataform de estudos" />
        </Styled.HeaderContent>
      </Styled.Header>
      <Styled.Footer className="container">
        <Styled.Message>
          Seja bem-vindo.
          <strong>O que deseja fazer?</strong>
        </Styled.Message>
        <Styled.ButtonsContainer>
          <Styled.Button
            background="primary-lighter"
            hover="primary-light"
            to="/study"
          >
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Styled.Button>
          <Styled.Button to="/give-class">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Styled.Button>
        </Styled.ButtonsContainer>
        <Styled.Totals>
          Total de {total} conexões já realizadas{" "}
          <img src={heartIcon} alt="Coração roxo" />
        </Styled.Totals>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Landing;
