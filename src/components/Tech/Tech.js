import React from 'react';
import { SiReact } from "react-icons/si";
import { BiNetworkChart, BiTime } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineMobile, AiOutlineCloud } from "react-icons/ai";
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechStyles';

const Tech = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech</SectionTitle>
    <List>

      {/* TOP */}
      <ListItem>
      <SiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front End</ListTitle>
        <ListParagraph>
          ● React <br />
          ● Next <br />
          ● Vue
        </ListParagraph>
      </ListContainer>
      </ListItem>
      
      <ListItem>
      <BiNetworkChart size="3rem" />
      <ListContainer>
        <ListTitle>Back End</ListTitle>
        <ListParagraph>
          ● Go <br />
          ● .NET <br />
          ● Node 
          
        </ListParagraph>
      </ListContainer>
      </ListItem>
      
      <ListItem>
      <FiDatabase size="3rem" />
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          ● MySQL <br />
          ● MongoDB <br />
          ● GraphQL <br />
        </ListParagraph>
      </ListContainer>
      </ListItem>
      
      {/* BOTTOM */}
      <ListItem>
      <AiOutlineMobile size="3rem" />
      <ListContainer>
        <ListTitle>Mobile</ListTitle>
        <ListParagraph>
          ● Flutter <br />
        </ListParagraph>
      </ListContainer>
      </ListItem>

      <ListItem>
      <AiOutlineCloud size="3rem" />
      <ListContainer>
        <ListTitle>Cloud</ListTitle>
        <ListParagraph>
          ● Firebase <br />
          ● Salesforce
        </ListParagraph>
      </ListContainer>
      </ListItem>

      <ListItem>
      <BiTime size="3rem" />
      <ListContainer>
        <ListTitle>Productivity</ListTitle>
        <ListParagraph>
          ● Git <br />
          ● Trello <br />
          ● Excel
        </ListParagraph>
      </ListContainer>
      </ListItem>
      
    </List>
  </Section>
);

export default Tech;
