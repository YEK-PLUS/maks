/* eslint-disable max-len */
const sokak = ({ connector }) => async ({ mahalleKoyBaglisiKimlikNo }) => (mahalleKoyBaglisiKimlikNo
  ? connector('/Harita/yolListesi', {
    body: { mahalleKoyBaglisiKimlikNo },
  })
  : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = sokak;
