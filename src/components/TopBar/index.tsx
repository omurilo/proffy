import React from "react";
import { useHistory } from "react-router-dom";

import backButtonIcon from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.svg";

import { Container, BackButton, Title, Logo } from "./styles";

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  const history = useHistory();

  return (
    <Container>
      <BackButton
        src={backButtonIcon}
        alt="Botão voltar"
        onClick={history.goBack}
      />
      <Title>{title}</Title>
      <Logo src={logo} alt="Proffy logo" />
    </Container>
  );
};

export default TopBar;
