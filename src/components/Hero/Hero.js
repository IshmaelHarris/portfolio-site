import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
      </SectionTitle>
      <SectionText>
        You've found my portfolio site. <br />
        This is the start of the ultimate goal <br />
        to uplift the world.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>

    </LeftSection>

  </Section>
);

export default Hero;