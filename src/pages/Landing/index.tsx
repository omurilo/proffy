import React from "react";

import heartIcon from "../../assets/images/icons/purple-heart.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";

import {
  Container,
  Header,
  HeaderContent,
  LogoContainer,
  Logo,
  Title,
  Hero,
  Footer,
  Message,
  ButtonsContainer,
  Button,
  Totals,
} from "./styles";

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent className="container">
          <LogoContainer>
            <Logo alt="Proffy" />
            <Title>Sua plaforma de estudos online.</Title>
          </LogoContainer>
          <Hero alt="Plataform de estudos" />
        </HeaderContent>
      </Header>
      <Footer className="container">
        <Message>
          Seja bem-vindo.
          <strong>O que deseja fazer?</strong>
        </Message>
        <ButtonsContainer>
          <Button background="primary-lighter" hover="primary-light" to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Button>
          <Button to="/give-class">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Button>
        </ButtonsContainer>
        <Totals>
          Total de 285 conexões já realizadas{" "}
          <img src={heartIcon} alt="Coração roxo" />
        </Totals>
      </Footer>
    </Container>
  );
};

export default Landing;
