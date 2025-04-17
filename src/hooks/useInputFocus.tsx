import { useEffect, useRef } from "react";

export function useInputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return inputRef;
}
