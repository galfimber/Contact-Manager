import { useState } from "react";

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  return { contacts, setContacts };
}
