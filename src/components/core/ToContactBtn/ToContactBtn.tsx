import { FC } from "react";
import css from "./ToContactBtn.module.css";
import Icon from "../Icon/Icon";

interface IProps {
  title: string;
}

const ToContactBtn: FC<IProps> = ({ title }) => {
  return (
    <button className={css.btn}>
      {title}

      <Icon
        className={css.icon}
        name="icon-arrow-down"
        width={14}
        height={14}
      />
    </button>
  );
};

export default ToContactBtn;
