const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');
require('dotenv').config();

const WeatherDetails = new GraphQLObjectType({
  name: 'WeatherDetails',
  fields: {
    main: {
      type: GraphQLString,
      resolve: (result) => result.main,
    },
    description: {
      type: GraphQLString,
      resolve: (result) => result.description,
    },
    icon: {
      type: GraphQLString,
      resolve: (result) => result.icon,
    },
  },
});

const TempDetails = new GraphQLObjectType({
  name: 'TempDetails',
  fields: {
    temp: {
      type: GraphQLString,
      resolve: (result) => Math.round(result.temp),
    },
    feelsLike: {
      type: GraphQLString,
      resolve: (result) => Math.round(result.feels_like),
    },
    humidity: {
      type: GraphQLString,
      resolve: (result) => result.humidity,
    },
  },
});

const WeatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: {
    weather: {
      type: GraphQLList(WeatherDetails),
      resolve: (result) => result.weather,
    },
    temperature: {
      type: TempDetails,
      resolve: (result) => result.main,
    },
    city: {
      type: GraphQLString,
      resolve: (result) => result.name,
    },
  },
});

module.exports = WeatherType;
