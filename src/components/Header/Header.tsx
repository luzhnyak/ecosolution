import BurgerBtn from "../core/BurgerBtn/BurgerBtn";
import css from "./Header.module.css";

import Logo from "../core/Logo/Logo";
import ToContactBtn from "../core/ToContactBtn/ToContactBtn";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.wrapperBtns}>
        <BurgerBtn />
        <div className={css.toContactBtnWrapper}>
          <ToContactBtn title="Get in touch" />
        </div>
      </div>
    </header>
  );
};

export default Header;
