import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

class HouseHunt extends Component {
  state = {
    
  }

  render() {
    const { prop } = props;

    return (
      <Wrapper>
      
      </Wrapper>
    );
  } 
}

HouseHunt.propTypes = {
};

export default HouseHunt
