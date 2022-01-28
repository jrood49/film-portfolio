import styled from 'styled-components';
import Script from 'next/script';

type Props = {
  url: string,
};

const Video = ({ url }: Props) => {
  return (
    <>
      <Container>
        <VideoPlayer
          src={`https://player.vimeo.com/video/${url}?h=546b473c5f&color=ffffff&byline=0&portrait=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </Container>
      <Script
        id="vimeo-script"
        src="https://player.vimeo.com/api/player.js"
        strategy="beforeInteractive"
      />
    </>
  );
};

const Container = styled.div`
  padding: 41.67% 0 0 0;
  position: relative;
`;

const VideoPlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Video;
