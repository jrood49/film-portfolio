import CleanLink from '../../common/components/CleanLink';
import {
  Container,
  LeftArrow,
  Label,
} from './styles';

type Props = {
  category: string | undefined,
};

export const BackNav = ({ category }: Props) => {
  const previousCategory = category || 'home';

  return (
    <CleanLink href={`/${previousCategory}`} passHref>
      <Container>
        <LeftArrow src="/left-arrow.svg" alt="left-arrow" width={15} height={15} />
        <Label>BACK</Label>
      </Container>
    </CleanLink>
  );
};

export default BackNav;
