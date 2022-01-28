import React from 'react';
import { Container } from './styles';

type Props = {
  isOpen?: boolean,
  onClick: () => void;
} & typeof defaultProps;

const defaultProps = {
  isOpen: false,
};

export const DropdownMenu: React.FC<Props> = ({ isOpen, onClick, children }) => {
  return (
    <Container isOpen={isOpen} onClick={onClick}>
      {children}
    </Container>
  );
};

DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
