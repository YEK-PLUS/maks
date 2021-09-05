/* eslint-disable max-len */
const adres = ({ connector }) => async ({ bagimsizBolumAdresNo }) => (bagimsizBolumAdresNo
  ? connector('/Harita/AcikAdres', {
    body: { bagimsizBolumAdresNo },
  })
  : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = adres;
