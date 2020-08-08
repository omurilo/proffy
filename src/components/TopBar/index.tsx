import React from "react";
import { useHistory } from "react-router-dom";

import backButtonIcon from "../../assets/images/icons/back.svg";
import logo from "../../assets/images/logo.svg";

import * as Styled from "./styles";

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({ title }) => {
  const history = useHistory();

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.BackButton
          src={backButtonIcon}
          alt="Botão voltar"
          onClick={history.goBack}
        />
        <Styled.Title>{title}</Styled.Title>
        <Styled.Logo src={logo} alt="Proffy logo" />
      </Styled.Content>
    </Styled.Container>
  );
};

export default TopBar;
