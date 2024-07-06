import { useScroll } from "../core/ScrollContext";
import Card from "../core/Card/Card";
import Title from "../core/Title/Title";
import css from "./About.module.css";

const About = () => {
  const { aboutRef } = useScroll();

  return (
    <section className="section" ref={aboutRef} id="about">
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
      <ul className={css.list}>
        <li>
          <Card
            title="Openness"
            text="to the world, people, new ideas and projects"
            icon="icon-maximize-circle"
          />
        </li>
        <li>
          <Card
            title="Responsibility"
            text="we are aware that the results of our work have an impact on our lives and the lives of future generations"
            icon="icon-global-edit"
          />
        </li>
        <li className={css.imgItem}>
          <picture>
            <source
              srcSet="/ecosolution/imgs/values/wind-farms-fields.jpg 1x, 
                  /ecosolution/imgs/values/wind-farms-fields@2x.jpg 2x"
              media="(min-width:1280px)"
            />
            <source
              srcSet="/ecosolution/imgs/values/tablet-wind-farms-fields.jpg 1x, 
                  /ecosolution/imgs/values/tablet-wind-farms-fields@2x.jpg 2x"
              media="(max-width:1279px)"
            />
            <img
              className={css.img}
              src="/ecosolution/imgs/values/wind-farms-fields.jpg"
              srcSet="/ecosolution/imgs/values/wind-farms-fields.jpg 1x, /ecosolution/imgs/values/wind-farms-fields@2x.jpg 2x"
              alt="wind farms fields"
              width={596}
              height={339}
              loading="lazy"
            />
          </picture>
        </li>
        <li className={css.imgItem}>
          <picture>
            <source
              srcSet="/ecosolution/imgs/values/man-worker-firld-by-solar-panels.jpg 1x, 
                  /ecosolution/imgs/values/man-worker-firld-by-solar-panels@2x.jpg 2x"
              media="(min-width:1280px)"
            />
            <source
              srcSet="/ecosolution/imgs/values/tablet-man-worker-firld-by-solar-panels.jpg 1x, 
                  /ecosolution/imgs/values/tablet-man-worker-firld-by-solar-panels@2x.jpg 2x"
              media="(max-width:1279px)"
            />
            <img
              className={css.img}
              src="/ecosolution/imgs/values/man-worker-firld-by-solar-panels.jpg"
              srcSet="/ecosolution/imgs/values/man-worker-firld-by-solar-panels.jpg 1x, /ecosolution/imgs/values/man-worker-firld-by-solar-panels@2x.jpg 2x"
              alt="man worker firld by solar panels"
              width={596}
              height={339}
              loading="lazy"
            />
          </picture>
        </li>
        <li>
          <Card
            title="Innovation"
            text="we use the latest technology to implement non-standard solutions"
            icon="icon-cpu-charge"
          />
        </li>
        <li>
          <Card
            title="Quality"
            text="we do not strive to be the first among others, but we want to be the best in our business"
            icon="icon-ranking"
          />
        </li>
      </ul>
    </section>
  );
};

export default About;
