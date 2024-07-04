import { useState } from "react";
import CaseCard from "../core/CaseCard/CaseCard";
import Icon from "../core/Icon/Icon";
import Title from "../core/Title/Title";
import css from "./Cases.module.css";
import { useScroll } from "../core/ScrollContext";

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
    id: 1,
    title: "Kherson city Private Enterprise “HealthyFarm”",
    text: "Wind power",
    img: "/ecosolution/imgs/cases/beautiful-view-4.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-4@2x.jpg",
    date: "September 2021",
  },
  {
    id: 1,
    title: "Zaporizhia city Private Enterprise “Biotech”",
    text: "Mini nuclear stations",
    img: "/ecosolution/imgs/cases/beautiful-view-5.jpg",
    img2x: "/ecosolution/imgs/cases/beautiful-view-5@2x.jpg",
    date: "May 2021",
  },
];

const Cases = () => {
  const [caseIdx, setCaseIdx] = useState(0);
  const case1 = cases[caseIdx];
  const case2 = cases[caseIdx === 4 ? 0 : caseIdx + 1];

  const { casesRef } = useScroll();

  const caseIncrementHandle = () => {
    let newIdx = caseIdx + 1;
    if (newIdx > 4) newIdx = 0;
    setCaseIdx(newIdx);
  };
  const caseDecrementHandle = () => {
    let newIdx = caseIdx - 1;
    if (newIdx < 0) newIdx = 4;
    setCaseIdx(newIdx);
  };

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
              onClick={caseDecrementHandle}
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
              onClick={caseIncrementHandle}
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
        <CaseCard
          title={case1.title}
          text={case1.text}
          date={case1.date}
          image={case1.img}
          image2x={case1.img2x}
        />
        <div className={css.secondCardWrapper}>
          <CaseCard
            title={case2.title}
            text={case2.text}
            date={case2.date}
            image={case2.img}
            image2x={case2.img2x}
          />
        </div>
      </div>
    </section>
  );
};

export default Cases;
