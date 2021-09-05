const qs = require('qs');
const { Base, MainPage } = require('./config');
const cookieGenerate = require('./cookieGenerate');

const connector = ({ fetch, token, cookieToken }) => (url, { body }, raw) => fetch(Base + url, {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest',
    Referer: Base + MainPage,
    __RequestVerificationToken: token,
    Cookie: cookieGenerate({
      __RequestVerificationToken: cookieToken,
      'browser-check': '%22done%22',
    }),
  },
  body: body ? qs.stringify(body) : null,
  method: raw ? 'GET' : 'POST',
}).then((res) => (raw ? res : res.json()));
module.exports = connector;
