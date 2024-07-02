import Icon from "../Icon/Icon";
import css from "./BurgerBtn.module.css";

const BurgerBtn = () => {
  return (
    <button className={css.btn}>
      <Icon className={css.icon} name="icon-menu" width={16} height={16} />
    </button>
  );
};

export default BurgerBtn;
