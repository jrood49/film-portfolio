import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-right: 15%;
  margin-top: 50px;
  gap: 8px;
  @media (max-width: 768px) {
    justify-content: center;
    margin-right: 0;
    padding-bottom: 36px;
  }
`;

export default Container;
