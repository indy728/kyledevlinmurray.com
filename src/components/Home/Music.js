import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { boatDJ } from 'assets/img/jpg';

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${boatDJ});
  background-color: rgba(4, 100, 100);
  background-position: 70% 0;
  background-repeat: no-repeat;
  height: 100vh;

  @media ${device.md} {
    background-image: url(${boatDJ});
    background-size: cover;
    background-position: top;
  }
`;

const music = (props) => {
  const { prop } = props;

  return (
    <Wrapper />
  );
};

music.propTypes = {
};

export default music;
