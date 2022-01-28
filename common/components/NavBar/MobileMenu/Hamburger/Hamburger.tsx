import { Container, HamburgerMenuLine } from './styles';

type Props = {
  onClick: () => void;
};

export const Hamburger = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <HamburgerMenuLine />
      <HamburgerMenuLine />
      <HamburgerMenuLine />
    </Container>
  );
};

export default Hamburger;
