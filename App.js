import "./App.css";
import ContactForm from "./src/components/contactForm/ContactForm";
import ContactList from "./src/components/contactList/ContactList";
import Header from "./src/components/header/Header";
import { useContacts } from "./src/components/Hooks/useContacts";
import { useUser } from "./src/components/Hooks/useUser";
import { useId } from "./src/components/Hooks/useId";

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
