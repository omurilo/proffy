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

  @media (min-width: 1120px) {
    display: grid;
    grid-template-rows: 550px 1fr;
  }
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

  @media (min-width: 1120px) {
    &.container {
      max-width: 1120px;
    }

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "logo hero hero";
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 3.2rem;

  @media (min-width: 1120px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: start;

    & img {
      height: 100%;
    }
  }
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

  @media (min-width: 1120px) {
    text-align: initial;
    font-size: 3.6rem;
  }
`;

export const Hero = styled.img.attrs({
  src: heroImg,
})`
  width: 100%;
  @media (min-width: 1120px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const Footer = styled.div`
  padding: 3.2rem 0;

  @media (min-width: 1120px) {
    &.container {
      max-width: 1120px;
    }

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-areas: "message totals buttons";

    justify-self: center;
    align-items: center;
  }
`;

export const Message = styled.p`
  & strong {
    display: block;
  }

  @media (min-width: 1120px) {
    grid-area: message;
    justify-self: start;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  & a:first-child {
    margin-right: 1.6rem;
  }

  @media (min-width: 1120px) {
    grid-area: buttons;
    justify-content: flex-end;
  }
`;

export const Button = styled(ButtonLink)`
  @media (min-width: 1120px) {
    font-size: 2.4rem;
  }
`;

export const Totals = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  padding: 3.2rem 0;

  & img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1120px) {
    grid-area: totals;

    display: block;
    padding: 3.2rem;

    font-size: 1.2rem;
  }
`;
