import { FC } from "react";
import sprite from "/icons/icons.svg";

interface IProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: FC<IProps> = ({ name, width = 16, height = 16, className }) => (
  <svg width={width} height={height} className={className}>
    <use xlinkHref={`${sprite}#${name}`} />
  </svg>
);

export default Icon;
