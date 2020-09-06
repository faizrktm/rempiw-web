# Next JS Boilerplate
Scalable foundation with NextJS for developer so you can focus on performance and best practices.

## Pre-Installed and Configured
This Boilerplate contains preinstalled and configured tools.
* NextJS
* Styled Components
* Jest and React Testing Library
* Storybook
* Some basic UI components
* ESlint support
* Internationalization support with next-i18next
* src base path

### Installing
Clone this project and install required dependencies by executing this command on terminal

```
yarn install
```

### Running
To run on development, execute this command on terminal

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result

To run on production mode, execute this command on terminal

```
yarn build && yarn start
```

### Testing
Test codes by executing this command on terminal

```
yarn test
```

To watch changes on test without running multiple yarn test, simply run

```
yarn test --watch
```

## Components
To see components documentation on storybook, kindly run on terminal
```
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) to see the result

## Localization
### Language Availabilities
Currently there is 2 language available which is English (default language) and Indonesia, the namespaces located on:
```
.
└── public
    └── static
        └── locales
            ├── en
            |   └── common.json
            └── id
                └── common.json
```

If you want to add or change the languages, do this:
#### 1. Add Language and Namespace
Add or change namespace on `/public/static/locales` to whatever you want, example de (deutch) with namespace common.json

#### 2. Modify i18n.js
Open i18n.js file on root folder. Modify the other language array to suit your needs.

#### 3. Modify next.config.js
Open next.config.js on root folder. Lookup for `localeSubpaths` object, modify to suit your needs.

Another options is provided on [https://github.com/isaachinman/next-i18next](https://github.com/isaachinman/next-i18next)

### How to use
Usage is very simple, use hook `useLanguage` anywhere inside your page or component. For example:
```
import useLanguage from 'utils/hooks/useLanguage';
...
const { t, language, changeLanguage } = useLanguage();
```
Properties explained:

| key  | value |
| ------------- | ------------- |
| `t`  | `translator function, example usage: t('hello')`  |
| `language`  | `current language selected (example: en)`  |
| `changeLanguage`  | `language changer function, example usage: changeLanguage('id')`  |


## Authors

* **Faiz Azmi Rekatama** - *Initial work* - [faizrktm](https://github.com/faizrktm)
