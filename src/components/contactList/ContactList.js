import ContactItem from "../ContactItem/ContactItem";

import "./contactList.css";

const ContactList = ({ contacts, setContacts, user, setUser }) => {
  return (
    <section className="contactList">
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
            <th>email</th>
            <th colSpan={2}>Управление</th>
          </tr>
        </thead>

        {contacts.length ? (
          <tbody>
            {contacts.map((contact) => (
              <ContactItem
                contacts={contacts}
                setContacts={setContacts}
                key={contact.id}
                contact={contact}
                user={user}
                setUser={setUser}
              />
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={5}>Пусто</td>
            </tr>
          </tbody>
        )}
      </table>
    </section>
  );
};

export default ContactList;
