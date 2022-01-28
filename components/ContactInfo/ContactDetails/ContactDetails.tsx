import styled from 'styled-components';

type Props = {
  phoneNumber: string,
  email: string,
};

const ContactDetails = ({ phoneNumber, email }: Props) => {
  return (
    <ContactContainer>
      <div>{phoneNumber}</div>
      <SeparatorContainer> • </SeparatorContainer>
      <div>{email.toLowerCase()}</div>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.05em;
  font-weight: 400;
  color: rgb(75, 75, 75);
  letter-spacing: 1px;
`;

const SeparatorContainer = styled.div`
  font-weight: 900;
  font-size: 1em;
`;

export default ContactDetails;
