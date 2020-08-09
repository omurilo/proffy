import React, { InputHTMLAttributes } from "react";

import * as Styled from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  primary?: boolean;
  marginTop?: string;
  dimension?: {};
}

const InputComponent: React.FC<InputProps> = ({
  name,
  label,
  primary,
  marginTop,
  dimension,
  ...rest
}) => {
  return (
    <Styled.Container size={dimension} marginTop={marginTop}>
      {
        // TODO: adicionar <small>explanation of input</small> nas labels
      }
      <Styled.Label htmlFor={name} primary={primary}>{label}</Styled.Label>
      <Styled.Input type="text" name={name} {...rest} />
    </Styled.Container>
  );
};

export default InputComponent;
