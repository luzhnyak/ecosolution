import { FC } from "react";
import css from "./LearnMoreBtn.module.css";
import Icon from "../Icon/Icon";

interface IProps {
  title: string;
}

const LearnMoreBtn: FC<IProps> = ({ title }) => {
  return (
    <button className={css.btn}>
      {title}
      <div className={css.iconWrapper}>
        <Icon
          className={css.icon}
          name="icon-arrow-right"
          width={16}
          height={16}
        />
      </div>
    </button>
  );
};

export default LearnMoreBtn;
