import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
    </div>
  );
}
