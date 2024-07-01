import css from "./Header.module.css";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

import Logo from "../Logo/Logo";
import ToContactBtn from "../ToContactBtn/ToContactBtn";

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
