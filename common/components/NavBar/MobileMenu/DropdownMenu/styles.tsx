import styled from 'styled-components';

type Props = {
  isOpen: boolean,
};

export const Container = styled.nav<Props>`
  display: none;
  position: absolute;
  width: calc(80% - 84px);
  top: 72px;
  flex-direction: column;
  gap: 24px;
  padding: 30px 42px;
  border-color: ${({ theme }) => theme.colors.fadedPrimary};
  border-width: 3px;
  border-top-style: solid;
  background-color: white;
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  z-index: 999;
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

export default Container;
