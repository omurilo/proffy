import styled from "styled-components";

type StyleProps = {
  size?: { width?: string };
};

export const Container = styled.div<StyleProps>`
  font: 500 1.6rem Poppins;
  position: relative;
  width: ${(props) => props?.size?.width ?? "100%"};

  &:focus-within::after {
    content: "";
    width: calc(100% - 3.2rem);
    height: 0.2rem;
    background-color: var(--color-primary);
    margin: 0 1.6rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  & + & {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    & + & {
      margin-top: 0;
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-text-in-primary);
`;

export const Input = styled.input`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  color: var(--color-text-base);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.6rem Archivo;
`;
