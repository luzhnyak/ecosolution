import { FC } from "react";
import css from "./Title.module.css";

interface IProps {
  title: string;
}

const Title: FC<IProps> = ({ title }) => {
  return <h2 className={css.title}>{title}</h2>;
};

export default Title;
