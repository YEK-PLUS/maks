const ilcelers = require('../../data/ilcelers.json');
/* eslint-disable max-len */
// const ilce = ({ connector }) => ({ ilKimlikNo }) => connector('/Harita/ilceListesi', { ilKimlikNo });
const ilce = () => async ({ ilKimlikNo }) => (ilKimlikNo
  ? ilcelers.filter((el) => el.ilKimlikNo === ilKimlikNo)
  : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = ilce;
