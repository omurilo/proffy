import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--color-primary);
  font: 500 1.6rem Archivo;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 340px;
  }
`;

export const Content = styled.div`
  width: 92.5%;
  position: relative;
  margin: 3.6rem auto;

  @media (min-width: 700px) {
    max-width: 740px;
    margin: 0 auto;
    padding-top: 3.6rem;
    padding-bottom: 4.8rem;
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);
  max-width: 35rem;

  @media (min-width: 700px) {
    font-size: 3.6rem;
  }
`;
