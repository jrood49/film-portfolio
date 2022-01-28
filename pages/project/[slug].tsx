import styled from 'styled-components';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import fetchAPI from '../../common/util/API';
import {
  Category,
  SiteInfo,
  Project,
} from '../../common/util/API/types';
import DefaultPageLayout from '../../common/components/DefaultPageLayout';
import Video from '../../components/Video';
import BackNav from '../../components/BackNav';

type Props = {
  url: string,
  title: string,
  siteTitle: string,
  currentCategory: string,
  categories: Category[],
  instagramLink: string,
  vimeoLink: string,
  facebookLink: string,
  twitterLink: string,
};

const ProjectPage: NextPage<Props> = ({
  url,
  title,
  siteTitle,
  currentCategory,
  categories,
  instagramLink,
  vimeoLink,
  facebookLink,
  twitterLink,
}) => {
  return (
    <DefaultPageLayout
      pageTitle={`${title.toUpperCase()} | ${siteTitle.toUpperCase()}`}
      siteTitle={siteTitle}
      selectedCategory={currentCategory}
      categories={categories}
      instagramLink={instagramLink}
      vimeoLink={vimeoLink}
      facebookLink={facebookLink}
      twitterLink={twitterLink}
    >
      <BackNav category={currentCategory} />
      <VideoContainer>
        <Video url={url} />
      </VideoContainer>
    </DefaultPageLayout>
  );
};

const VideoContainer = styled.div`
  margin: 100px 10% 0;
`;

type Params = {
  slug: string,
  category: string,
} & ParsedUrlQuery;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug, category } = context.params as Params;
  const projects = await fetchAPI<Project[]>(`videos?slug=${slug}`);
  if (!projects || !projects[0]) return { notFound: true };
  const project = projects[0];
  const urlString = project.url.split('/');
  const url = urlString[urlString.length - 1];

  const categories = await fetchAPI<Category[]>('categories');

  const siteInfo = await fetchAPI<SiteInfo>('site-info');
  if (!siteInfo) return { notFound: true };

  return {
    props: {
      url,
      title: project?.title,
      categories,
      currentCategory: category || 'home',
      siteTitle: siteInfo?.site_name,
      instagramLink: siteInfo?.instagram,
      vimeoLink: siteInfo?.vimeo,
      facebookLink: siteInfo?.facebook,
      twitterLink: siteInfo?.twitter,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const projects = await fetchAPI<Project[]>('videos');

  // Get the paths we want to pre-render based on posts
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
};

export default ProjectPage;
