import css from "./Header.module.css";
import BurgerBtn from "../core/BurgerBtn/BurgerBtn";

import Logo from "../core/Logo/Logo";
import ToContactBtn from "../core/ToContactBtn/ToContactBtn";

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.wrapperBtns}>
        <BurgerBtn />
        <ToContactBtn title="Get in touch" />
      </div>
    </header>
  );
};

export default Header;
