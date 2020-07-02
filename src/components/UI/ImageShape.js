import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.figure`
  width: ${({ width }) => width};
  height: ${({ height, width }) => (height === '' ? width : height)};
  background-color: ${({ theme, backgroundColor }) => (backgroundColor === 'default' ? theme.palette.white : backgroundColor)};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: all .5s;
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
  }
`;

const Caption = styled.figcaption``;

const shapeTable = {
  box: Box,
  circle: Circle,
};

const imageShape = (props) => {
  const {
    shape, width, height, backgroundColor, src, alt, caption, customTag, className,
  } = props;
  const Shape = shapeTable[shape];
  const captionElement = caption === '' ? null : <Caption>{caption}</Caption>;

  const imageElement = customTag || <img src={src} alt={alt} />;

  return (
    <Shape className={className} width={width} height={height} backgroundColor={backgroundColor}>
      {imageElement}
      {captionElement}
    </Shape>
  );
};

imageShape.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  caption: PropTypes.string,
  customTag: PropTypes.element,
};
imageShape.defaultProps = {
  className: '',
  shape: 'box',
  width: '100%',
  height: '',
  src: 'no source',
  alt: 'no alt',
  backgroundColor: 'default',
  caption: '',
  customTag: null,
};

export default imageShape;
