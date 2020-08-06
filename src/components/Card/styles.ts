import styled from "styled-components";

import { Button } from "../ButtonLink";

export const Container = styled.div`
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 3.2rem 2rem;

  & img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const Teacher = styled.div`
  margin-left: 2.4rem;

  & span {
    margin-top: 0.4rem;
  }

  & strong {
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
  }
`;

export const Bio = styled.p`
  padding: 0 2rem;
  line-height: 2.8rem;
`;

export const Schedules = styled.div`
  padding-top: 3.2rem;

  @media (min-width: 700px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    max-width: 90%;
    overflow-x: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ScheduleItem = styled.div``;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 2rem;
  margin-top: 3.2rem;
  border-top: 1px solid var(--color-line-in-white);
  background-color: var(--color-box-footer);

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const Cost = styled.p`
  & strong {
    font: 700 2rem Archivo;
    color: var(--color-primary);
    display: block;
    line-height: 2.6rem;
  }

  @media (min-width: 700px) {
    & strong {
      display: initial;
      margin-left: 1.4rem;
    }
  }
`;

export const Whatsapp = styled(Button)`
  width: 60%;
  max-width: 20rem;

  & img {
    width: 2.2rem;
  }
`;
