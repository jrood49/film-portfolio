import React from 'react';
import styled from 'styled-components';
import { Project } from '../../common/util/API/types';
import ProjectCard from './ProjectCard';

/* eslint-disable react/require-default-props */
type Props = {
  projects?: Project[],
  category?: string,
};
/* eslint-enable react/require-default-props */

export const ProjectGrid: React.FC<Props> = ({ projects, category }) => {
  if (!projects) return null;
  return (
    <Container>
      {projects.map((project) => (
        <ProjectCard
          key={project.url}
          slug={project.slug}
          title={project.title}
          thumbnail={project.thumbnail?.formats?.medium?.url}
          url={project.url}
          category={category}
          projectType={project.project_type}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 60px;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px 30px;
`;

export default ProjectGrid;
