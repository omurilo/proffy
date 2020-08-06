import styled from "styled-components";
import { Link } from 'react-router-dom';

type Props = {
  width?: string;
  color?: string;
  height?: string;
  background?: string;
  hover?: string;
  to: string;
};

export const Button = styled(Link)<Props>`
  width: ${(props) => props.width ?? "30rem"};
  height: ${(props) => props.width ?? "8.4rem"};
  border-radius: 0.8rem;
  font: 700 2rem Archivo;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: ${(props) =>
    props.color ? `var(--color-${props.color})` : "var(--color-button-text)"};
  background-color: ${(props) =>
    props.background
      ? `var(--color-${props.background})`
      : "var(--color-secondary)"};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.hover
        ? `var(--color-${props.hover})`
        : "var(--color-secondary-dark)"};
  }


  & img {
    margin-right: 1rem;
    width: 4rem;
  }
`;
