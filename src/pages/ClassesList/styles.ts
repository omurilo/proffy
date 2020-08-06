import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
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
`;

export const SearchForm = styled.form`
  margin-top: 3.2rem;
`;