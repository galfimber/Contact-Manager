async function send(contact, startText) {
  const text = `${startText} контакт
Id: ${contact.id}
Имя: ${contact.name}
Фамилия: ${contact.surname}
Телефон: ${contact.tel}
Почта: ${contact.email}`;

  const token = "7196947292:AAFkRm9OcQjL9P40_3F_bBzFEI6J9gJAXC4";
  const chatId = "@ContactManagerTest";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const obj = {
    chat_id: chatId,
    text: text,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  if (response.ok) {
    alert("Contact sent!");
  } else {
    alert("Error!");
  }
}

export default send;
