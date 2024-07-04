import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./BurgerBtn.module.css";
import Menu from "../Menu/Menu";

const BurgerBtn = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
      <button
        className={css.btn}
        onClick={() => setIsShowMenu(!isShowMenu)}
        aria-label="Menu"
      >
        <Icon className={css.icon} name="icon-menu" width={16} height={16} />
      </button>
      {isShowMenu && <Menu onClose={() => setIsShowMenu(false)} />}
    </>
  );
};

export default BurgerBtn;
