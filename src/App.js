import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Header from "./components/header/Header";
import { useContacts } from "./components/Hooks/useContacts";
import { useUser } from "./components/Hooks/useUser";
import { useId } from "./components/Hooks/useId";

function App() {
  const contacts = useContacts();   //Хук для добавления контакта в список всех контактов
  const editUser = useUser();   //Хук для редактирования контакта
  const id = useId();   //Хук для определения id нового контакта

  return (
    <div className="App">
      <Header />
      <main className="main">
        <ContactForm {...contacts} {...id} />
        <ContactList {...contacts} {...editUser} />
      </main>
    </div>
  );
}

export default App;
