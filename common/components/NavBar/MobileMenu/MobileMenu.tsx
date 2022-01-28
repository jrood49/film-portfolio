import React, { useState } from 'react';
import Hamburger from './Hamburger';
import DropdownMenu from './DropdownMenu';

export const MobileMenu: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hamburger onClick={() => { setIsOpen(!isOpen); }} />
      <DropdownMenu isOpen={isOpen} onClick={() => { setIsOpen(false); }}>
        {children}
      </DropdownMenu>
    </>
  );
};

export default MobileMenu;
