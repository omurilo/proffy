import React from "react";

import { Container, Label, Input } from "./styles";

interface InputProps {
  name: string;
  label: string;
}

const InputComponent: React.FC<InputProps> = ({ name, label }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input type="text" name={name} />
    </Container>
  );
};

export default InputComponent;
