import styled from 'styled-components';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import fetchAPI from '../common/util/API';
import {
  Category,
  ContactInfo,
  SiteInfo,
  Project,
} from '../common/util/API/types';
import ProjectGrid from '../components/ProjectGrid';
import NameAndTitle from '../components/ContactInfo/ContactName';
import DefaultPageLayout from '../common/components/DefaultPageLayout';

type Props = {
  categories: Category[],
  siteTitle: string,
  projects: Project[],
  name: string,
  title: string,
  instagramLink: string,
  vimeoLink: string,
  facebookLink: string,
  twitterLink: string,
};

const Home: NextPage<Props> = ({
  categories,
  siteTitle,
  projects,
  name,
  title,
  instagramLink,
  vimeoLink,
  facebookLink,
  twitterLink,
}) => {
  return (
    <DefaultPageLayout
      pageTitle={`${name.toUpperCase()} | ${title}`}
      siteTitle={siteTitle}
      selectedCategory="home"
      categories={categories}
      instagramLink={instagramLink}
      vimeoLink={vimeoLink}
      facebookLink={facebookLink}
      twitterLink={twitterLink}
    >
      <ProjectGrid projects={projects} category="home" />
      <NameContainer>
        <NameAndTitle name={name} title={title} />
      </NameContainer>
    </DefaultPageLayout>
  );
};

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;

export const getStaticProps: GetStaticProps = async () => {
  const categories = await fetchAPI<Category[]>('categories');
  if (!categories || !categories[0]) return { notFound: true };
  const category = categories.find((_category) => _category.slug === 'home');

  const contactInfo = await fetchAPI<ContactInfo>('contact-info');
  if (!contactInfo) return { notFound: true };

  const siteInfo = await fetchAPI<SiteInfo>('site-info');
  if (!siteInfo) return { notFound: true };

  const projects = category && Array.isArray(category.projects)
    ? category.projects.sort((a, b) => a.priority - b.priority)
    : [];

  return {
    props: {
      categories,
      currentCategory: 'home',
      projects,
      name: contactInfo?.name,
      title: siteInfo?.title,
      siteTitle: siteInfo?.site_name,
      instagramLink: siteInfo?.instagram,
      vimeoLink: siteInfo?.vimeo,
      facebookLink: siteInfo?.facebook,
      twitterLink: siteInfo?.twitter,
    },
    revalidate: 10,
  };
};

export default Home;
