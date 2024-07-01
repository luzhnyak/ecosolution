import css from "./MoveUpBtn.module.css";

const MoveUpBtn = () => {
  return (
    <button className={css.btn}>
      <img
        className={css.icon}
        src="/icons/arrow-right.svg"
        width={16}
        height={16}
      />
    </button>
  );
};

export default MoveUpBtn;
