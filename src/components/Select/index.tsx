import React from "react";
import { Props } from "react-select";
import * as Styled from "./styles";

export interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Props {
  name: string;
  label: string;
  dimension?: {};
  primary?: boolean;
  marginTop?: string;
  options: Option[];
}

const SelectComponent: React.FC<SelectProps> = ({
  name,
  label,
  dimension,
  marginTop,
  primary,
  ...rest
}) => {
  return (
    <Styled.Container size={dimension} marginTop={marginTop}>
      <Styled.Label htmlFor={name} primary={primary}>
        {label}
      </Styled.Label>
      <Styled.Select name={name} {...rest} />
    </Styled.Container>
  );
};

export default SelectComponent;
