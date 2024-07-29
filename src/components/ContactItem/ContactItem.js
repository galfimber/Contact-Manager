import "./style.css";
import send from "./../helpers/send";

const ContactItem = ({ contacts, setContacts, contact, user, setUser }) => {
  const newUser = {};
  const editContact = () => {
    if (user) {
      setUser(!user); //Переключаем режим отображения/редактирования
    } else {
      const inputs = document
        .getElementById(contact.id)
        .querySelectorAll("input");

      inputs.forEach((input) => {
        newUser[input.name] = input.value; //Добавляем новые данные контакта
      });
      newUser.id = contact.id;

      const newContacts = contacts.map((newContact) => {
        //Обновляем измененную информацию о контакте
        if (newContact.id === contact.id) {
          return {
            name: newUser.name,
            surname: newUser.surname,
            tel: newUser.tel,
            email: newUser.email,
            id: newUser.id,
          };
        } else {
          return newContact;
        }
      });
      setContacts(newContacts);

      setUser(!user); //Переключаем режим отображения/редактирования
      send(newUser, "Изменен"); //Отправляем в бота оповещение о изменении контакта
    }
  };

  const deleteContact = () => {
    setContacts(contacts.filter((newContact) => newContact.id !== contact.id)); //Удаляем контакт из списка всех контактов
  };

  return user ? ( //Просто вывод пользователя
    <tr>
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.tel}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={editContact}>Редактировать</button>
      </td>
      <td>
        <button onClick={deleteContact}>Удалить</button>
      </td>
    </tr>
  ) : (
    //Открыто редактирование пользователя
    <tr id={contact.id}>
      <td>
        <input name="name" type="text" defaultValue={contact.name} />
      </td>
      <td>
        <input name="surname" type="text" defaultValue={contact.surname} />
      </td>
      <td>
        <input name="tel" type="text" defaultValue={contact.tel} />
      </td>
      <td>
        <input name="email" type="email" defaultValue={contact.email} />
      </td>
      <td>
        <button onClick={editContact}>Сохранить</button>
      </td>
      <td>
        <button onClick={deleteContact}>Удалить</button>
      </td>
    </tr>
  );
};

export default ContactItem;
