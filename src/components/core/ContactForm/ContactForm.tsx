import WhiteBtn from "../LearnMoreBtn/WhiteBtn";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={css.wrapper}>
      <form>
        <WhiteBtn title="Send" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
