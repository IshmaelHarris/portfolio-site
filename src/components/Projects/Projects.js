import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, ProjectName } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { Container } from '../Header/HeaderStyles';


const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <Container>
    {projects.map(({title}) => (
      <ProjectName text-align="left" >{title}</ProjectName>
    ))}
    {/* Make ProjectName reveal Project details  */}
    </Container>
    
    <GridContainer>
      {projects.map(({id, image, title, description, tags, url, code}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
            <ExternalLinks href={url}>View</ExternalLinks>
              <ExternalLinks href={code}>Git</ExternalLinks>
              
            </UtilityList>
          </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;