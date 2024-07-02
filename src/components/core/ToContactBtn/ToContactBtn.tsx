import { FC } from "react";
import css from "./ToContactBtn.module.css";

interface IProps {
  title: string;
}

const ToContactBtn: FC<IProps> = ({ title }) => {
  return (
    <button className={css.btn}>
      {title}
      <img
        className={css.icon}
        src="/icons/arrow-down.svg"
        width={14}
        height={14}
      />
    </button>
  );
};

export default ToContactBtn;
