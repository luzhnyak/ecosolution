import Card from "../core/Card/Card";
import Title from "../core/Title/Title";
import css from "./Values.module.css";

const Values = () => {
  return (
    <section className={css.section}>
      <div className={css.headerSection}>
        <div className={css.titleWrapper}>
          <Title title="Main values of our company" />
        </div>
        <div className={css.headerTextWrapper}>
          <p className={css.headerText}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </p>
        </div>
      </div>
      <div className={css.cardWrapper}>
        <Card
          title="Openness"
          text="to the world, people, new ideas and projects"
          icon="icon-maximize-circle"
        />
        <Card
          title="Responsibility"
          text="we are aware that the results of our work have an impact on our lives and the lives of future generations"
          icon="icon-global-edit"
        />
        <img
          className={css.img}
          src="/imgs/values/wind-farms-fields 1.jpg"
          alt=""
          width={596}
        />

        <img
          className={css.img}
          src="/imgs/values/man-worker-firld-by-solar-panels 1.jpg"
          alt=""
          width={596}
        />
        <Card
          title="Innovation"
          text="we use the latest technology to implement non-standard solutions"
          icon="icon-cpu-charge"
        />
        <Card
          title="Quality"
          text="we do not strive to be the first among others, but we want to be the best in our business"
          icon="icon-ranking"
        />
      </div>
    </section>
  );
};

export default Values;
