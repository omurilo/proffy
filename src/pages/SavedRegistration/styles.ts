import styled from "styled-components";
import { Button as ButtonLink } from "../../components/ButtonLink";

import SuccessBackground from "../../assets/images/success-background.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: var(--color-primary);
  overflow: hidden;
`;

export const Main = styled.main`
  width: 100%;
  min-height: 50%;
  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 100%;
    background: url(${SuccessBackground}) no-repeat content-box;
    background-size: contain;
    transform: rotate(90deg);
    z-index: -1;
    left: -70%;
    top: 0;
  }

  @media (min-width: 425px) {
    &::before {
      left: -45%;
    }
  }

  @media (min-width: 720px) {
    &::before {
      transform: rotate(0);
      width: 150%;
      height: 200%;
      left: -25%;
      top: 0;
      background-size: contain;
    }
  }
`;

export const Title = styled.h1`
  font: 700 4.8rem Archivo;
  color: var(--color-title-in-primary);
  text-align: center;
  margin-top: 2.4rem;
`;

export const Description = styled.p`
  margin-top: 1.6rem;
  text-align: center;
  color: var(--color-text-in-primary);
  max-width: 56rem;
`;

export const Button = styled(ButtonLink).attrs({
  width: "16rem",
  height: "5.6rem",
  size: "1.6rem",
})`
  margin-top: 8rem;
`;
