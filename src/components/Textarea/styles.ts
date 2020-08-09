import styled from "styled-components";

type StyleProps = {
  size?: { width?: string };
  primary?: boolean;
  marginTop?: string;
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
    bottom: 0.7rem;
  }

  & + &,
  &:nth-child(n + 3) {
    margin-top: ${(props) => props?.marginTop ?? "1.4rem"};
  }

  @media (min-width: 720px) {
    & + &,
    &:nth-child(n + 3) {
      margin-top: ${(props) => props?.marginTop ?? 0};
      width: 100%;
    }
  }
`;

export const Label = styled.label<StyleProps>`
  font-size: 1.4rem;
  color: ${(props) =>
    props.primary
      ? "var(--color-text-in-primary)"
      : "var(--color-text-complement)"};
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  border: 1px solid transparent;
  color: var(--color-text-base);
  outline: 0;
  padding: 1.6rem;
  font: 1.6rem Archivo;
  resize: vertical;
  min-height: 16rem;
  max-height: 36rem;

  &:hover {
    border-color: var(--color-line-in-white);
  }
`;
