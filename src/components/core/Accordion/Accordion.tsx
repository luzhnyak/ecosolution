import { FC } from "react";
import css from "./Accordion.module.css";
import Icon from "../Icon/Icon";

interface IProps {
  question: string;
  answer: string;
  open: boolean;
  toggleDetails: () => void;
}

const Accordion: FC<IProps> = ({ question, answer, open, toggleDetails }) => {
  return (
    <>
      <details
        className={css.details}
        open={open}
        onClick={(e) => e.preventDefault()}
      >
        <summary className={css.summary} onClick={toggleDetails}>
          <span>
            <Icon
              className={css.icon}
              name={open ? "icon-minus" : "icon-add"}
              width={28}
              height={28}
            />
          </span>
          <span> {question}</span>
        </summary>
        <p className={css.text}>{answer}</p>
      </details>
    </>
  );
};

export default Accordion;
