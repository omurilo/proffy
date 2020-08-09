import React, { TextareaHTMLAttributes, useEffect, useRef } from "react";

import * as Styled from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  primary?: boolean;
  marginTop?: string;
  dimension?: {};
}

const TextAreaComponent: React.FC<TextAreaProps> = ({
  name,
  label,
  primary,
  marginTop,
  dimension,
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.style.overflowY =
        textAreaRef.current.scrollHeight < 350 ? "hidden" : "auto";
    }
  }, [rest.value]);
  return (
    <Styled.Container size={dimension} marginTop={marginTop}>
      <Styled.Label htmlFor={name} primary={primary}>
        {label}
      </Styled.Label>
      <Styled.Textarea ref={textAreaRef} name={name} {...rest} />
    </Styled.Container>
  );
};

export default TextAreaComponent;
