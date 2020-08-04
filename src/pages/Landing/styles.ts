import styled from "styled-components";
import logoImg from "../../assets/images/logo.svg";
import heroImg from "../../assets/images/landing.svg";

import { Button as ButtonLink } from "../../components/ButtonLink";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: var(--color-text-in-primary);
  background-color: var(--color-primary);

  padding: 3.2rem 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 3.2rem;
`;

export const Logo = styled.img.attrs({
  src: logoImg,
})`
  height: 10rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 4.6rem;
  margin-top: 0.8rem;
`;

export const Hero = styled.img.attrs({
  src: heroImg,
})`
  width: 100%;
`;

export const Footer = styled.div``;

export const Message = styled.p`
  & strong {
    display: block;
  }
`;

export const ButtonsContainer = styled.div``;

export const Button = styled(ButtonLink)``;

export const Totals = styled.span``;
