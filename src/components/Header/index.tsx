import React, { ReactNode } from "react";

import TopBar from "../../components/TopBar";

import * as Styled from "./styles";

interface HeaderProps {
  topBarTitle: string;
  title: string;
  titleRight?: ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Styled.Container>
      <TopBar title={props.topBarTitle} />
      <Styled.Content>
        <Styled.TitleContainer>
          <Styled.Title>{props.title}</Styled.Title>
          {props.titleRight}
        </Styled.TitleContainer>
        {props.children}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Header;
