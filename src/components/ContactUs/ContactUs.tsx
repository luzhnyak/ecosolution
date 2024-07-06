import { useScroll } from "../core/ScrollContext";
import ContactForm from "../core/ContactForm/ContactForm";
import Icon from "../core/Icon/Icon";
import Title from "../core/Title/Title";
import css from "./ContactUs.module.css";

const ContactUs = () => {
  const { contactsRef } = useScroll();

  return (
    <section className="section" ref={contactsRef} id="contacts">
      <div className={css.sectionWrapper}>
        <div className={css.titleWrapper}>
          <Title title="Contact us" />
        </div>
        <div className={css.leftWrapper}>
          <div className={css.contactItem}>
            <p className={css.contactTitle}>Phone:</p>
            <a href="tel:+380981234567" className={css.contactValue}>
              <Icon
                className={css.icon}
                name="icon-call"
                width={24}
                height={24}
              />
              38 (098) 12 34 567
            </a>
            <a href="tel:+380931234567" className={css.contactValue}>
              <Icon
                className={css.icon}
                name="icon-call"
                width={24}
                height={24}
              />
              38 (093) 12 34 567
            </a>
          </div>

          <div className={css.contactItem}>
            <p className={css.contactTitle}>E-mail:</p>
            <a
              href="mailto:office@ecosolution.com"
              className={css.contactValue}
            >
              <Icon
                className={css.icon}
                name="icon-sms"
                width={24}
                height={24}
              />
              office@ecosolution.com
            </a>
          </div>
          <div className={css.contactItem}>
            <p className={css.contactTitle}>Address:</p>
            <p className={css.contactValue}>
              <Icon
                className={css.icon}
                name="icon-map"
                width={24}
                height={24}
              />
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </p>
          </div>
          <div className={css.contactItem}>
            <p className={css.contactTitle}>Social Networks:</p>
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
        <div className={css.rightWrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
