import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Proffys = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1.4rem 0;

  & span {
    color: var(--color-text-in-primary);
    font: 500 1.4rem Poppins;
    max-width: 18rem;
    flex-basis: 10rem;
  }

  & img {
    margin-right: 1.6rem;
  }

  @media (min-width: 700px) {
    grid-area: adornment;
  }
`;

export const SearchForm = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    grid-area: children;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;

    position: absolute;
    bottom: -7.4rem;
  }
`;