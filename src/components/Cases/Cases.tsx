import { useRef, useState } from "react";
import CaseCard from "../core/CaseCard/CaseCard";
import Icon from "../core/Icon/Icon";
import Title from "../core/Title/Title";
import css from "./Cases.module.css";
import { useScroll } from "../core/ScrollContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";

const cases = [
  {
    id: 1,
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    text: "Wind Power for auto field irrigation",
    img: "/ecosolution/imgs/cases/beautiful-view-1.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-1@2x.jpg",
    date: "July 2023",
  },
  {
    id: 2,
    title: "Zhytomyr city Private Enterprise “Bosch”",
    text: "Solar Panels for industrial use",
    img: "/ecosolution/imgs/cases/beautiful-view-2.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-2@2x.jpg",
    date: "November 2023",
  },
  {
    id: 3,
    title: "Rivne city Private Enterprise “Biotech”",
    text: "Thermal modules",
    img: "/ecosolution/imgs/cases/beautiful-view-3.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-3@2x.jpg",
    date: "October 2023",
  },
  {
    id: 4,
    title: "Kherson city Private Enterprise “HealthyFarm”",
    text: "Wind power",
    img: "/ecosolution/imgs/cases/beautiful-view-4.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-4@2x.jpg",
    date: "September 2021",
  },
  {
    id: 5,
    title: "Zaporizhia city Private Enterprise “Biotech”",
    text: "Mini nuclear stations",
    img: "/ecosolution/imgs/cases/beautiful-view-5.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-5@2x.jpg",
    date: "May 2021",
  },
];

const Cases = () => {
  const [caseIdx, setCaseIdx] = useState(0);

  const swiperRef = useRef<SwiperType | null>(null);

  const { casesRef } = useScroll();

  return (
    <section ref={casesRef}>
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
