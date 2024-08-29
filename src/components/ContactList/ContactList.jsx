import Contact from "../Contact/Contact";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
