# React i18n example
A simple example to show how the [es2015-i18n-tag](https://github.com/skolmer/es2015-i18n-tag) library
can be used to localize a React application.

## Defining translations
The translation keys are defined using special template literals tags:

```ecmascript 6
i18n`Welcome to React`
````

Just like with the default template literals you can include placeholders:
```ecmascript 6
i18n`Hello ${userName}`
````

The translations for different languages are maintained in JSON files for each language.
If there is no translation file available for a language, the translation keys themselves will
be used as a fallback.

A simple translation file in JSON to translate from english to german might look like this:

```json
{
  "Welcome to React": "Willkommen bei React",
  "Hello ${0}": "Hallo ${0}"
}

``` 

For more advanced use cases please check the official documentation of the es2015-i18n-tag library.

## Tracking translation coverage
There are 3 new scripts in package.json:
* generate-schema: to scan all sources and generate a JSON schema from all found translation keys
* validate-translations: to validate all translation JSON files against the JSON schema to find missing translations
* update-i18n: first runs 'generate-schema' followed by 'validate-translations'

These scripts help to detect missing translations.

## Conclusion
The use of template literals is a convenient way to define translation keys.
All terms that need to be translated simply need to be wrapped within back-ticks and prefixed by the i18n tag.
The library is not React specific, so it can be used within JSX render functions as well as in regular functions.

In addition to the translation feature, the library also supports localization of date and currency formats.

There are however some downsides as well.
The library already exists for a couple of years, however the number of contributors is quite low. 
So there is a higher risk, compared to more popular i18n libraries, for it to become abandoned in the future 

For a small to medium sized application where the translation work is done by the developers in the team themselves,
this i18n library might be worth to take into consideration.

For bigger projects or applications with a lot of text content you should probably take a look at other
libraries which provide a bigger ecosystem (e.g. [i18next](https://github.com/i18next/i18next)).
