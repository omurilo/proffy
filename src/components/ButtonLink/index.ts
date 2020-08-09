import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  width?: string;
  color?: string;
  height?: string;
  background?: string;
  hover?: string;
  to: string;
  size?: string;
};

export const Button = styled(Link)<Props>`
  width: ${(props) => props.width ?? "30rem"};
  height: ${(props) => props.height ?? "8.4rem"};
  border-radius: 0.8rem;
  font: 700 ${(props) => props.size ?? "2rem"} Archivo;

  display: flex;
  justify-content: space-evenly;
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
    margin-right: 0.2rem;
    width: 4rem;
  }

  @media (min-width: 720px) {
    & img {
      margin-right: 1rem;
    }
  }
`;
