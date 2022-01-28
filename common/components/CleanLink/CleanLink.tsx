import React from 'react';
import Link, { LinkProps } from 'next/link';
import { UnstyledLink } from './styles';

export const CleanLink: React.FC<React.PropsWithChildren<LinkProps>> = (props) => {
  const { children } = props;
  return (
    <Link {...props} passHref>
      <UnstyledLink>
        {children}
      </UnstyledLink>
    </Link>
  );
};

export default CleanLink;
