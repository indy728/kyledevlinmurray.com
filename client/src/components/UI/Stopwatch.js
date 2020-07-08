import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class Stopwatch extends Component {
  state = {
    elapsedTime: null,
  }

  startTime = new Date('Oct 24, 2016 08:00:00').getTime();

  componentDidMount() {
    this.doCountUp();
  }

  componentWillUnmount() {
    clearInterval(this.stopwatchInterval);
  }

  doCountUp = () => {
    const currentTime = new Date().getTime();
    this.stopwatchInterval = setInterval(() => {
      this.setState({ elapsedTime: currentTime - this.startTime });
    }, 1000);
  }

  render() {
    const { elapsedTime } = this.state;
    console.log('[Stopwatch] elapsedTime: ', elapsedTime);

    return (
      <Wrapper>
        {elapsedTime}
      </Wrapper>
    );
  }
}

Stopwatch.propTypes = {
};

export default Stopwatch;
