import styled from 'styled-components';
import Image from 'next/image';

export const Icon = styled(Image)`
  opacity: 75%;
  transition: opacity 0.25s ease;
  &:hover {
    opacity: 65%;
  }
`;

export default Icon;
