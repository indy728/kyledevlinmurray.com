import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import weatherPNG from 'assets/weather';

const WeatherIcon = styled.div`
  flex: 1;
  max-width: 15rem;

  @media ${device.sm} {
    max-width: 20rem;
  }

  img {
    width: 100%;
    padding: 1rem;
  }
`;

const weatherIcon = (props) => {
  const { icon, alt } = props;

  const iconSource = weatherPNG[icon]
    ? <img src={weatherPNG[icon]} alt={alt} />
    : <div>missing icon</div>;

  return (
    <WeatherIcon>
      {iconSource}
    </WeatherIcon>
  );
};

weatherIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default weatherIcon;
