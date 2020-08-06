import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.6rem;
  background-color: var(--color-primary-dark);
  border-bottom: 0.2rem solid var(--color-primary-darker);
`;

export const BackButton = styled.img``;

export const Title = styled.span`
  color: var(--color-text-in-primary-complement);
  font-size: 2.0rem;
`;

export const Logo = styled.img`
  height: 1.6rem;
`;
