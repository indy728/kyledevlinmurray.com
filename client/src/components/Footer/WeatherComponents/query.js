import gql from 'graphql-tag';

const query = gql`
  query GetWeatherComponents($zipcode: String)
  {
    getWeather(zipcode: $zipcode) {
      weather{
        main
        description
        icon
      }
      temperature {
        temp
        feelsLike
        humidity
      }
      city
    }
  }
`;

export default query;
