import React, { InputHTMLAttributes } from "react";

import { Container, Label, Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const InputComponent: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" name={name} {...rest} />
    </Container>
  );
};

export default InputComponent;
