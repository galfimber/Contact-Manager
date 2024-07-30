import "./contactForm.css";
import send from "./../helpers/send";

const ContactForm = ({ contacts, setContacts, id, setid, name, setName, surname, setSurname }) => {
  const newUser = {};

  const addToList = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      newUser[input.name] = input.value;
      input.value = "";
      newUser.id = id;
    });
    setid(id + 1); //Увеличиваем счетчик id (реализовано так, потому что при удалении пользователя новый добавлялся бы с id, который уже существует)

    setContacts([...contacts, newUser]); //Добавляем новый контакт в список всех контактов

    send(newUser, "Добавлен новый"); //Отправляем в бота оповещение о новом контакте
  };

  const handleChange = (e) => {
    const result = e.target.value.replace(/[^a-zA-Zа-яA-Я]/gi, "");

    if (e.target.name === "name") {
      setName(result);
    } else if (e.target.name === "surname") {
      setSurname(result);
    }
  };

  return (
    <section className="contactForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToList();
        }}
        className="contactForm__form"
      >
        <label>
          Ваше имя:
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Ваша фамилия:
          <input
            name="surname"
            type="text"
            value={surname}
            onChange={handleChange}
          />
        </label>
        <label>
          Ваш телефон: <input name="tel" type="number" />
        </label>
        <label>
          Ваш email:
          <input name="email" type="email" />
        </label>
        <button>Добавить</button>
      </form>
    </section>
  );
};

export default ContactForm;
