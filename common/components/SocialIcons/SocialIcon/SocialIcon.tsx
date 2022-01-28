import { UnstyledLink } from '../../CleanLink/styles';
import { Icon } from './styles';

type Props= {
  link: string,
  svg: string,
};

const iconWidth = 32;
const iconHeight = iconWidth;

const SocialIcon = ({ link, svg }: Props) => {
  return (
    <UnstyledLink href={link} target="_blank">
      <Icon alt={svg} src={svg} width={iconWidth} height={iconHeight} />
    </UnstyledLink>
  );
};

export default SocialIcon;
