import css from "./Logo.module.css";

function Logo() {
  return (
    <div className={css.wrapper}>
      <img
        className={css.img}
        src="/ecosolution/icons/logo.svg"
        alt="Ecosolution"
        width={31}
        height={18}
      />
      <span className={css.title}>ecosolution</span>
      <span className={css.text}>
        <span className={css.green}>GREEN</span>ERGY FOR LIFE
      </span>
    </div>
  );
}

export default Logo;
