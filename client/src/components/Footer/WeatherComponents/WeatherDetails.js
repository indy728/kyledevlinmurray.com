import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WeatherDetails = styled.div`
  line-height: 3rem;
  text-transform: capitalize;
`;

const weatherDetails = (props) => {
  const {
    description, temp, feelsLike, humidity,
  } = props;

  return (
    <WeatherDetails>
      <div>{description}</div>

      <div>
        currently:&nbsp;
        {temp}
        &deg;
      </div>
      <div>
        feels like:&nbsp;
        {feelsLike}
        &deg;
      </div>
      <div>
        humidity:
        {' '}
        {humidity}
        %
      </div>
    </WeatherDetails>
  );
};

weatherDetails.propTypes = {
  description: PropTypes.string,
  temp: PropTypes.string,
  feelsLike: PropTypes.string,
  humidity: PropTypes.string,
};
weatherDetails.defaultProps = {
  description: 'description',
  temp: 'temp',
  feelsLike: 'feels like',
  humidity: 'humidity',
};

export default weatherDetails;
