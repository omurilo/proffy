import styled from "styled-components";
import SelectComponent, { components } from "react-select";
import { Container as Input } from "../Input/styles";

type StyleProps = {
  size?: { width?: string };
};

export const Container = styled.div<StyleProps>`
  font: 500 1.6rem Poppins;
  position: relative;
  width: ${(props) => props?.size?.width ?? "100%"};

  &:focus-within::after {
    content: "";
    width: calc(100% - 3.2rem);
    height: 0.2rem;
    background-color: var(--color-primary);
    margin: 0 1.6rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  & + &,
  & + ${Input} {
    margin-top: 1.4rem;
  }

  @media (min-width: 700px) {
    & + &,
    & + ${Input} {
      margin-top: 0;
      width: 100%;
    }
  }
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-text-in-primary);
`;

const Control = styled(components.Control)`
  width: 100%;
  height: 5.6rem;
  margin-top: 0.8rem;
  color: var(--color-text-base);
  outline: 0;
  font: 1.6rem Archivo;
`;

const Option = styled(components.Option)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid var(--color-line-in-white);
  height: 5.6rem;
  padding: 0 2.4rem;
  
  &:hover {
    border-left-color: var(--color-primary);
    background-color: var(--color-hover-back);
    font-weight: 700;
  }
`;

export const Select = styled(SelectComponent).attrs({
  isSearchable: true,
  isClearable: true,
  components: { Control, Option },
  styles: {
    placeholder: () => ({
      color: "var(--color-text-placeholder)",
    }),
    control: (base: any, state: any) => ({
      ...base,
      backgroundColor: "var(--color-input-background)",
      boxShadow: "none",
      border: "1px solid transparent",
      borderRadius: '0.8rem',
      borderBottomLeftRadius: state.menuIsOpen && 0,
      borderBottomRightRadius: state.menuIsOpen && 0,
      ":hover": {
        borderColor: "var(--color-line-in-white)",
      },
    }),
    menu: (base: any) => ({
      ...base,
      boxShadow: 'none',
      border: "none",
      borderTop: 0,
      marginTop: '-0.2rem',
      borderRadius: 0,
      backgroundColor: "var(--color-input-background)",
    }),
    menuList: () => ({}),
    option: (base: any, state: any) => ({
      backgroundColor: state.isSelected
        ? "var(--color-hover-back)"
        : "transparent",
      borderLeft: `0.2rem solid ${
        state.isSelected
          ? "var(--color-primary)"
          : "var(--color-input-background)"
      }`,
      fontWeight: state.isSelected && 700,
    }),
  },
})``;