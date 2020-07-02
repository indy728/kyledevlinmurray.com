const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');
const { TestType, WeatherType } = require('./types');
const { testGet, weatherGet } = require('./queries');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getIds: {
      type: TestType,
      args: {
        params: { type: GraphQLList(GraphQLString) },
      },
      resolve: (root, args) => testGet(args.params), // "root" is almost never used
    },
    getWeather: {
      type: WeatherType,
      args: {
        zipcode: { type: GraphQLString },
      },
      resolve: (root, args) => weatherGet(args.zipcode), // "root" is almost never used
    },
  },
});

const TestSchema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = TestSchema;
