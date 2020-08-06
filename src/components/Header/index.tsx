import React from "react";

import TopBar from "../../components/TopBar";

import { Container, Content, Title } from "./styles";

interface HeaderProps {
  topTitle: string;
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container>
      <TopBar title={props.topTitle} />
      <Content>
        <Title>{props.title}</Title>
        {props.children}
      </Content>
    </Container>
  );
};

export default Header;
