import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ish@ishmaelharris.dev">ish@ishmaelharris.dev</LinkItem>
        </LinkColumn>
      
      <SocialContainer>
      <SocialIcons href="https://github.com/IshmaelHarris">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/ishmaelharris/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      </SocialContainer>
      </LinkList>


    </FooterWrapper>
  );
};

export default Footer;
