# luthier

> My smashing module

## Install

```
$ npm install luthier
```

## Usage

```js
import luthier from 'luthier';

luthier('unicorns');
//=> 'unicorns & rainbows'
```

## API

### luthier(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.

## CLI

```
$ npm install --global luthier
```

```
$ luthier --help

  Usage
    luthier [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ luthier
    unicorns & rainbows
    $ luthier ponies
    ponies & rainbows
```
