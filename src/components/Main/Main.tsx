import { useScroll } from "../core/ScrollContext";
import WhiteBtn from "../core/LearnMoreBtn/WhiteBtn";
import css from "./Main.module.css";

const Main = () => {
  const { mainRef, casesRef } = useScroll();

  const scrollTo = (ref: React.RefObject<HTMLDivElement> | null) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={css.section} ref={mainRef}>
      <div className={css.headerSection}>
        <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
        <div className={css.headerTextWrapper}>
          <p className={css.headerText}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <div className={css.btnWrapper}>
            <WhiteBtn title="Learn more" onClick={() => scrollTo(casesRef)} />
          </div>
        </div>
      </div>
      <div className={css.subHeader}>
        <span>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</span>
        <div className={css.subHeaderRight}>
          <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          <span className={css.ecosolution}>ecosolution © 2023</span>
        </div>
      </div>
      <picture>
        <source
          srcSet="/ecosolution/imgs/about/wind-turbine-clean-energy.jpg 1x, 
                  /ecosolution/imgs/about/wind-turbine-clean-energy@2x.jpg 2x"
          media="(min-width:1280px)"
        />
        <source
          srcSet="/ecosolution/imgs/about/tablet-wind-turbine-clean-energy.jpg 1x, 
                  /ecosolution/imgs/about/tablet-wind-turbine-clean-energy@2x.jpg 2x"
          media="(min-width:768px)"
        />
        <source
          srcSet="/ecosolution/imgs/about/mobile-wind-turbine-clean-energy.jpg 1x, 
                  /ecosolution/imgs/about/mobile-wind-turbine-clean-energy@2x.jpg 2x"
          media="(max-width:767px)"
        />
        <img
          className={css.img}
          src="/ecosolution/imgs/about/wind-turbine-clean-energy.jpg"
          srcSet="/ecosolution/imgs/about/wind-turbine-clean-energy.jpg 1x, /ecosolution/imgs/about/wind-turbine-clean-energy@2x.jpg 2x"
          alt="wind turbine clean energy"
          width={1240}
          height={524}
        />
      </picture>
    </section>
  );
};

export default Main;
