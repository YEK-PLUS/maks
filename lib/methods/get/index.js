const token = require('./token');
const il = require('./il');
const ilce = require('./ilce');
const mahalle = require('./mahalle');
const sokak = require('./sokak');
const bina = require('./bina');
const binaGeo = require('./binaGeo');
const kapi = require('./kapi');
const adres = require('./adres');

module.exports = ({ connector }) => ({
  token: token({ connector }),
  il: il({ connector }),
  ilce: ilce({ connector }),
  mahalle: mahalle({ connector }),
  sokak: sokak({ connector }),
  bina: bina({ connector }),
  binaGeo: binaGeo({ connector }),
  kapi: kapi({ connector }),
  adres: adres({ connector }),
});
