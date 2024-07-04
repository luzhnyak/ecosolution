import { FC } from "react";
import css from "./CaseCard.module.css";
import Icon from "../Icon/Icon";

interface IProps {
  title: string;
  text: string;
  image: string;
  date: string;
}

const CaseCard: FC<IProps> = ({ title, text, image, date }) => {
  return (
    <div className={css.wrapper}>
      <img className={css.img} src={image} alt={title} />
      <div className={css.titleWrapper}>
        <h3 className={css.title}>{title}</h3>
        <button className={css.btn}>
          <Icon
            className={css.icon}
            name="icon-arrow-right-top"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className={css.textWrapper}>
        <span className={css.text}>{text}</span>
        <span className={css.date}>{date}</span>
      </div>
    </div>
  );
};

export default CaseCard;
