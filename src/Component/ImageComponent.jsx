import React from "react";
import PropTypes from "prop-types";

const ImageComponent = (props) => {
  const { src, alt, height, width } = props;
  return <img src={src} alt={alt} height={height} width={width} />;
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default ImageComponent;
