import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState(true);
  return { user, setUser };
}
