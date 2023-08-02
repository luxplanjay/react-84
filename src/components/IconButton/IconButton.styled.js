import styled from 'styled-components';

// switch (props.size) {
//   case 'sm':
//     return '24px';
//   case 'md':
//     return '36px';
//   case 'lg':
//     return '48px';
//   default:
//     return '24px';
// }

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
    width: 100%;
    height: 100%;
  }
`;
