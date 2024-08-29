import css from "../Contact/Contact.module.css";

export default function Contact({ contact: { name, number } }) {
  return (
    <div className={css.container}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button">Delete</button>
    </div>
  );
}
