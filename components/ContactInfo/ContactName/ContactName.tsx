import styled from 'styled-components';

type Props = {
  name: string,
  title: string,
};

export const ContactName = ({ name, title }: Props) => {
  return (
    <NameContainer>
      <Name>{name.toUpperCase()} <Title>{title.toUpperCase()}</Title></Name>
    </NameContainer>
  );
};

const NameContainer = styled.div`
  display: flex;
  font-size: 20px;
  letter-spacing: 4px;
  margin-bottom: 14px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;

const Name = styled.h2`
  font-weight: 600;
`;

const Title = styled.span`
  font-weight: 400;
  margin-left: 8px;
`;

export default ContactName;
