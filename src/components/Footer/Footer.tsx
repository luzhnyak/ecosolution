import css from "./Footer.module.css";
import Logo from "../core/Logo/Logo";
import MoveUpBtn from "../core/MoveUpBtn/LearnMoreBtn";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div>
        <Logo />
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </div>
      <div>
        <div className={css.wrapperBtns}>
          <a className={css.socialLink} href="">
            <img
              src="/icons/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
            />
          </a>
          <a className={css.socialLink} href="">
            <img
              src="/icons/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
            />
          </a>
        </div>

        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      </div>
      <div>
        <MoveUpBtn />
        <p>ecosolution © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
