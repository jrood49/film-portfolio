import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerMenuLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;
