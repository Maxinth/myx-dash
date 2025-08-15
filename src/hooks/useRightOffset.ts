import { useState, useEffect } from "react";

export function useContentRightOffset(selector: string) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const container = document.querySelector(selector);
      if (container) {
        const rect = container.getBoundingClientRect();
        setOffset(window.innerWidth - rect.right);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [selector]);

  return offset;
}
