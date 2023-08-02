import { Button } from './IconButton.styled';

export const IconButton = ({ children, variant, size }) => {
  return (
    <Button variant={variant} size={size}>
      {children}
    </Button>
  );
};
