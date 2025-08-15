const SalesOverview = () => {
  return (
    <div className="flex flex-col gap-4 py-4 px-2 pr-6">
      <div className="flex items-center justify-between">
        <div className="my-3 px-4">
          <h2 className="text-pri-black font-semibold text-xl">
            Sales Overview
          </h2>
          <p className="text-sm font-normal">
            Showing overview Jan 2022 - Sep 2022
          </p>
        </div>
        <button className="outline-none border border-[#E4E4E4] rounded-2xl py-[15.5px] px-9 text-sm font-medium cursor-pointer  transition-all duration-200 ease-in-out hover:bg-[#f1efef]">
          View Transactions
        </button>
      </div>
      <DurationBox />
    </div>
  );
};

const DurationBox = () => {
  return (
    <div className="flex items-center justify-end transition-all duration-200 ease-in-out">
      <span className="py-2 px-5 text-sm cursor-pointer hover:bg-[#e0dddd] rounded-lg  ">
        1 Week
      </span>
      <span className="py-2 px-5 text-sm cursor-pointer hover:bg-[#e0dddd]  rounded-lg  ">
        1 Month
      </span>
      <span className="py-2 px-5 text-sm cursor-pointer hover:bg-[] bg-[#F5F5F5] hover:bg-[#ebeaea] rounded-lg  ">
        1 Year
      </span>
    </div>
  );
};

export default SalesOverview;
