import { FC } from "react";
import Icon from "../Icon/Icon";
import css from "./CaseCard.module.css";

interface IProps {
  title: string;
  text: string;
  image: string;
  image2x: string;
  date: string;
}

const CaseCard: FC<IProps> = ({ title, text, image, image2x, date }) => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src={image}
        srcSet={`${image} 1x, ${image2x} 2x`}
        alt={title}
        width={596}
        height={296}
        loading="lazy"
      />
      <div className={css.titleWrapper}>
        <h3 className={css.title}>{title}</h3>
        <button className={css.btn} aria-label="More" type="button">
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
