import styled from 'styled-components';
import { Category } from '../../util/API/types';
import MobileMenu from './MobileMenu';
import NavItem from './NavItem';

type Props = {
  siteTitle: string,
  categories: Category[],
  selectedCategory: string,
};

export const NavBar = ({ siteTitle, categories, selectedCategory }: Props) => {
  return (
    <Container>
      <NavItem name={siteTitle} slug="" isHome isBold />
      {categories.map((category) => {
        if (category.slug === 'home') return null;
        return (
          <NavItem
            key={category.name}
            name={category.name}
            slug={category.slug}
            isBold={category.slug === selectedCategory}
            hideOnMobile
          />
        );
      })}
      <NavItem name="CONTACT" slug="contact" isBold={selectedCategory === 'contact'} hideOnMobile />
      <MobileMenu>
        {categories.map((category) => {
          if (category.slug === 'home') return null;
          return (
            <NavItem
              key={category.name}
              name={category.name}
              slug={category.slug}
              isBold={category.slug === selectedCategory}
            />
          );
        })}
        <NavItem name="CONTACT" slug="contact" isBold={selectedCategory === 'contact'} />
      </MobileMenu>
    </Container>
  );
};

const Container = styled.nav`
  padding: 24px 64px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 24px 10%;
  }
`;

export default NavBar;
