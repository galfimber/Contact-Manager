import { useState } from "react";

export function useSurname() {
  const [surname, setSurname] = useState("");
  return { surname, setSurname };
}
