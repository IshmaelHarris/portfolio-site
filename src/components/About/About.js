import React, { useState, useRef, useEffect } from 'react';
import { Box, Boxes, BoxNum, BoxText } from './AboutStyles';
import { accompData } from '../../constants/accompData'

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './AboutStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { timeLineData } from '../../constants/timeLineData';

const TOTAL_CAROUSEL_COUNT = timeLineData.length;

const About = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About</SectionTitle>

      <SectionText>
        Technology is a gift. <br />
        Over the years, it's opened my eyes to many new ideas <br />
        Everyday I want to be a part of this journey. <br />
        I love collborating and tech is the best place for that. <br />
       
      </SectionText>
      
      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {timeLineData.map((item, index) => (
            <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem index={index} 
                id={`carousel__item-${index}`} 
                active={activeItem} 
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle> {item.year} </CarouselItemTitle>
                <CarouselItemText> {item.text} </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer> */}
     
      <CarouselButtons>
        {timeLineData.map((item, index) => (
          <CarouselButton 
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button">
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      
      <Boxes>
      {accompData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    
    
    </Section>
    
  );
};

export default About;