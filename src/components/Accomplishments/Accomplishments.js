import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';
import { AccompData } from '../../constants/AccompData'



const Accomplishments = () => (
  <Section>
    <Boxes>
      {AccompData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
