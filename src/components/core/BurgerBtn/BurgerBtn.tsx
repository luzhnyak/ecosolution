import { useState } from "react";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import css from "./BurgerBtn.module.css";

const BurgerBtn = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <button
        className={css.btn}
        onClick={() => setIsShowMenu(true)}
        aria-label="Menu"
        type="button"
      >
        <Icon className={css.icon} name="icon-menu" width={16} height={16} />
      </button>
      {isShowMenu && <Menu onClose={() => setIsShowMenu(false)} />}
    </>
  );
};

export default BurgerBtn;
