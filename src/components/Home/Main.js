import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';
import { ImageShape } from 'components/UI';

const defaultGif = require('assets/img/gif/template-default-main-content.gif');

const Wrapper = styled.main`
  width: 100%;
  min-height: inherit;
  justify-content: center;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const DefaultGif = styled.div`

  width: 80%;
  overflow: hidden;
  
  figure {
    transform: translate(-.75rem, -2rem);
  }
  
  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const main = () => (
  <Wrapper>
    <DefaultGif>
      <ImageShape src={defaultGif} alt="Content Placeholder" />
    </DefaultGif>
  </Wrapper>
);

main.propTypes = {
};

export default main;
