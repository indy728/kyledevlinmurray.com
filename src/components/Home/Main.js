import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';

const Wrapper = styled.main`
  width: 100%;
  min-height: inherit;
  justify-content: center;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const main = () => (
  <Wrapper />
);

main.propTypes = {
};

export default main;
