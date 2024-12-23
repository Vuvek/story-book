import { SvgArray } from './SvgIconsArray';
type IconName = (typeof SvgArray)[number]['name'];
export interface iSvgIconProps {
  /** Name of the icon to render */
  name: IconName;
  /** Height of the icon */
  height?: string | number;
  /** Width of the icon */
  width?: string | number;
  /** Fill color for the icon */
  fill?: string;
  /**Apply custom className */
  className?: string;
}
