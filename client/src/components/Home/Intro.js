import React from 'react';
import styled from 'styled-components';
import { oregonCoffee } from 'assets/img/jpg';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary[2]};
  position: relative;
`;

const IntroPic = styled.div`
  width: 100%;
  height: 56rem;
  background-image: ${({ theme }) => (
    `linear-gradient(
      180deg,
      ${theme.palette.primary[2]},
      transparent 20%,
      transparent 80%,
      ${theme.palette.primary[2]} 100%),
    url(${oregonCoffee})`
  )};
  background-size: 100rem;
  background-position: 95% 0;
  background-repeat: no-repeat;
  /* box-shadow: 0 0 10px 2px black; */

  @media ${device.md} {
    background-size: cover;
    background-position: 100% 50%;

  }

  @media ${device.lg} {
    height: 72rem;
    background-image: 
    /* linear-gradient(
      120deg,
      rgba(2, 50, 50, 0.8),
      rgba(2, 50, 50, 0.8) 45%,
      transparent 75%), */
    url(${oregonCoffee});
    
  }
`;

const IndyAttribute = styled.div`
  height: 3.2rem;
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  animation: ${({ delay }) => {
    const animation = delay % 2 === 0 ? 'moveInRight' : 'moveInLeft';

    return `${animation} 1s ease-out`;
  }
};

  animation-delay: ${({ delay }) => `${delay * 250 - 250}ms`};

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

const IndyAttributes = styled.div`
  height: 25vh;
  justify-content: space-evenly;
`;

const IntroDescription = styled.div`
  /* width: 100%; */
  height: 56rem;
  justify-content: space-between;
  * {
    color: ${({ theme }) => theme.palette.white};
  }
  font-size: 2.4rem;

  @media ${device.lg} {
    position: absolute;
    top: 5rem;
    left: 5rem;
    padding: 3rem 10% 3rem 6%;
    align-items: flex-start;
    background-color: rgba(2, 50, 50, .8);
    /* box-shadow: 0 0 10px 2px black; */
    clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%);
    height: 62rem;

    * {
      align-items: flex-start;
    }

  }
`;

const ResumeLink = styled.div`
  height: 8rem;
  justify-content: center;
  display: inline-block;

  a.here {
    color: gold;
  }
`;

const Nameplate = styled.div`
 font-size: 4.8rem;
 font-family: ${({ theme }) => theme.fonts.cursive};
 
 animation: growReveal 1.6s ease-out;

`;

const intro = () => {
  const reveal = [
    'developer', 'drink slinger', 'disc golfer', 'DJ',
  ];

  const indyAttributes = reveal.map((attribute, i) => (
    <IndyAttribute key={attribute} delay={i}>{attribute}</IndyAttribute>
  ));

  const resumeLink = (<a href="/pdf/resume.pdf" target="_blank" className="here">here</a>);

  return (
    <Wrapper>
      <IntroPic />
      <IntroDescription>
        <Nameplate>Kyle Murray</Nameplate>
        <IndyAttributes>
          {indyAttributes}
        </IndyAttributes>
        <ResumeLink>
          Check out my résumé
          {resumeLink}
        </ResumeLink>
      </IntroDescription>
    </Wrapper>
  );
};

export default intro;
