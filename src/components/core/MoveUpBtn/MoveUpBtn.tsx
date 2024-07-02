import Icon from "../Icon/Icon";
import css from "./MoveUpBtn.module.css";

const MoveUpBtn = () => {
  return (
    <button className={css.btn}>
      <Icon
        className={css.icon}
        name="icon-arrow-right"
        width={16}
        height={16}
      />
    </button>
  );
};

export default MoveUpBtn;
