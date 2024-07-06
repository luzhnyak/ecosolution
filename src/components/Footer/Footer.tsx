import css from "./Footer.module.css";
import Logo from "../core/Logo/Logo";
import Icon from "../core/Icon/Icon";
import { useScroll } from "../core/ScrollContext";

const Footer = () => {
  const { mainRef } = useScroll();

  const scrollTo = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={css.footer}>
      <div className={css.topRow}>
        <div className={css.wrapperLogo}>
          <Logo />
        </div>
        <div className={css.wrapperBtns}>
          <a
            className={css.socialLink}
            href="https://www.facebook.com/"
            title="facebook"
            target="_blank"
            rel="nofollow"
          >
            <Icon
              className={css.icon}
              name="icon-facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            className={css.socialLink}
            href="https://www.instagram.com/"
            title="instagram"
            target="_blank"
            rel="nofollow"
          >
            <Icon
              className={css.icon}
              name="icon-instagram"
              width={24}
              height={24}
            />
          </a>
        </div>
        <button
          className={css.btn}
          onClick={() => scrollTo(mainRef)}
          aria-label="Scroll to main"
          type="button"
        >
          <Icon
            className={css.iconUp}
            name="icon-arrow-right"
            width={16}
            height={16}
          />
        </button>
      </div>
      <div className={css.bottomRow}>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        <p>ecosolution © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
