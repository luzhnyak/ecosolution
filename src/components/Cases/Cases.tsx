import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { useScroll } from "../core/ScrollContext";
import CaseCard from "../core/CaseCard/CaseCard";
import Icon from "../core/Icon/Icon";
import Title from "../core/Title/Title";
import "swiper/css";
import css from "./Cases.module.css";
import cases from "../../data/cases.json";

const Cases = () => {
  const [caseIdx, setCaseIdx] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const { casesRef } = useScroll();

  return (
    <section ref={casesRef} id="cases">
      <div className={css.headerSection}>
        <div className={css.titleWrapper}>
          <Title title="Successful cases of our company" />
        </div>
        <div className={css.headerRight}>
          <div className={css.counter}>
            <span className={css.countCases}>0{caseIdx + 1} </span>
            <span className={css.generalCases}>/05</span>
          </div>
          <div className={css.headerBtnsWrapper}>
            <button
              className={css.btn}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Prev"
              type="button"
            >
              <Icon
                className={css.icon}
                name="icon-arrow-left"
                width={36}
                height={36}
              />
            </button>
            <button
              className={css.btn}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next"
              type="button"
            >
              <Icon
                className={css.icon}
                name="icon-arrow-right"
                width={36}
                height={36}
              />
            </button>
          </div>
        </div>
      </div>
      <div className={css.cardsWrapper}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          onSlideChange={() => setCaseIdx(swiperRef?.current?.realIndex || 0)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          {cases.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CaseCard
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  image={item.img}
                  image2x={item.img2x}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Cases;
