import styled from 'styled-components';

type Props = {
  name: string,
  title: string,
};

export const ContactName = ({ name, title }: Props) => {
  return (
    <NameContainer>
      <Name>{name.toUpperCase()}</Name><Title>{title.toUpperCase()}</Title>
    </NameContainer>
  );
};

const NameContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 20px;
  letter-spacing: 4px;
  margin-bottom: 14px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h2`
  font-weight: 600;
  padding: 0 8px;
  margin-bottom: 0;
`;

const Title = styled.h2`
  font-weight: 400;
  padding: 0 8px;
`;

export default ContactName;
