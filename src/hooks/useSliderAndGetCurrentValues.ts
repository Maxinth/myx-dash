import useSlider, { getSlidePosition } from "./useSlider";

export type ItemPosition = (
  index: number,
  itemIndex: number,
  items: string[]
) => string;

const useSliderAndGetCurrentValues = (data: string[], interval = 4000) => {
  const { items, index, setIndex } = useSlider(data, interval);

  const makeCurrentSlide = (itemIndex: number) => setIndex(itemIndex);

  const matchCurrentItem = (itemIndex: number) =>
    itemIndex === index ? "current" : "";

  return { items, index, makeCurrentSlide, matchCurrentItem };
};

export const itemPosition: ItemPosition = (
  index: number,
  itemIndex: number,
  items: string[]
) => {
  return getSlidePosition(index, itemIndex, items);
};

export default useSliderAndGetCurrentValues;
