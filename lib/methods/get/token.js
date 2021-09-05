const { default: Jssoup } = require('jssoup');
const { MainPage } = require('../../config');

const token = ({ connector }) => () => connector(MainPage, {}, true)
  .then(async (res) => ({
    res: await res.text(),
    cookies: res.headers.raw()['set-cookie'],
  }))
  .then(({ res, cookies }) => ({ soup: new Jssoup(res), cookies }))
  .then(({ soup, cookies }) => ({
    tokenSoup: soup.find('input', { name: '__RequestVerificationToken' }),
    cookies,
  }))
  .then(({ tokenSoup, cookies }) => ({
    token: tokenSoup.attrs.value,
    cookieToken: cookies[0]
      .replace('__RequestVerificationToken=', '')
      .replace('; path=/; secure; HttpOnly', ''),
  }));
module.exports = token;
