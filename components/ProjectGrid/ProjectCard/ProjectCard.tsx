import CleanLink from '../../../common/components/CleanLink';
import {
  Container,
  Content,
  PlayIcon,
  Title,
} from './styles';

type Props = {
  title: string,
  thumbnail: string,
  slug: string,
  category?: string,
} & typeof defaultProps;

const defaultProps = {
  category: 'home',
};

export const ProjectCard = ({
  title,
  thumbnail,
  slug,
  category,
}: Props) => {
  return (
    <CleanLink href={`/project/${slug}?category=${category}`} passHref>
      <Container image={thumbnail}>
        <Content>
          <PlayIcon src="/play-button.svg" alt="play-button" width={25} height={25} />
          <Title>{title}</Title>
        </Content>
      </Container>
    </CleanLink>
  );
};

ProjectCard.defaultProps = defaultProps;

export default ProjectCard;
