import { useRef, useEffect, useState, RefObject } from "react";

type AnyEvent = MouseEvent | TouchEvent;
interface UseClickOutsideProps {
  ref: RefObject<HTMLElement>;
  handler: (e: AnyEvent) => void;
}

const useClickOutside = (
  ref: UseClickOutsideProps["ref"],
  handler: UseClickOutsideProps["handler"]
) => {
  useEffect(() => {
    const clickOuside = (e: AnyEvent) => {
      const el = ref?.current;

      if (el && !el.contains(e.target as Node)) {
        handler(e);
      }
    };
    window.addEventListener("mousedown", clickOuside);
    window.addEventListener("touchstart", clickOuside);

    return () => {
      window.window.removeEventListener("mousedown", clickOuside);
      window.removeEventListener("touchstart", clickOuside);
    };
  }, [ref, handler]);
};

export default useClickOutside;
