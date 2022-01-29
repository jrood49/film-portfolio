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
  url: string,
  category?: string,
  projectType?: string,
} & typeof defaultProps;

const defaultProps = {
  category: 'home',
  projectType: 'vimeo',
};

export const ProjectCard = ({
  title,
  thumbnail,
  slug,
  url,
  category,
  projectType,
}: Props) => {
  return (
    <CleanLink href={projectType === 'link' ? `${url}` : `/project/${slug}?category=${category}`} passHref target={projectType === 'link' ? '_blank' : '_self'}>
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
