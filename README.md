# ISO 639

maintainer: Florian Oudard (FOU)

## Introduction

This project aims to provide an ISO 639-2 list of most of the languages spoken.
This project working on nodeJS backend or on a javascript frontend.

### Properties

**languages**

Array of object with all commons available ISO 639 languages

- name: english language name
- original name: original language name
- iso6391: iso639-1 code
- iso6392: iso639-2 code
- iso6393: iso639-3 code

### Methods

**getOriginalNamebyIso6391**
**getOriginalNamebyIso6392**
**getOriginalNamebyIso6393**

Example:

```js
iso639.getOriginalNamebyIso6391('fr');
// expected output: Français
```

**getNamebyIso6391**
**getNamebyIso6392**
**getNamebyIso6393**

Example:

```js
iso639.getNamebyIso6391('fr');
// expected output: French
```

**getIso6391**
**getIso6391**
**getIso6391**

Example:
 
```js
iso639.getIso6391('french');
// expected output: fr
iso639.getIso6392('french');
// expected output: fra/fre
iso639.getIso6392('français');
// expected output: fra/fre
```

### Frontend side

You have acces to an iso639-2 array in the window:

```html
<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>ISO639-2</title>
    </head>
    <body>
        <script src="dist/iso639-2.min.js"></script>
        <script>
            console.log(window.iso639.languages);
            /* expected output:
                [
                    {
                        name: 'Arabic',
                        originalName: 'العربية',
                        iso6391: 'ar',
                        iso6392: 'ara',
                        iso6392: 'ara',
                    },
                    {
                        name: 'English',
                        originalName: 'English',
                        iso6391: 'en',
                        iso6392: 'eng',
                        iso6393: 'eng',
                    },
                    {
                        name: 'French',
                        originalName: 'Français',
                        iso6391: 'fr',
                        iso6392: 'fre/fra',
                        iso6393: 'fra',
                    },
                    {
                        name: 'German',
                        originalName: 'Deutsch',
                        iso6391: 'de',
                        iso6392: 'ger/deu',
                        iso6393: 'deu',
                    },
                    ...
                ]
            */
        </script>
    </body>
</html>
```

or ES6 import:

```js
import iso639 from 'dist/iso639.min.js';

iso639.iso6391ToIso6393('fr');
// expected output: fra
```

### Backend side

```js
const iso639 = require('dist/iso639-2.min.js');

iso639.getLanguageName('fra');
// expected output: French
```

## Contributing

### Development

To install dev dependencies:

```sh
npm ci
```

To generate new production code into dist:

```sh
npm run make
```

## Versionning

```sh
new_version="x.y.z"
git flow release start $new_version
npm version $new_version
# edit any other file / last minute fix
git add .
git commit -m "bump version $new_version"
git fetch origin master:master
export GIT_MERGE_AUTOEDIT=no
git flow release finish \
  --fetch \
  --push \
  --message "$new_version" \
  --showcommands \
  --tagname "$new_version" \
  "$new_version"
unset GIT_MERGE_AUTOEDIT
```
