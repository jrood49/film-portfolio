import SocialIcon from './SocialIcon';
import { Container } from './styles';

type Props = {
  instagramLink: string,
  facebookLink: string,
  twitterLink: string,
  vimeoLink: string,
};

const SocialIcons = ({
  instagramLink,
  facebookLink,
  twitterLink,
  vimeoLink,
}: Props) => {
  return (
    <Container>
      {instagramLink ? <SocialIcon svg="/social-instagram.svg" link={instagramLink} /> : null}
      {vimeoLink ? <SocialIcon svg="/social-vimeo.svg" link={vimeoLink} /> : null}
      {facebookLink ? <SocialIcon svg="/social-facebook.svg" link={facebookLink} /> : null}
      {twitterLink ? <SocialIcon svg="/social-twitter.svg" link={twitterLink} /> : null}
    </Container>
  );
};

export default SocialIcons;
