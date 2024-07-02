import { FC } from "react";
import css from "./Card.module.css";

interface IProps {
  title: string;
  text: string;
}

const Card: FC<IProps> = ({ title, text }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.titleWrapper}>
        <img src="/icons/global-edit.svg" alt="icon" width={24} height={24} />
        <h3 className={css.title}>{title}</h3>
      </div>

      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Card;
