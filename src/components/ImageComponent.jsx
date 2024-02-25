import React from "react";
import PropTypes from "prop-types";

const ImageComponent = (props) => {
  const { src, alt, height, width } = props;
  return <img src={src} alt={alt} height={height} width={width} />;
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default ImageComponent;
