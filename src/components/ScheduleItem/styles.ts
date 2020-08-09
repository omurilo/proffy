import styled from "styled-components";

type StyleProps = {
  disabled?: boolean;
};

export const Container = styled.div<StyleProps>`
  background-color: var(--color-box-footer);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  filter: opacity(${(props) => (props.disabled ? "0.4" : "1")});

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.4rem 1.6rem;
  padding: 0.4rem 1.6rem;

  & + & {
    margin: 1.6rem;
  }

  @media (min-width: 720px) {
    flex-direction: column;
    flex: 1;
    padding: 0;
    margin: 0;

    & + & {
      margin: 0 0 0 0.8rem;
    }
  }
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:nth-last-child(1) {
    justify-content: flex-end;
  }

  @media (min-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.6rem 1.6rem;
  }
`;

export const Label = styled.div`
  color: var(--color-text-complement);
  font: 500 1.2rem Poppins;
  display: none;

  @media (min-width: 720px) {
    display: block;
  }
`;

export const Arrow = styled.img`
  transform: rotate(180deg);
  height: 3.6rem;
  filter: saturate(1) invert(0.3) contrast(0.8) opacity(0.4);

  @media (min-width: 720px) {
    display: none;
  }
`;

export const WeekDay = styled.div`
  position: relative;
  font: 700 1.6rem Archivo;
`;

export const Time = styled.div`
  font: 700 1.6rem Archivo;
`;
