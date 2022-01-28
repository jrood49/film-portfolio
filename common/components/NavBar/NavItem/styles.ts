import styled from 'styled-components';

type HeaderProps = {
  isBold: boolean,
  isHome: boolean,
  hideOnMobile: boolean,
};

export const Heading = styled.div<HeaderProps>`
  display: block;
  margin: 0;
  font-weight: ${(props) => (props.isBold ? '500' : '400')};
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${(props) => (props.isBold ? props.theme.colors.primaryDark : props.theme.colors.primaryDarkHover)};
  margin-right: 30px;
  opacity: 100%;
  transition: opacity 0.25s ease;
  position: relative;
  z-index: 999;
  &:hover {
    opacity: 75%;
  }
  @media (max-width: 768px) {
    ${(props) => (props.hideOnMobile ? 'display: none;' : '')}
    ${(props) => (props.isHome ? 'font-size: 18px;' : '')}
    
  }
`;

export default Heading;
