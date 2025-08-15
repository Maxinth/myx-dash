import { useState, useEffect } from "react";

const useSlider = (data: string[], timeInterval = 4000) => {
  const [items] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, timeInterval);

    return () => {
      clearInterval(slider);
    };
  }, [index, timeInterval]);
  return { items, index, setIndex };
};

export const getSlidePosition = (
  index: number,
  itemIndex: number,
  items: string[]
) => {
  let position = "nextSlide";
  if (itemIndex === index) {
    position = "activeSlide";
  }
  if (
    itemIndex === index - 1 ||
    (index === 0 && itemIndex === items.length - 1)
  ) {
    position = "lastSlide";
  }
  return position;
};

export default useSlider;
