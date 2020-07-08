const axios = require('axios');

const testJSONUrl = 'https://jsonplaceholder.typicode.com/';

const testGet = (params) => {
  const endpoint = `/${params.join('/')}`;

  const options = {
    method: 'get',
    url: endpoint,
    baseURL: testJSONUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  };

  return axios(options)
    .then((res) => res.data)
    .catch((er) => {
      console.log('[schema] er: ;', er);
      throw (er);
    });
};

module.exports = testGet;
