/* eslint-disable max-len */
const mahalle = ({ connector }) => async ({ ilceKimlikNo }) => (ilceKimlikNo
  ? connector('/Harita/mahalleKoyBaglisiListesi', {
    body: { ilceKimlikNo },
  })
  : { error: 'missing input' });
/* eslint-enable max-len */

module.exports = mahalle;
