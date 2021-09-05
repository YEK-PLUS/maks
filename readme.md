# MAKS Lib

# Installing

```bash
npm install @yek-plus/maks
```

# Usage

```js
const maks = require("@yek-plus/maks");
maks()
  .get.token()
  .then(({ token, cookieToken }) => {
    console.log({ token, cookieToken });
    maks({
      token,
      cookieToken,
    })
      .get.adres({
        // ilKimlikNo: 35,
        // ilceKimlikNo: 1819,
        // mahalleKoyBaglisiKimlikNo: 41284,
        // yolKimlikNo: 741296,
        // binaKimlikNo: 281644377,
        bagimsizBolumAdresNo: 1583845852,
      })
      .then(console.log);
  });
```

# Options

| property    | type       | required | default            | description                  |
| ----------- | ---------- | -------- | ------------------ | ---------------------------- |
| fetch       | `function` | false    | node-fetch package | request fetch function       |
| token       | `string`   | true     | null               | MAKS System API Token        |
| cookieToken | `string`   | true     | null               | MAKS System API Cookie Token |

# Methods

## get

---

### Token

### Usage

```js
maks().get.token();
```

#### Input

| property | type | required | default | description |
| -------- | ---- | -------- | ------- | ----------- |


#### Response

```js
const response = {
  token: String,
  cookieToken: String,
};
```

---

### Il

### Usage

```js
maks({ token, cookieToken }).get.il();
```

#### Input

| property | type | required | default | description |
| -------- | ---- | -------- | ------- | ----------- |


#### Response

```js
const response = [
  {
    ilKayitNo: Number,
    adi: String,
    kimlikNo: Number,
    bilesenAdi: String,
  },
];
```

---

### Ilce

### Usage

```js
maks({ token, cookieToken }).get.ilce({ ilKimlikNo: 35 });
```

#### Input

| property   | type     | required | default | description        |
| ---------- | -------- | -------- | ------- | ------------------ |
| ilKimlikNo | `number` | true     | null    | Il Kimlik Numarası |

#### Response

```js
const response = [
  {
    ilceKayitNo: Number,
    adi: String,
    kimlikNo: Number,
    bilesenAdi: String,
    ilKimlikNo: Number,
    ilceKimlikNo: Number,
  },
];
```

---

### Mahalle

### Usage

```js
maks({ token, cookieToken }).get.mahalle({ ilceKimlikNo: 1819 });
```

#### Input

| property     | type     | required | default | description          |
| ------------ | -------- | -------- | ------- | -------------------- |
| ilceKimlikNo | `number` | true     | null    | Ilce Kimlik Numarası |

#### Response

```js
const response = [
  {
    koyAdi: String,
    koyKayitNo: Number,
    koyKurumBelediyeTur: Number,
    mahalleTur: Number,
    bilesenAdi: String,
    adi: String,
    kimlikNo: Number,
  },
];
```

---

### Sokak

### Usage

```js
maks({ token, cookieToken }).get.sokak({ mahalleKoyBaglisiKimlikNo: 41284 });
```

#### Input

| property                  | type     | required | default | description             |
| ------------------------- | -------- | -------- | ------- | ----------------------- |
| mahalleKoyBaglisiKimlikNo | `number` | true     | null    | Mahalle Kimlik Numarası |

#### Response

```js
const response = [
  {
    mahalleKayitNo: Number,
    turKod: Number,
    bilesenAdi: String,
    adi: String,
    kimlikNo: Number,
  },
];
```

---

### Bina

### Usage

```js
maks({ token, cookieToken }).get.bina({
  mahalleKoyBaglisiKimlikNo: 41284,
  yolKimlikNo: 741296,
});
```

#### Input

| property                  | type     | required | default | description             |
| ------------------------- | -------- | -------- | ------- | ----------------------- |
| mahalleKoyBaglisiKimlikNo | `number` | true     | null    | Mahalle Kimlik Numarası |
| yolKimlikNo               | `number` | true     | null    | Sokak Kimlik Numarası   |

#### Response

```js
const response = [
  {
    bagimsizBolumler: Unknow,
    disKapiNo1: Number,
    disKapiNo2: Unknow,
    maksBinaNumaratajTipi: Number,
    esKayitNo: Unknow,
    maksBinaDurum: Number,
    postaKodu: Unknow,
    binaNo: Number,
    binaTur: Number,
    binaYapiTipi: Number,
    csbmKayitNo: Number,
    ada: String,
    pafta: String,
    parsel: String,
    note: Unknow,
    yolUstuKatSayisi: Number,
    yolAltiKatSayisi: Number,
    siteAdi: Unknow,
    blokAdi: Unknow,
    disKapiNoFormatted: String,
    bilesenAdi: String,
    adi: Unknow,
    kimlikNo: Number,
  },
];
```

---

### Kapi

### Usage

```js
maks({ token, cookieToken }).get.kapi({
  mahalleKoyBaglisiKimlikNo: 41284,
  yolKimlikNo: 741296,
  binaKimlikNo: 281644377,
});
```

#### Input

| property                  | type     | required | default | description             |
| ------------------------- | -------- | -------- | ------- | ----------------------- |
| mahalleKoyBaglisiKimlikNo | `number` | true     | null    | Mahalle Kimlik Numarası |
| yolKimlikNo               | `number` | true     | null    | Sokak Kimlik Numarası   |
| binaKimlikNo              | `number` | true     | null    | Bina Kimlik Numarası    |

#### Response

```js
const response = [
  {
    adresNo: Number,
    icKapiNo: String,
    yapiKullanimAmac: Number,
    maksBbTip: Number,
    maksBbDurum: Number,
    katNo: String,
    binaNo: Unknow,
    binaKayitNo: Number,
    disKapiNo: Unknow,
    ada: Unknow,
    pafta: Unknow,
    parsel: Unknow,
    siteAdi: Unknow,
    blokAdi: Unknow,
    postaKodu: Unknow,
    maksBinaNumaratajTipi: Unknow,
    acikAdresModel: Unknow,
    tapuBagimsizBolumNo: Unknow,
    bilesenAdi: String,
    yapiKullanimAmacFormatted: String,
    maksBbTipFormatted: String,
    maksBbDurumFormatted: String,
    maksBinaNumaratajTipiFormatted: String,
    adi: String,
    kimlikNo: Number,
  },
];
```

---

### Adres

### Usage

```js
maks({ token, cookieToken }).get.adres({
  bagimsizBolumAdresNo: 1583845852,
});
```

#### Input

| property             | type     | required | default | description                    |
| -------------------- | -------- | -------- | ------- | ------------------------------ |
| bagimsizBolumAdresNo | `number` | true     | null    | Bağımsız Bölüm Kimlik Numarası |

#### Response

```js
const response = {
  adresNo: Number,
  icKapiNo: String,
  yapiKullanimAmac: Number,
  maksBbTip: Number,
  maksBbDurum: Number,
  katNo: String,
  binaNo: Number,
  binaKayitNo: Number,
  disKapiNo: String,
  ada: String,
  pafta: String,
  parsel: String,
  siteAdi: Unknow,
  blokAdi: Unknow,
  postaKodu: Unknow,
  maksBinaNumaratajTipi: Number,
  acikAdresModel: {
    bagimsizBolumKayitNo: Number,
    adresNo: Number,
    maksBbDurum: Number,
    yapiKullanimAmac: Number,
    yapiKullanimAmacBsKod: Number,
    bbNitelikDetayKod: Unknow,
    icKapiNo: String,
    katNo: String,
    binaKayitNo: Number,
    binaNo: Number,
    binaNitelikKod: Number,
    maksBinaNumaratajTipi: Number,
    maksBinaDurum: Number,
    binaTur: Number,
    maksBinaYapiTipi: Number,
    disKapiNo1: String,
    disKapiNo2: Unknow,
    postaKodu: Unknow,
    blokAdi: Unknow,
    siteAdi: Unknow,
    ada: String,
    pafta: String,
    parsel: String,
    csbmKayitNo: Number,
    csbmAdi: String,
    csbmGelismislikKod: Number,
    csbmTurKod: Number,
    mahalleKayitNo: Number,
    mahalleAdi: String,
    mahalleTipKod: Number,
    koyKayitNo: Number,
    koyAdi: String,
    ilceKayitNo: Number,
    ilceAdi: String,
    mernisIlceKod: Number,
    ilKayitNo: Number,
    ilKodu: Number,
    ilAdi: String,
    acikAdresAciklama: String,
    disKapiNoFormatted: String,
  },
  tapuBagimsizBolumNo: Unknow,
  bilesenAdi: String,
  yapiKullanimAmacFormatted: String,
  maksBbTipFormatted: String,
  maksBbDurumFormatted: String,
  maksBinaNumaratajTipiFormatted: String,
  adi: String,
  kimlikNo: Number,
};
```

---

### Bina Geo

### Usage

```js
maks({ token, cookieToken }).get.binaGeo({
  mahalleKoyBaglisiKimlikNo: 41284,
  binaKimlikNo: 281644377,
});
```

#### Input

| property                  | type     | required | default | description             |
| ------------------------- | -------- | -------- | ------- | ----------------------- |
| mahalleKoyBaglisiKimlikNo | `number` | true     | null    | Mahalle Kimlik Numarası |
| binaKimlikNo              | `number` | true     | null    | Bina Kimlik Numarası    |

#### Response

```js
const response = {
  success: Boolean,
  message: String,
  result: {
    x: Number,
    y: Number,
    spatialReference: { wkid: Number, latestWkid: Number },
    geometryType: String,
  },
};
```

# Todo

- [ ] Write Tests
