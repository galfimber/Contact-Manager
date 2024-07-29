import "./contactForm.css";
import send from "./../helpers/send";

const ContactForm = ({ contacts, setContacts, id, setid }) => {
  const newUser = {};

  const addToList = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      newUser[input.name] = input.value;
      input.value = "";
      newUser.id = id;
    });
    setid(id + 1);    //Увеличиваем счетчик id (реализовано так, потому что при удалении пользователя новый добавлялся бы с id, который уже существует)

    setContacts([...contacts, newUser]);  //Добавляем новый контакт в список всех контактов

    send(newUser, "Добавлен новый");    //Отправляем в бота оповещение о новом контакте
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
          <input name="name" type="text" />
        </label>
        <label>
          Ваша фамилия:
          <input name="surname" type="text" />
        </label>
        <label>
          Ваш телефон: <input name="tel" type="text" />
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
