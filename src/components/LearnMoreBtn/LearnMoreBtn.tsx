import { FC } from "react";
import css from "./LearnMoreBtn.module.css";

interface IProps {
  title: string;
}

const LearnMoreBtn: FC<IProps> = ({ title }) => {
  return (
    <button className={css.btn}>
      {title}
      <div className={css.iconWrapper}>
        <img
          className={css.icon}
          src="/icons/arrow-right.svg"
          width={16}
          height={16}
        />
      </div>
    </button>
  );
};

export default LearnMoreBtn;
