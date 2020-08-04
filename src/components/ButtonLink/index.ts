import styled from "styled-components";

type Props = {
  width?: string;
  color?: string;
  height?: string;
  background?: string;
  hover?: string;
};

export const Button = styled.a<Props>`
  width: ${(props) => props.width ?? "30rem"};
  height: ${(props) => props.width ?? "10.4rem"};
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
      : "var(--color-secundary)"};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.hover
        ? `var(--color-${props.hover})`
        : "var(--color-secundary-dark)"};
  }


  & img {
    margin-right: 1rem;
    width: 4rem;
  }
`;
