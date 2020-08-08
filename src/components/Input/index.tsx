import React, { InputHTMLAttributes } from "react";

import * as Styled from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  dimension?: {};
}

const InputComponent: React.FC<InputProps> = ({
  name,
  label,
  dimension,
  ...rest
}) => {
  return (
    <Styled.Container size={dimension}>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input type="text" name={name} {...rest} />
    </Styled.Container>
  );
};

export default InputComponent;
