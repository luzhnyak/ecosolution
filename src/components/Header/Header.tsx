import { useEffect, useState } from "react";
import BurgerBtn from "../core/BurgerBtn/BurgerBtn";
import Logo from "../core/Logo/Logo";
import ToContactBtn from "../core/ToContactBtn/ToContactBtn";
import css from "./Header.module.css";

const Header = () => {
  const [background, setBackground] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setBackground("#ffffff");
    } else {
      setBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={css.header} style={{ backgroundColor: background }}>
      <div className={css.headerWrapper}>
        <Logo />
        <div className={css.wrapperBtns}>
          <BurgerBtn />
          <div className={css.toContactBtnWrapper}>
            <ToContactBtn title="Get in touch" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
