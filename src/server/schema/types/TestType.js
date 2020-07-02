const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

const TestType = new GraphQLObjectType({
  name: 'Test',
  fields: {
    userId: {
      type: GraphQLInt,
      resolve: (result) => result.userId,
    },
    id: {
      type: GraphQLInt,
      resolve: (result) => result.id,
    },
    title: {
      type: GraphQLString,
      resolve: (result) => result.title,
    },
    completed: {
      type: GraphQLBoolean,
      resolve: (result) => result.completed,
    },
  },
});

module.exports = TestType;
