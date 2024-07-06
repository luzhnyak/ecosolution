import { FC } from "react";
import { useScroll } from "../ScrollContext";
import Icon from "../Icon/Icon";
import css from "./ToContactBtn.module.css";

interface IProps {
  title: string;
}

const ToContactBtn: FC<IProps> = ({ title }) => {
  const { contactsRef } = useScroll();

  const scrollTo = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={css.btn}
      onClick={() => scrollTo(contactsRef)}
      type="button"
    >
      {title}
      <Icon
        className={css.icon}
        name="icon-arrow-down"
        width={14}
        height={14}
      />
    </button>
  );
};

export default ToContactBtn;
