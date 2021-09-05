/* eslint-disable max-len */
const kapi = ({ connector }) => async ({ mahalleKoyBaglisiKimlikNo, binaKimlikNo }) => (mahalleKoyBaglisiKimlikNo && binaKimlikNo
  ? connector('/Harita/bagimsizBolumListesi', {
    body: { mahalleKoyBaglisiKimlikNo, binaKimlikNo },
  })
  : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = kapi;
