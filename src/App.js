import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Header from "./components/header/Header";
import { useContacts } from "./components/Hooks/useContacts";
import { useUser } from "./components/Hooks/useUser";
import { useId } from "./components/Hooks/useId";
import { useName } from "./components/Hooks/useName";
import { useSurname } from "./components/Hooks/useSurname";

function App() {
  const contacts = useContacts(); //Хук для добавления контакта в список всех контактов
  const editUser = useUser(); //Хук для редактирования контакта
  const id = useId(); //Хук для определения id нового контакта
  const name = useName(); //Хук для ввода только букв в поле имя
  const surname = useSurname(); //Хук для ввода только букв в поле фамилия

  return (
    <div className="App">
      <Header />
      <main className="main">
        <ContactForm {...contacts} {...id} {...name} {...surname} />
        <ContactList {...contacts} {...editUser} />
      </main>
    </div>
  );
}

export default App;
