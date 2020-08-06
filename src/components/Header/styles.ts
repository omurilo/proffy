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
  width: 90%;
  position: relative;
  margin: 3.2rem auto;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "title title title adornment" "children children children children";
    
    flex: 1;

    max-width: 740px;
    margin: 0 auto;
    padding-top: 3.6rem;
    padding-bottom: 4.8rem;

  }
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  line-height: 4.2rem;
  color: var(--color-title-in-primary);

  @media (min-width: 700px) {
    grid-area: title;
    max-width: 350px;
  }
`;
