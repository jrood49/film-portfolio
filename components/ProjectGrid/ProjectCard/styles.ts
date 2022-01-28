import styled from 'styled-components';
import Image from 'next/image';

type ConatinerProps = {
  image: string,
};

export const Container = styled.div<ConatinerProps>`
  background-image: url("${(props) => (`http://137.184.36.63:1337${props.image}`)}");
  background-position: center;
  background-size: cover;
  width: 26vw;
  min-width: 320px;
  min-height: calc(320px / 2);
  height: 13vw;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 70vw;
    height: 35vw;
  }
`;

export const Content = styled.div`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgCardHover};
  }
  &:hover h2 {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover img {
    opacity: 1;
  }
  transition: background-color 0.4s ease;
`;

export const PlayIcon = styled(Image)`
  opacity: 0;
  transition: opacity 0.4s ease;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0);
  margin: 0;
  margin-top: 6px;
  padding: 0 6px;
  font-weight: 100;
  text-align: center;
  text-transform: uppercase;
  transition: color 0.4s ease;
`;
