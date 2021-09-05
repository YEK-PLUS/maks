const fetch = require('node-fetch');
const connector = require('./connector');
const { get } = require('./methods');

const maks = (options = {}) => {
  const conn = connector({
    fetch: options.fetch || fetch,
    token: options.token,
    cookieToken: options.cookieToken,
  });
  return { get: get({ connector: conn }) };
};
module.exports = maks;
