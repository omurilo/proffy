import React, { SelectHTMLAttributes } from "react";

import * as Styled from "./styles";

type Option = {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  dimension?: {};
  options: Option[];
}

const SelectComponent: React.FC<SelectProps> = ({
  name,
  label,
  dimension,
  ...rest
}) => {
  return (
    <Styled.Container size={dimension}>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Select name={name} {...rest}>
        <option>1</option>
      </Styled.Select>
    </Styled.Container>
  );
};

export default SelectComponent;
