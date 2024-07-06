import { useState } from "react";
import { useScroll } from "../core/ScrollContext";
import Accordion from "../core/Accordion/Accordion";
import Title from "../core/Title/Title";
import ToContactBtn from "../core/ToContactBtn/ToContactBtn";
import css from "./Faq.module.css";
import questions from "../../data/faq.json";

const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const { faqRef } = useScroll();

  const toggleDetails = (id: number | null) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={css.section} ref={faqRef} id="faq">
      <div className={css.titleWrapper}>
        <Title title="Frequently Asked Questions" />
      </div>
      <ul className={css.list}>
        {questions.map(({ id, question, answer }) => {
          return (
            <li key={id}>
              <Accordion
                question={question}
                answer={answer}
                open={openId === id}
                toggleDetails={() => toggleDetails(id)}
              />
            </li>
          );
        })}
      </ul>
      <div className={css.textWrapper}>
        <p className={css.text}>Didn't find the answer to your question?</p>
        <ToContactBtn title="Contact Us" />
      </div>
    </section>
  );
};

export default Faq;
