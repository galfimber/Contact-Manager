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
      {/* 
      <div className="contactTable">
        <div className="contactTable__header">
          <div>Имя</div>
          <div>Фамилия</div>
          <div>Телефон</div>
          <div>email</div>
          <div>Управление</div>
        </div>
        {contacts.length ? (
          <div className="contactTable__contacts">
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
          </div>
        ) : (
          <div className="contactTable__contacts">Пусто</div>
        )}
      </div> */}
    </section>
  );
};

export default ContactList;
