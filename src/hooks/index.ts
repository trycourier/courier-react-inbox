import { useCallback, useEffect } from "react";

export function useCloseOnClickOut(element: Element, enabled: boolean, close: Function) {
  const handleClick = useCallback((e: MouseEvent) => {
    if (element !== e.target && !element.contains(e.target as Node)) {
      close();
    }
  }, [close, element]);

  useEffect(() => {
    if (enabled && element) {
      document.body.addEventListener("click", handleClick);
    }
    return () => document.body.removeEventListener("click", handleClick);
  }, [element, enabled, handleClick]);
}