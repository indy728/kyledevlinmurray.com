import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { oregonCoffee } from 'assets/img/jpg';
import { device } from 'themes/media';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 10rem;
  background-color: ${({ theme }) => theme.palette.primary[2]};
  /* padding-top: 8vh; */
`;

const IntroPic = styled.div`
  width: 100%;
  height: 50vh;
  background-image: ${({ theme }) => (
    `linear-gradient(
      180deg,
      ${theme.palette.primary[2]},
      transparent 20%,
      transparent 80%,
      ${theme.palette.primary[2]} 100%),
    url(${oregonCoffee})`
  )};
  background-size: 200%;
  background-position: 95% 0;
  background-repeat: no-repeat;
  /* box-shadow: 0 0 10px 2px black; */

  @media ${device.md} {
    background-image: 
    linear-gradient(
      120deg,
      rgba(2, 50, 50, 0.8),
      rgba(2, 50, 50, 0.8) 45%,
      transparent 75%),
    url(${oregonCoffee});
    background-size: cover;
    background-position: top right;
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
  width: 100%;
  height: 50vh;
  justify-content: space-between;
  /* box-shadow: 0 0 10px 2px black; */
  * {
    color: ${({ theme }) => theme.palette.white};
  }
  font-size: 2.4rem;
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

const intro = (props) => {
  const reveal = [
    'developer', 'drink slinger', 'disc golfer', 'DJ',
  ];

  const indyAttributes = reveal.map((attribute, i) => (
    <IndyAttribute key={attribute} delay={i}>{attribute}</IndyAttribute>
  ));

  const resumeLink = (<a href="#" className="here">here</a>);

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

intro.propTypes = {
};

export default intro;
