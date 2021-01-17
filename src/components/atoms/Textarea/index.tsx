import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  value?: string;
  onChange?: (e: React.MouseEvent) => void;
  size: 'main' | 'title';
}

interface optionType {
  rows: number;
  fontSize: string;
  placeholder: string;
}

const getOptions = (size: 'main' | 'title'): optionType => {
  if (size === 'main') {
    return { rows: 10, fontSize: '1.2rem', placeholder: 'Contents' };
  }
  return { rows: 2, fontSize: '2rem', placeholder: 'Title' };
};

const Textarea = ({ value, onChange, size }: Props) => {
  const textInput = useRef(null);
  const stylingProps = getOptions(size);
  useEffect(() => {
    // 렌더링시 자동으로 focus
    textInput.current.focus();
  }, []);
  return (
    <StyledTextArea
      {...stylingProps}
      value={value}
      onChange={onChange}
      ref={textInput}
    />
  );
};

const StyledTextArea = styled.textarea<optionType>`
  border: none;
  font-size: ${(props) => props.fontSize};
  width: 100%;
  overflow: hidden;
  resize: none;

  &:focus {
    outline: none;
  }
`;
export default Textarea;
