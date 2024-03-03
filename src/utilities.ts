import { useLayoutEffect, useState } from "react";

export function useComponentWidth(ref: React.RefObject<HTMLElement>) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const updateSize = () => {
    if (ref && ref.current) {
      const size = ref.current.getBoundingClientRect();
      setSize(size);
      return;
    }
    return;
  };
  useLayoutEffect(() => {
    window.addEventListener("load", updateSize);
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("load", updateSize);
      window.removeEventListener("resize", updateSize);
    };
  });
  return size;
}
