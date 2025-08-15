import { Fragment } from "react/jsx-runtime";
import initCircle from "../assets/init-circle.svg";
import whiteCircle from "../assets/white-circle.svg";

interface Props {
  data: string[];
  setIndex: (index: number) => void;
  index: number;
}
const CircleControls = ({ data, setIndex, index }: Props) => {
  return (
    <div className="flex items-center justify-center gap-3 absolute top-[269px] left-[180px]">
      {data?.map((_, i) => (
        <Fragment key={i}>
          <img
            src={i === index ? whiteCircle : initCircle}
            alt="init-circle"
            className="scale-200 cursor-pointer"
            onClick={() => setIndex(i)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default CircleControls;
