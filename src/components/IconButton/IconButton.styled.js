import styled from 'styled-components';

const btnSize = {
  sm: 24,
  md: 36,
  lg: 48,
};

const getSize = props => `${btnSize[props.size]}px`;

export const Button = styled.button`
  margin: 0;
  padding: 4px;
  border: none;
  width: ${getSize};
  height: ${getSize};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => (props.variant === 'primary' ? 'red' : 'blue')};

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
