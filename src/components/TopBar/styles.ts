import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 8rem;
  padding: 0 2.8rem;
  background-color: var(--color-primary-dark);
  border-bottom: 0.2rem solid var(--color-primary-darker);
`;

export const BackButton = styled.img``;

export const Title = styled.span`
  color: var(--color-text-in-primary-complement);
  font-size: 2.0rem;
`;

export const Logo = styled.img`
  width: 4.8rem;
`;
