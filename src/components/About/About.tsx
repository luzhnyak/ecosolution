import css from "./About.module.css";
import LearnMoreBtn from "../core/LearnMoreBtn/LearnMoreBtn";

const About = () => {
  return (
    <section className={css.section}>
      <div className={css.headerSection}>
        <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.headerTextWrapper}>
          <p className={css.headerText}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <LearnMoreBtn title="Learn more" />
        </div>
      </div>
      <div className={css.subHeader}>
        <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
        <div className={css.subHeaderRight}>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          <span>ecosolution © 2023</span>
        </div>
      </div>
      <img src="/imgs/about/wind-turbine-clean-energy.jpg" />
    </section>
  );
};

export default About;
