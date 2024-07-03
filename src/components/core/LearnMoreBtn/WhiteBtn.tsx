import { FC } from "react";
import css from "./WhiteBtn.module.css";
import Icon from "../Icon/Icon";

interface IProps {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const WhiteBtn: FC<IProps> = ({ title, type = "button", onClick }) => {
  return (
    <button className={css.btn} type={type} onClick={onClick}>
      {title}

      <Icon
        className={css.icon}
        name="icon-arrow-right"
        width={32}
        height={32}
      />
    </button>
  );
};

export default WhiteBtn;
