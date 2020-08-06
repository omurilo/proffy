import styled from "styled-components";

export const Container = styled.nav`
  background-color: var(--color-primary-dark);
  border-bottom: 0.2rem solid var(--color-primary-darker);
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem;
  @media (min-width: 700px) {
    max-width: 1120px;
  }
`;

export const BackButton = styled.img`
  height: 3.2rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Title = styled.span`
  color: var(--color-text-in-primary-complement);
  font-size: 2rem;
`;

export const Logo = styled.img`
  height: 1.6rem;
`;
