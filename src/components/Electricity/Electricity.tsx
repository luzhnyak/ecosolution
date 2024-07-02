import Title from "../core/Title/Title";
import css from "./Electricity.module.css";

const Electricity = () => {
  return (
    <section className={css.section}>
      <div className={css.titleWrapper}>
        <Title title="Electricity we produced for all time" />
      </div>

      <div className={css.lineWrapper}>
        <div className={css.line}></div>
      </div>

      <p className={css.counter}>
        1.134.147.814 <span className={css.kwh}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
