import React from 'react';
import Link, { LinkProps } from 'next/link';
import { UnstyledLink } from './styles';

type LinkPropsWithTarget = LinkProps & {
  target?: string,
}

const defaultProps = {
  target: '_self',
};

export const CleanLink: React.FC<React.PropsWithChildren<LinkPropsWithTarget>> = (props) => {
  const { children, target } = props;
  return (
    <Link {...props} passHref>
      <UnstyledLink target={target}>
        {children}
      </UnstyledLink>
    </Link>
  );
};

CleanLink.defaultProps = defaultProps;

export default CleanLink;
