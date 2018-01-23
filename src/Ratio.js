import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Omits "keysToOmit" from "object"
export function omit(object, keysToOmit) {
  const result = {};

  Object.keys(object).forEach(key => {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  });

  return result;
}

const PROPS_TO_OMIT = [
  'children',
  'contentClassName',
  'ratio',
  'ratioClassName',
  'style',
  'tagName',
];

const CONTENT_DIV_STYLE = {
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%',
};

const RATIO_DIV_STYLE = {
  height: 0,
  position: 'relative',
  width: '100%',
};

export default class Ratio extends Component {
  render() {
    const {
      children,
      className,
      contentClassName,
      ratio,
      ratioClassName,
      style,
      tagName,
    } = this.props;

    const Tag = tagName;

    const cssStyle = {
      display: 'block',
      ...style,
    };

    const paddingTop = ratio === 0 ? 100 : 100 / ratio;

    return (
      <Tag
        { ...omit(this.props, PROPS_TO_OMIT) }
        className={ `Ratio ${ className }` }
        style={ cssStyle }
      >
        <div
          className={ `Ratio-ratio ${ ratioClassName }` }
          style={ {
            ...RATIO_DIV_STYLE,
            paddingTop: `${ paddingTop }%`,
          } }
        >
          <div
            className={ `Ratio-content ${ contentClassName }` }
            style={ CONTENT_DIV_STYLE }
          >
            { children }
          </div>
        </div>
      </Tag>
    );
  }
}

Ratio.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  ratio: PropTypes.number,
  ratioClassName: PropTypes.string,
  style: PropTypes.object,
  tagName: PropTypes.string,
};

Ratio.defaultProps = {
  children: null,
  className: '',
  contentClassName: '',
  ratio: 1,
  ratioClassName: '',
  style: {},
  tagName: 'div',
};
