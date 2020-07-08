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

// app.use(express.static('build'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/graphql`));
