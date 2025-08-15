import RightArrow from "../assets/arrow.svg";
import { Fragment } from "react/jsx-runtime";

interface Props {
  heading: string;
  icon: string;
  stats: {
    name: string;
    value: string;
  }[];
}

const ListingOverviewBox = ({ heading, icon, stats }: Props) => {
  return (
    <div className="border border-[#E4E4E4] rounded-2xl  w-full min-h-[185px] flex-1 ">
      <div className="flex items-center justify-between border-b border-b-[#E4E4E4] px-4 py-[13px]">
        <p className="flex items-center text-sm gap-3">
          <img src={icon} alt="listing" />
          <span className="font-medium">{heading}</span>
        </p>
        <p className="flex items-center text-sm text-[#4545FE] font-medium hover:underline hover:cursor-pointer">
          View all <img src={RightArrow} alt="arrow" className="ml-2" />
        </p>
      </div>
      <div className="bg-white py-5 px-4 rounded-b-2xl flex items-center justify-between gap-6 min-h-[125px]">
        {stats?.map((item) => (
          <Fragment key={item.name}>
            <StatBox {...item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const StatBox = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex flex-col items-start gap-2 ">
      <p className="text-sm text-[#525252] font-medium">{name}</p>
      <p className="text-base xl:text-2xl font-semibold text-[#141414]">
        {value}
      </p>
    </div>
  );
};

export default ListingOverviewBox;
