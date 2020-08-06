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
  margin: 1.6rem;
  padding: 1.6rem;

  @media (min-width: 700px) {
    flex-direction: column;
    padding: 0;
    margin: 1.6rem 0.8rem;
  }
`;

export const Info = styled.div`
  @media (min-width: 700px) {
    padding: 1.6rem 2rem;
  }
`;

export const Label = styled.div`
  color: var(--color-text-complement);
  font: 500 1.4rem Poppins;
`;

export const Arrow = styled.img`
  transform: rotate(180deg);
  height: 4.6rem;
  filter: saturate(1) invert(0.3) contrast(0.8) opacity(0.4);

  @media (min-width: 700px) {
    display: none;
  }
`;

export const WeekDay = styled.div`
  position: relative;
  font: 700 1.8rem Archivo;
`;

export const Time = styled.div`
  font: 700 1.8rem Archivo;
`;
