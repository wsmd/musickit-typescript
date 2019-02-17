[![Build Status](https://travis-ci.org/wsmd/musickit-typescript.svg?branch=master)](https://travis-ci.org/wsmd/musickit-typescript)
[![License](https://img.shields.io/github/license/wsmd/musickit-typescript.svg)](https://github.com/wsmd/musickit-typescript/blob/master/LICENSE)
[![Current Release](https://img.shields.io/npm/v/musickit-typescript.svg)](https://www.npmjs.com/package/musickit-typescript)

# musickit-typescript

TypeScript type definitions for [MusicKit JS](https://developer.apple.com/documentation/musickitjs).

## Installation

First, install the types in your project:

```sh
# using npm
npm install --save-dev musickit-typescript

# using yarn
yarn add --dev musickit-typescript
```

Then, add `node_modules/musickit-typescript` to your `tsconifg.json` file like so:

<!-- prettier-ignore -->
```json
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules/musickit-typescript",
      "node_modules/@types"
    ]
  }
}
```

This will enable the TypeScript compiler to find and use this typing since it is not installed under `node_modules/@types`.

By default the compiler only looks at `node_modules/@types` for type declarations. If `typeRoots` does not already exist in the `tsconfig.json` file, make sure to include `node_modules/@types` as well.

## Legal

MusicKit and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries.
