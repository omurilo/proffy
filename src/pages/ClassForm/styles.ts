import styled from "styled-components";
import { Button as ButtonLink } from "../../components/ButtonLink";
import { Container as Input } from "../../components/Input/styles";

type StyledProps = {
  key?: string;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.4rem auto;
`;

export const Description = styled.p`
  font: 1.4rem Poppins;
  color: var(--color-text-in-primary);
  line-height: 2.6rem;
  max-width: 28.5rem;

  @media (min-width: 720px) {
    font-size: 1.6rem;
  }
`;

export const DescriptionMotivation = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;

  & span {
    font: 1.2rem Poppins;
    color: var(--color-text-in-primary);
    max-width: 10.5rem;
  }

  & img {
    margin-right: 2.4rem;
  }

  @media (min-width: 720px) {
    display: flex;
  }
`;

export const Main = styled.main`
  width: 92.5%;
  background-color: var(--color-box-base);
  margin: -3.6rem auto 5.6rem;
  border-radius: 0.8rem;

  @media (min-width: 720px) {
    max-width: 740px;
  }
`;

export const Form = styled.form`
  padding: 2.4rem 3.2rem;
  margin: 0 auto;

  @media (min-width: 720px) {
    padding: 3.6rem 6.4rem;
  }
`;

export const GroupForm = styled.fieldset`
  border: 0;
  margin-bottom: 3rem;
`;

export const GroupFormLegend = styled.legend`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  margin-bottom: 2.4rem;
  width: 100%;
  border-bottom: 1px solid var(--color-line-in-white);
  color: var(--color-text-title);
  font: 700 2.4rem Archivo;
`;

export const Button = styled(ButtonLink).attrs({
  color: "primary",
  background: "transparent",
  hover: "transparent",
  width: "15rem",
  height: "3.6rem",
  size: "1.6rem",
})`
  justify-content: flex-end;
  :hover {
    color: var(--color-primary-darker);
  }
`;

export const ScheduleItem = styled.div<StyledProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;

  & + & {
    margin-top: 2.4rem;
  }

  @media (min-width: 720px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 1.6rem;

    ${Input} {
      margin-top: 0;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  background-color: var(--color-box-footer);
  border-top: 1px solid var(--color-line-in-white);
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  @media (min-width: 720px) {
    padding: 3.8rem 5.6rem;
  }
`;

export const AlertUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    margin-right: 1.6rem;
  }

  & span {
    font: 500 1.2rem Poppins;
    color: var(--color-text-complement);
  }
`;

export const SaveClassButton = styled(ButtonLink).attrs({
  height: "5.6rem",
  width: "20rem",
})``;
