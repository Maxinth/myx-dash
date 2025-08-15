import { Fragment } from "react/jsx-runtime";
import { mostClicked, matchAndMakeCurrent, mostWatchListed } from "./data";
import CircleControls from "./CircleControls";
import useSliderAndGetCurrentValues, {
  itemPosition,
  type ItemPosition,
} from "../hooks/useSliderAndGetCurrentValues";

interface IImageItem {
  src: string;
  matchCurrentItem: (itemIndex: number) => "current" | "";
  currentIndex: number;
  itemPosition: ItemPosition;
  data: string[];
  index: number;
  itemIndex: number;
}
const DashboardCarousels = () => {
  return (
    <section className="py-5 grid grid-cols-3 gap-4 h-[40vh] bg-[#F9FAFB]">
      <CarouselItem data={mostClicked} interval={3000} />
      <CarouselItem data={mostWatchListed} interval={4000} />
      {/* <CarouselItem data={mostWatchListed} interval={4000} /> */}
    </section>
  );
};

const ImageItem = ({
  src,
  itemPosition,
  data,
  itemIndex,
  index,
}: IImageItem) => {
  const position = itemPosition(index, itemIndex, data);

  return (
    <img
      src={src}
      alt="carousel-item"
      className={`absolute top-0 left-0 right-0 bottom-0 transition-all ease-in-out duration-700 ${
        position === "activeSlide" ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

const CarouselItem = ({
  data,
  interval = 4000,
}: {
  data: string[];
  interval: number;
}) => {
  const { items, index, makeCurrentSlide } = useSliderAndGetCurrentValues(
    data,
    interval
  );
  const { matchCurrentItem } = matchAndMakeCurrent(index, makeCurrentSlide);
  return (
    <div className="relative">
      <div className="flex items-center relative ">
        {items?.map((item, itemIndex) => (
          <Fragment key={itemIndex}>
            <ImageItem
              index={index}
              src={item}
              currentIndex={index}
              matchCurrentItem={matchCurrentItem}
              itemPosition={itemPosition}
              itemIndex={itemIndex}
              data={items}
            />
          </Fragment>
        ))}
      </div>
      <CircleControls data={items} setIndex={makeCurrentSlide} index={index} />
    </div>
  );
};

export default DashboardCarousels;
