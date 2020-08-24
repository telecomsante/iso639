"use strict";

(function (exports) {
  var languages = [{
    name: 'Afar',
    originalName: 'Afaraf',
    iso6391: 'aa',
    iso6392: 'aar',
    iso6393: 'aar'
  }, {
    name: 'Abkhaz',
    originalName: 'Аҧсуа',
    iso6391: 'ab',
    iso6392: 'abk',
    iso6393: 'abk'
  }, {
    name: 'Afrikaans',
    originalName: 'Afrikaans',
    iso6391: 'af',
    iso6392: 'afr',
    iso6393: 'afr'
  }, {
    name: 'Albanian',
    originalName: 'Shqip',
    iso6391: 'sq',
    iso6392: 'alb/sqi',
    iso6393: 'sqi'
  }, {
    name: 'Amharic',
    originalName: 'አማርኛ',
    iso6391: 'am',
    iso6392: 'amh',
    iso6393: 'amh'
  }, {
    name: 'Arabic',
    originalName: 'العربية',
    iso6391: 'ar',
    iso6392: 'ara',
    iso6393: 'ara'
  }, {
    name: 'Aragonese',
    originalName: 'Aragonés',
    iso6391: 'an',
    iso6392: 'arg',
    iso6393: 'arg'
  }, {
    name: 'Armenian',
    originalName: 'Հայերեն լեզու',
    iso6391: 'hy',
    iso6392: 'arm/hye',
    iso6393: 'hye'
  }, {
    name: 'Azerbaijani',
    originalName: 'Azərbaycanca',
    iso6391: 'az',
    iso6392: 'aze',
    iso6393: 'aze'
  }, {
    name: 'Bambara',
    originalName: 'bamanankan',
    iso6391: 'bm',
    iso6392: 'bam',
    iso6393: 'bam'
  }, {
    name: 'Belarusian',
    originalName: 'Беларуская мова',
    iso6391: 'be',
    iso6392: 'bel',
    iso6393: 'bel'
  }, {
    name: 'Bosnian',
    originalName: 'Bosanski jezik',
    iso6391: 'bs',
    iso6392: 'bos',
    iso6393: 'bos'
  }, {
    name: 'Bulgarian',
    originalName: 'български език',
    iso6391: 'bg',
    iso6392: 'bul',
    iso6393: 'bul'
  }, {
    name: 'Burmese',
    originalName: 'မျန္မာစာ',
    iso6391: 'my',
    iso6392: 'bur/mya',
    iso6393: 'mya'
  }, {
    name: 'Catalan',
    originalName: 'Català',
    iso6391: 'ca',
    iso6392: 'cat',
    iso6393: 'cat'
  }, {
    name: 'Chinese',
    originalName: '中文',
    iso6391: 'zh',
    iso6392: 'chi/zho',
    iso6393: 'zho'
  }, {
    name: 'Corsican',
    originalName: 'Corsu / Lingua corsa',
    iso6391: 'co',
    iso6392: 'cos',
    iso6393: 'cos'
  }, {
    name: 'Czech',
    originalName: 'česky, čeština',
    iso6391: 'cs',
    iso6392: 'cze/ces',
    iso6393: 'ces'
  }, {
    name: 'Danish',
    originalName: 'Dansk',
    iso6391: 'da',
    iso6392: 'dan',
    iso6393: 'dan'
  }, {
    name: 'Dutch, Flemish',
    originalName: 'Nederlands',
    iso6391: 'nl',
    iso6392: 'dut/nld',
    iso6393: 'nld'
  }, {
    name: 'English',
    originalName: 'English',
    iso6391: 'en',
    iso6392: 'eng',
    iso6393: 'eng'
  }, {
    name: 'Estonian',
    originalName: 'Eesti keel',
    iso6391: 'et',
    iso6392: 'est',
    iso6393: 'est'
  }, {
    name: 'Finnish',
    originalName: 'Suomi, Suomen kieli',
    iso6391: 'fi',
    iso6392: 'fin',
    iso6393: 'fin'
  }, {
    name: 'French',
    originalName: 'Français',
    iso6391: 'fr',
    iso6392: 'fre/fra',
    iso6393: 'fra'
  }, {
    name: 'Georgian',
    originalName: 'ქართული ენა (kartuli ena)',
    iso6391: 'ka',
    iso6392: 'geo/kat',
    iso6393: 'kat'
  }, {
    name: 'German',
    originalName: 'Deutsch',
    iso6391: 'de',
    iso6392: 'ger/deu',
    iso6393: 'deu'
  }, {
    name: 'Irish',
    originalName: 'Gaeilge',
    iso6391: 'ga',
    iso6392: 'gle',
    iso6393: 'gle'
  }, {
    name: 'Greek',
    originalName: 'Ελληνικά',
    iso6391: 'el',
    iso6392: 'gre/ell/grc',
    iso6393: 'ell/grc'
  }, {
    name: 'Indi',
    originalName: 'हिन्दी',
    iso6391: 'hi',
    iso6392: 'hin',
    iso6393: 'hin'
  }, {
    name: 'Croatian',
    originalName: 'Hrvatski',
    iso6391: 'hr',
    iso6392: 'hrv',
    iso6393: 'hrv'
  }, {
    name: 'Hungarian',
    originalName: 'Magyar',
    iso6391: 'hu',
    iso6392: 'hun',
    iso6393: 'hun'
  }, {
    name: 'Icelandic',
    originalName: 'íslenska',
    iso6391: 'is',
    iso6392: 'ice/isl',
    iso6393: 'isl'
  }, {
    name: 'Indonesian',
    originalName: 'Bahasa Indonesia',
    iso6391: 'id',
    iso6392: 'ind',
    iso6393: 'ind'
  }, {
    name: 'Italian',
    originalName: 'Italiano',
    iso6391: 'it',
    iso6392: 'ita',
    iso6393: 'ita'
  }, {
    name: 'Javanese',
    originalName: 'Basa Jawa',
    iso6391: 'jv',
    iso6392: 'jav',
    iso6393: 'jav'
  }, {
    name: 'Japanese',
    originalName: '日本語',
    iso6391: 'ja',
    iso6392: 'jpn',
    iso6393: 'jpn'
  }, {
    name: 'Kazakh',
    originalName: 'Қазақ тілі',
    iso6391: 'kk',
    iso6392: 'kaz',
    iso6393: 'kaz'
  }, {
    name: 'Korean',
    originalName: '한국어',
    iso6391: 'ko',
    iso6392: 'kor',
    iso6393: 'kor'
  }, {
    name: 'Lao',
    originalName: 'ພາສາລາວ',
    iso6391: 'lo',
    iso6392: 'lao',
    iso6393: 'lao'
  }, {
    name: 'Latvian',
    originalName: 'Latviešu valoda',
    iso6391: 'lv',
    iso6392: 'lav',
    iso6393: 'lav'
  }, {
    name: 'Lithuanian',
    originalName: 'Lietuvių kalba',
    iso6391: 'lt',
    iso6392: 'lit',
    iso6393: 'lit'
  }, {
    name: 'Luxembourgish, Letzeburgesch',
    originalName: 'Lëtzebuergesch',
    iso6391: 'lb',
    iso6392: 'ltz',
    iso6393: 'ltz'
  }, {
    name: 'Macedonian',
    originalName: 'македонски јазик',
    iso6391: 'mk',
    iso6392: 'mac/mkd',
    iso6393: 'mkd'
  }, {
    name: 'Māori',
    originalName: 'Māori',
    iso6391: 'mi',
    iso6392: 'mao/mri',
    iso6393: 'mri'
  }, {
    name: 'Maltese',
    originalName: 'Malti',
    iso6391: 'mt',
    iso6392: 'mlt',
    iso6393: 'mlt'
  }, {
    name: 'Moldavian',
    originalName: 'лимба молдовеняскэ',
    iso6391: 'mo',
    iso6392: 'mol',
    iso6393: 'mol'
  }, {
    name: 'Mongolian',
    originalName: 'монгол хэл',
    iso6391: 'mn',
    iso6392: 'mon',
    iso6393: 'mon'
  }, {
    name: 'Nepali',
    originalName: 'नेपाली',
    iso6391: 'ne',
    iso6392: 'nep',
    iso6393: 'nep'
  }, {
    name: 'Norwegian',
    originalName: 'Norsk',
    iso6391: 'no',
    iso6392: 'nor/nno/nob',
    iso6393: 'nor'
  }, {
    name: 'Polish',
    originalName: 'Polski',
    iso6391: 'pl',
    iso6392: 'pol',
    iso6393: 'pol'
  }, {
    name: 'Portuguese',
    originalName: 'Português',
    iso6391: 'pt',
    iso6392: 'por',
    iso6393: 'por'
  }, {
    name: 'Romanian',
    originalName: 'Română',
    iso6391: 'ro',
    iso6392: 'rum/ron',
    iso6393: 'ron'
  }, {
    name: 'Russian',
    originalName: 'русский язык',
    iso6391: 'ru',
    iso6392: 'rus',
    iso6393: 'rus'
  }, {
    name: 'Slovak',
    originalName: 'Slovenčina',
    iso6391: 'sk',
    iso6392: 'slo/slk',
    iso6393: 'slk'
  }, {
    name: 'Slovenian',
    originalName: 'Slovenščina',
    iso6391: 'sl',
    iso6392: 'slv',
    iso6393: 'slv'
  }, {
    name: 'Spanish',
    originalName: 'Español',
    iso6391: 'es',
    iso6392: 'spa',
    iso6393: 'spa'
  }, {
    name: 'Serbian',
    originalName: 'српски',
    iso6391: 'sr',
    iso6392: 'scc/srp',
    iso6393: 'srp'
  }, {
    name: 'Swedish',
    originalName: 'Svenska',
    iso6391: 'sv',
    iso6392: 'swe',
    iso6393: 'swe'
  }, {
    name: 'Turkish',
    originalName: 'Türkçe',
    iso6391: 'tr',
    iso6392: 'tur',
    iso6393: 'tur'
  }, {
    name: 'Ukrainian',
    originalName: 'українська мова',
    iso6391: 'uk',
    iso6392: 'ukr',
    iso6393: 'ukr'
  }, {
    name: 'Uzbek',
    originalName: 'O\'zbek, Ўзбек, أۇزبېك',
    iso6391: 'uz',
    iso6392: 'uzb',
    iso6393: 'uzb'
  }, {
    name: 'Vietnamese',
    originalName: 'Tiếng Việt',
    iso6391: 'vi',
    iso6392: 'vie',
    iso6393: 'vie'
  }, {
    name: 'Welsh',
    originalName: 'Cymraeg',
    iso6391: 'cy',
    iso6392: 'wel/cym',
    iso6393: 'cym'
  }];
  exports.iso639 = {
    languages: languages,
    // Get original name by ISO
    getOriginalNameByIso6391: function getOriginalNameByIso6391(code) {
      var _languages$find;

      return (_languages$find = languages.find(function (i) {
        return i.iso6391 === code || i.iso6391.split('/').includes(code);
      })) === null || _languages$find === void 0 ? void 0 : _languages$find.originalName;
    },
    getOriginalNameByIso6392: function getOriginalNameByIso6392(code) {
      var _languages$find2;

      return (_languages$find2 = languages.find(function (i) {
        return i.iso6392 === code || i.iso6392.split('/').includes(code);
      })) === null || _languages$find2 === void 0 ? void 0 : _languages$find2.originalName;
    },
    getOriginalNameByIso6393: function getOriginalNameByIso6393(code) {
      var _languages$find3;

      return (_languages$find3 = languages.find(function (i) {
        return i.iso6393 === code || i.iso6393.split('/').includes(code);
      })) === null || _languages$find3 === void 0 ? void 0 : _languages$find3.originalName;
    },
    // Get name by ISO
    getNameByIso6391: function getNameByIso6391(code) {
      var _languages$find4;

      return (_languages$find4 = languages.find(function (i) {
        return i.iso6391 === code || i.iso6391.split('/').includes(code);
      })) === null || _languages$find4 === void 0 ? void 0 : _languages$find4.name;
    },
    getNameByIso6392: function getNameByIso6392(code) {
      var _languages$find5;

      return (_languages$find5 = languages.find(function (i) {
        return i.iso6392 === code || i.iso6392.split('/').includes(code);
      })) === null || _languages$find5 === void 0 ? void 0 : _languages$find5.name;
    },
    getNameByIso6393: function getNameByIso6393(code) {
      var _languages$find6;

      return (_languages$find6 = languages.find(function (i) {
        return i.iso6393 === code || i.iso6393.split('/').includes(code);
      })) === null || _languages$find6 === void 0 ? void 0 : _languages$find6.name;
    },
    // Get ISO by name or original name
    getIso6391: function getIso6391(name) {
      var _languages$find7;

      return (_languages$find7 = languages.find(function (i) {
        return i.name === name || i.originalName === name;
      })) === null || _languages$find7 === void 0 ? void 0 : _languages$find7.iso6391;
    },
    getIso6392: function getIso6392(name) {
      var _languages$find8;

      return (_languages$find8 = languages.find(function (i) {
        return i.name === name || i.originalName === name;
      })) === null || _languages$find8 === void 0 ? void 0 : _languages$find8.iso6392;
    },
    getIso6393: function getIso6393(name) {
      var _languages$find9;

      return (_languages$find9 = languages.find(function (i) {
        return i.name === name || i.originalName === name;
      })) === null || _languages$find9 === void 0 ? void 0 : _languages$find9.iso6393;
    },
    // Get ISO from an other
    iso6391ToIso6392: function iso6391ToIso6392(code) {
      var _languages$find10;

      return (_languages$find10 = languages.find(function (i) {
        return i.iso6391 === code || i.iso6391.split('/').includes(code);
      })) === null || _languages$find10 === void 0 ? void 0 : _languages$find10.iso6392;
    },
    iso6391ToIso6393: function iso6391ToIso6393(code) {
      var _languages$find11;

      return (_languages$find11 = languages.find(function (i) {
        return i.iso6391 === code || i.iso6391.split('/').includes(code);
      })) === null || _languages$find11 === void 0 ? void 0 : _languages$find11.iso6393;
    },
    iso6392ToIso6391: function iso6392ToIso6391(code) {
      var _languages$find12;

      return (_languages$find12 = languages.find(function (i) {
        return i.iso6392 === code || i.iso6392.split('/').includes(code);
      })) === null || _languages$find12 === void 0 ? void 0 : _languages$find12.iso6391;
    },
    iso6392ToIso6393: function iso6392ToIso6393(code) {
      var _languages$find13;

      return (_languages$find13 = languages.find(function (i) {
        return i.iso6392 === code || i.iso6392.split('/').includes(code);
      })) === null || _languages$find13 === void 0 ? void 0 : _languages$find13.iso6393;
    },
    iso6393ToIso6391: function iso6393ToIso6391(code) {
      var _languages$find14;

      return (_languages$find14 = languages.find(function (i) {
        return i.iso6393 === code || i.iso6393.split('/').includes(code);
      })) === null || _languages$find14 === void 0 ? void 0 : _languages$find14.iso6391;
    },
    iso6393ToIso6392: function iso6393ToIso6392(code) {
      var _languages$find15;

      return (_languages$find15 = languages.find(function (i) {
        return i.iso6393 === code || i.iso6393.split('/').includes(code);
      })) === null || _languages$find15 === void 0 ? void 0 : _languages$find15.iso6392;
    }
  };
})(typeof module !== 'undefined' && module.exports ? module.exports : window);