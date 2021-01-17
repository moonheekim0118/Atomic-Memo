import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactChild;
  color?: string;
  textAlign?: 'left' | 'right' | 'center';
  width?: string;
  padding?: string;
  display?: string;
  size?: 'small' | 'normal' | 'big' | 'title';
}

const Span = ({
  children,
  color,
  textAlign = 'left',
  width = 'auto',
  padding,
  display = 'inline',
  size = 'normal',
}: Props) => {
  const stylingProps = {
    color,
    textAlign,
    width,
    padding,
    display,
  };

  return (
    <StyledSpan {...stylingProps} className={size}>
      {children}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<Props>`
  display: ${(props: Props) => props.display};
  color: ${(props: Props) => props.color || 'black'};
  text-align: ${(props: Props) => props.textAlign};
  width: ${(props: Props) => props.width};
  padding: ${(props: Props) => props.padding};
  overflow: hidden;
  white-space: ${(props: Props) => props.display !== 'block' && 'nowrap'};
  text-overflow: ellipsis;

  &.small {
    font-size: 1rem;
  }

  &.normal {
    font-size: 1.2rem;
  }

  &.big {
    font-size: 1.2rem;
  }

  &.title {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export default Span;
