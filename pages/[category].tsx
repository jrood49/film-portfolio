import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import fetchAPI from '../common/util/API';
import {
  Category,
  SiteInfo,
  Project,
} from '../common/util/API/types';
import ProjectGrid from '../components/ProjectGrid';
import DefaultPageLayout from '../common/components/DefaultPageLayout';

type Props = {
  categories: Category[],
  currentCategory: string,
  siteTitle: string,
  projects: Project[],
  instagramLink: string,
  vimeoLink: string,
  facebookLink: string,
  twitterLink: string,
};

const CategoryPage: NextPage<Props> = ({
  categories,
  currentCategory,
  siteTitle,
  projects,
  instagramLink,
  vimeoLink,
  facebookLink,
  twitterLink,
}) => {
  return (
    <DefaultPageLayout
      pageTitle={`${currentCategory?.toUpperCase()} | ${siteTitle.toUpperCase()}`}
      siteTitle={siteTitle}
      categories={categories}
      selectedCategory={currentCategory}
      instagramLink={instagramLink}
      vimeoLink={vimeoLink}
      facebookLink={facebookLink}
      twitterLink={twitterLink}
    >
      <ProjectGrid projects={projects} category={currentCategory} />
    </DefaultPageLayout>
  );
};

type Params = {
  category: string,
} & ParsedUrlQuery;

export const getStaticProps: GetStaticProps = async (context) => {
  const { category: slug } = context.params as Params;
  const categories = await fetchAPI<Category[]>('categories');
  if (!categories || !categories[0]) return { notFound: true };

  const currentCategory = slug || 'home';
  const category = categories.find((_category) => _category.slug === currentCategory);
  if (!category) return { notFound: true };

  const siteInfo = await fetchAPI<SiteInfo>('site-info');
  if (!siteInfo) return { notFound: true };

  const projects = category && Array.isArray(category.projects)
    ? category.projects.sort((a, b) => a.priority - b.priority)
    : [];

  return {
    props: {
      categories,
      currentCategory,
      projects,
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
  const categories = await fetchAPI<Category[]>('categories');

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
};

export default CategoryPage;
