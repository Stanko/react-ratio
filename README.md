# React aspect ratio component

[![npm version](https://img.shields.io/npm/v/react-ratio.svg?style=flat-square)](https://www.npmjs.com/package/react-ratio)
[![npm downloads](https://img.shields.io/npm/dm/react-ratio.svg?style=flat-square)](https://www.npmjs.com/package/react-ratio)

Small component that allows you to create responsive elements that will keep their ratio on different screen sizes.

It uses standard [CSS *hack*](https://codepen.io/stanko/pen/EoJLNq) to achieve it.
Please not that `Ratio` ads wrapper element which makes things easier in certain scenarios.

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

| Prop             | Default | |
|------------------|---------|
| ratio            | `1`     | Aspect ratio value. Example: For `16:9` ratio, pass `16 / 9`. Zero will default it back to one.
| className        | `''`    | Wrapper element class name
| ratioClassName   | `''`    | Helper div class name.
| contentClassName | `''`    | Content div class name
| style            | `{}`    | Object with CSS styles for the wrapper element. By default it adds `display: block` but it can be overridden.
| tagName          | `'div'` | HTML element to be used for the wrapper element. You can pass `a` or `aside`.

All other props will be pass to the wrapper element. This is useful for passing accessibility props like `aria-label` or `tabIndex`.

## License

[MIT](https://github.com/Stanko/react-ratio/blob/master/LICENSE)
