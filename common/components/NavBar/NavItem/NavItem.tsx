import CleanLink from '../../CleanLink';
import { Heading } from './styles';

type Props = {
  name: string,
  slug: string,
  isHome?: boolean,
  isBold?: boolean,
  hideOnMobile?: boolean,
} & typeof defaultProps;

const defaultProps = {
  isBold: false,
  isHome: false,
  hideOnMobile: false,
};

export const NavItem = ({
  name,
  slug,
  isHome,
  isBold,
  hideOnMobile,
}: Props) => {
  return (
    <CleanLink href={`/${slug}`}>
      <Heading isBold={isBold} isHome={isHome} hideOnMobile={hideOnMobile}>{name}</Heading>
    </CleanLink>
  );
};

NavItem.defaultProps = defaultProps;

export default NavItem;
