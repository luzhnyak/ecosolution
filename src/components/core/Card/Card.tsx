import { FC } from "react";
import Icon from "../Icon/Icon";
import css from "./Card.module.css";

interface IProps {
  title: string;
  text: string;
  icon: string;
}

const Card: FC<IProps> = ({ title, text, icon }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <Icon className={css.icon} name={icon} width={24} height={24} />
        <h3 className={css.title}>{title}</h3>
      </div>

      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Card;
