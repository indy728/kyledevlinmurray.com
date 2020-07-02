import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';
import { Query } from 'react-apollo';
import { BounceTrioSpinner } from 'components/UI';
import query from './WeatherComponents/query';
import { WeatherIcon, WeatherDetails } from './WeatherComponents';

const Wrapper = styled.div`

  @media ${device.sm} {}


  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const WeatherRow = styled.div`
  flex-direction: row;
  
  @media ${device.maxSm} {
    > :not(:first-child) {
      margin-left: 2rem;
    }
  }
`;

const CityRow = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 150%;
`;

const WeatherComponents = () => {
  const weatherModule = (
    <Query query={query} variables={{ zipcode: '94122' }}>
      {({ loading, error, data }) => {
        if (loading) return <BounceTrioSpinner />;
        if (error) return <div>error</div>;
        const { weather, temperature, city } = data.getWeather;
        const { main, description, icon } = weather[0];
        const { temp, feelsLike, humidity } = temperature;

        return (
          <>
            <WeatherRow>
              <WeatherIcon icon={icon} alt={main} />
              <WeatherDetails
                description={description}
                temp={temp}
                feelsLike={feelsLike}
                humidity={humidity}
              />
            </WeatherRow>
            <CityRow>
              {city}
            </CityRow>
          </>
        );
      }}
    </Query>
  );

  return (
    <Wrapper>
      {weatherModule}
    </Wrapper>
  );
};

WeatherComponents.propTypes = {
};

export default WeatherComponents;
