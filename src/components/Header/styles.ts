import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--color-primary);
  font: 500 1.6rem Archivo;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 2.8rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: var(--color-title-in-primary);
`;
