import React from 'react';
import { SvgArray } from './SvgIconsArray';
import { iSvgIconProps } from './types';

const SvgIcon: React.FC<iSvgIconProps> = ({
  name,
  height,
  width,
  fill,
  className,
}) => {
  const icon = SvgArray.find((svg) => svg.name === name);

  if (!icon) {
    return null;
  }

  // Use React.cloneElement only if height, width, or fill are provided
  if (height || width || fill || className) {
    return React.cloneElement(icon.svg, {
      height,
      width,
      fill,
      className,
    });
  }

  // Return the icon as-is if no props are passed
  return icon.svg;
};

export default SvgIcon;
