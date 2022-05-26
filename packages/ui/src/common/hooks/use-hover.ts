import { Ref, useCallback, useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement = HTMLDivElement>() {
  const [isHover, setHover] = useState(false);
  const ref = useRef<T>(null);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter", onMouseEnter);
      ref.current.addEventListener("mouseleave", onMouseLeave);

      return () => {
        ref.current?.addEventListener("mouseleave", onMouseLeave);
        ref.current?.addEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return { ref, isHover };
}
