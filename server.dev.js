const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const path = require('path');

const TestSchema = require('./server/schema');

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: TestSchema,
  graphiql: true,
}));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/graphql`));
