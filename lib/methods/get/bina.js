/* eslint-disable max-len */
const bina = ({ connector }) => async ({ mahalleKoyBaglisiKimlikNo, yolKimlikNo }) => (mahalleKoyBaglisiKimlikNo && yolKimlikNo
  ? connector('/Harita/binaListesi', {
    body: { mahalleKoyBaglisiKimlikNo, yolKimlikNo },
  })
  : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = bina;
