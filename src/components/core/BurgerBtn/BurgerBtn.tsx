import css from "./BurgerBtn.module.css";

const BurgerBtn = () => {
  return (
    <button className={css.btn}>
      <img className={css.icon} src="/icons/menu.svg" width={16} height={16} />
    </button>
  );
};

export default BurgerBtn;
