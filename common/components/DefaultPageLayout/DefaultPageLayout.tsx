import React from 'react';
import Head from 'next/head';
import { Category } from '../../util/API/types';
import NavBar from '../NavBar';
import SocialIcons from '../SocialIcons';

type Props = {
  pageTitle: string,
  siteTitle: string,
  categories: Category[],
  selectedCategory: string,
  instagramLink: string,
  vimeoLink: string,
  facebookLink: string,
  twitterLink: string,
};

const DefaultPageLayout: React.FC<Props> = ({
  pageTitle,
  siteTitle,
  categories,
  selectedCategory,
  instagramLink,
  vimeoLink,
  facebookLink,
  twitterLink,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/shutter.ico" />
      </Head>
      <NavBar
        siteTitle={siteTitle.toUpperCase()}
        categories={categories}
        selectedCategory={selectedCategory}
      />
      <main>{children}</main>
      <SocialIcons
        instagramLink={instagramLink}
        vimeoLink={vimeoLink}
        facebookLink={facebookLink}
        twitterLink={twitterLink}
      />
    </div>
  );
};

export default DefaultPageLayout;
