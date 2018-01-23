# React aspect ratio component

[![npm version](https://img.shields.io/npm/v/react-ratio.svg?style=flat-square)](https://www.npmjs.com/package/react-ratio)
[![npm downloads](https://img.shields.io/npm/dm/react-ratio.svg?style=flat-square)](https://www.npmjs.com/package/react-ratio)

Small component that allows you to create responsive elements that will keep their ratio on different screen sizes.

It uses standard [CSS *hack*](https://codepen.io/stanko/pen/EoJLNq) to achieve it.
Please note that `Ratio` ads wrapper element which makes things easier in certain scenarios.

[Demo](https://stanko.github.io/react-ratio/)

## Usage

```js
import React, { Component } from 'react';
import Ratio from 'react-ratio';

export default class Example extends Component {
  render() {
    return (
      <Ratio ratio={ 16 / 9 }>
        YOUR CONTENT GOES HERE
      </Ratio>
    );
  }
}
```

## Props

* **ratio**, default `1`

  Aspect ratio value. E.g. for `16:9` ratio, pass `16 / 9`.

  Zero will default it back to one.

* **className**, default `''`

  Wrapper element class name
* **ratioClassName**, default `''`

  Helper div class name.

* **contentClassName**, default `''`

  Content div class name

* **style**, default `{}`

  Object with CSS styles for the wrapper element. By default it adds `display: block` but it can be overridden.

* **tagName**, default `'div'`

  HTML element to be used for the wrapper element. E.g. you can pass `a` or `aside`.

All other props will be pass to the wrapper element. This is useful for passing accessibility props like `aria-label` or `tabIndex`.

## License

[MIT](https://github.com/Stanko/react-ratio/blob/master/LICENSE)
