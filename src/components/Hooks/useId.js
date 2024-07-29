import { useState } from "react";

export function useId() {
  const [id, setid] = useState(1);
  return { id, setid };
}
