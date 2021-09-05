/* eslint-disable max-len */
const binaGeo = ({ connector }) => async ({ mahalleKoyBaglisiKimlikNo, binaKimlikNo }) => (mahalleKoyBaglisiKimlikNo && binaKimlikNo ? connector('/Harita/graphicsForbina', {
  body: { mahalleKoyBaglisiKimlikNo, binaKimlikNo },
}) : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = binaGeo;
