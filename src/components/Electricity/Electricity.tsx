import { useEffect, useState } from "react";
import Title from "../core/Title/Title";
import css from "./Electricity.module.css";

function formatNumberWithDots(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const Electricity = () => {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={css.section}>
      <div className={css.titleWrapper}>
        <Title title="Electricity we produced for all time" />
      </div>

      <p className={css.counter}>
        <span className={css.value}>{formatNumberWithDots(count)}</span>{" "}
        <span className={css.kwh}>kWh</span>
      </p>
    </section>
  );
};

export default Electricity;
