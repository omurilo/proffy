import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--color-primary);
  font: 500 1.6rem Archivo;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 90%;
  position: relative;
  margin: 3.2rem auto;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
`;
