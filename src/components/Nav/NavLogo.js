import React from 'react';
import styled from 'styled-components';
import { ImageShape } from 'components/UI';
import { device } from 'themes/media';

const coffeLogo = require('assets/img/png/coffee-logo.png');

const Wrapper = styled.div`
  width: 4rem;
  height: 4rem;

  @media ${device.sm} {
    
  }

  @media ${device.md} {
    width: 4rem;
    height: 4rem;
  }

  @media ${device.lg} {
    width: 6rem;
    height: 6rem;
  }

  @media ${device.xl} {

  }
`;

const NavLogo = () => (
  <Wrapper>
    <ImageShape shape="circle" src={coffeLogo} alt="My Logo" />
  </Wrapper>
);

NavLogo.propTypes = {
};

export default NavLogo;
