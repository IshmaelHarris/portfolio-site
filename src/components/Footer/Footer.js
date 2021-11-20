import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:">510.abc.1234</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ish@ishmaelharris.dev">ish@ishmaelharris.dev</LinkItem>
        </LinkColumn>
      </LinkList>
      
      <SocialContainer>
      <SocialIcons href="https://github.com/IshmaelHarris">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/ishmaelharris/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
