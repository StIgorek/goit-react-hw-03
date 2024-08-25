import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input type="input" className={css.input} />
    </div>
  );
}
