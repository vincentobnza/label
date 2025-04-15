import { useEffect, useRef } from "react";

export const useAutoResizeTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const autoResizeTextarea = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener("input", autoResizeTextarea);
      autoResizeTextarea();

      return () => {
        textarea.removeEventListener("input", autoResizeTextarea);
      };
    }
  }, []);

  return textareaRef;
};
