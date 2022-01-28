import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  margin-left: 50px;
  cursor: pointer;
  &:hover img {
    transform: translate(4px);
    opacity: 0.8;
  }
  &:hover div {
    opacity: 0.8;
  }
`;

export const Label = styled.div`
  margin-left: 10px;
  font-size: 1.15em;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 1;
  transition: opacity 0.25s ease;
`;

export const LeftArrow = styled(Image)`
  transition: transform 0.25s ease, opacity 0.25s ease;
  opacity: 1;
`;
