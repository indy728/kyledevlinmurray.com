import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  min-height: 100vh;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class AppADay extends Component {
  state = {

  }

  render() {
    return (
      <Wrapper />
    );
  }
}

AppADay.propTypes = {
};

export default AppADay;
