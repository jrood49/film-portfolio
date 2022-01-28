import { GetStaticProps } from 'next';
import styled from 'styled-components';
import fetchAPI from '../common/util/API';
import {
  Category,
  ContactInfo,
  SiteInfo,
} from '../common/util/API/types';
import ContactDetails from '../components/ContactInfo/ContactDetails';
import ContactName from '../components/ContactInfo/ContactName';
import DefaultPageLayout from '../common/components/DefaultPageLayout';

type Props = {
  name: string,
  email: string,
  phoneNumber: string,
  title: string,
  siteTitle: string,
  categories: Category[],
  instagramLink: string,
  vimeoLink: string,
  facebookLink: string,
  twitterLink: string,
};

const Contact = ({
  name,
  email,
  phoneNumber,
  title,
  siteTitle,
  categories,
  instagramLink,
  vimeoLink,
  facebookLink,
  twitterLink,
}: Props) => {
  return (
    <DefaultPageLayout
      pageTitle={`CONTACT | ${siteTitle.toUpperCase()}`}
      siteTitle={siteTitle}
      categories={categories}
      selectedCategory="contact"
      instagramLink={instagramLink}
      vimeoLink={vimeoLink}
      facebookLink={facebookLink}
      twitterLink={twitterLink}
    >
      <Container>
        <ContactName name={name} title={title} />
        <ContactDetails phoneNumber={phoneNumber} email={email} />
      </Container>
    </DefaultPageLayout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 180px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const getStaticProps: GetStaticProps = async () => {
  const contactInfo = await fetchAPI<ContactInfo>('contact-info');
  if (!contactInfo) return { notFound: true };

  const categories = await fetchAPI<Category[]>('categories');

  const siteInfo = await fetchAPI<SiteInfo>('site-info');
  if (!siteInfo) return { notFound: true };

  return {
    props: {
      name: contactInfo?.name,
      phoneNumber: contactInfo?.phone_number,
      email: contactInfo?.email,
      title: siteInfo?.title,
      categories,
      siteTitle: siteInfo?.site_name,
      instagramLink: siteInfo?.instagram,
      vimeoLink: siteInfo?.vimeo,
      facebookLink: siteInfo?.facebook,
      twitterLink: siteInfo?.twitter,
    },
    revalidate: 10,
  };
};

export default Contact;
