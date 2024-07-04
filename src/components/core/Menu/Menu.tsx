import { createPortal } from "react-dom";
import css from "./Menu.module.css";
import { FC, useEffect, useRef } from "react";
import Icon from "../Icon/Icon";
import { useScroll } from "../ScrollContext";

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
            <button className={css.btnClose} onClick={onClose}>
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
                <button className={css.link} onClick={() => scrollTo(mainRef)}>
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
                <button className={css.link} onClick={() => scrollTo(aboutRef)}>
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
                <button className={css.link} onClick={() => scrollTo(casesRef)}>
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
                <button className={css.link} onClick={() => scrollTo(faqRef)}>
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
              <a className={css.socialLink} href="">
                <Icon
                  className={css.icon}
                  name="icon-facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a className={css.socialLink} href="">
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
