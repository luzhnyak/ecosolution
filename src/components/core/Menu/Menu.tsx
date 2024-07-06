import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useScroll } from "../ScrollContext";
import Icon from "../Icon/Icon";
import css from "./Menu.module.css";

const modalRoot: Element | null = document.querySelector("#root-modal");

interface IProps {
  onClose: () => void;
}

const Menu: FC<IProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { mainRef, aboutRef, faqRef, contactsRef, casesRef } = useScroll();

  const scrollTo = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    const handleClose = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClose);
    document.body.classList.add("body-scroll-lock");
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClose);
      document.body.classList.remove("body-scroll-lock");
    };
  }, [onClose]);

  return modalRoot ? (
    createPortal(
      <div className={css.backdrop}>
        <div className="container">
          <div ref={modalRef} className={css.menu}>
            <button className={css.btnClose} onClick={onClose} type="button">
              <Icon
                className={css.icon}
                name="icon-close"
                width={20}
                height={20}
              />
              close
            </button>
            <ul className={css.list}>
              <li className={css.item}>
                <button
                  className={css.link}
                  onClick={() => scrollTo(mainRef)}
                  type="button"
                >
                  Main
                  <Icon
                    className={css.icon}
                    name="icon-arrow-right-top"
                    width={16}
                    height={16}
                  />
                </button>
              </li>
              <li className={css.item}>
                <button
                  className={css.link}
                  onClick={() => scrollTo(aboutRef)}
                  type="button"
                >
                  About
                  <Icon
                    className={css.icon}
                    name="icon-arrow-right-top"
                    width={16}
                    height={16}
                  />
                </button>
              </li>
              <li className={css.item}>
                <button
                  className={css.link}
                  onClick={() => scrollTo(casesRef)}
                  type="button"
                >
                  Cases
                  <Icon
                    className={css.icon}
                    name="icon-arrow-right-top"
                    width={16}
                    height={16}
                  />
                </button>
              </li>
              <li className={css.item}>
                <button
                  className={css.link}
                  onClick={() => scrollTo(faqRef)}
                  type="button"
                >
                  FAQ
                  <Icon
                    className={css.icon}
                    name="icon-arrow-right-top"
                    width={16}
                    height={16}
                  />
                </button>
              </li>
              <li className={css.item}>
                <button
                  className={css.link}
                  onClick={() => scrollTo(contactsRef)}
                  type="button"
                >
                  Contact Us
                  <Icon
                    className={css.icon}
                    name="icon-arrow-right-top"
                    width={16}
                    height={16}
                  />
                </button>
              </li>
            </ul>
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
          </div>
        </div>
      </div>,
      modalRoot
    )
  ) : (
    <></>
  );
};

export default Menu;
