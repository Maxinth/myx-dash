import GroupedBarChart from "./LineChart";
import SalesOverview from "./SalesOverview";

const DashboardMain = () => {
  return (
    <section className="px-19 bg-[#fbfbfb] pt-3">
      <h1 className="font-semibold text-pri-black mb-3 text-xl">
        Welcome, Ahmed
      </h1>
      <div className="border border-[#E4E4E4] rounded-2xl x">
        <SalesOverview />
        <hr className="text-[#E4E4E4] w-full" />
        <section className="flex items-center">
          <div className="w-1/2 px-2 py-4">
            <GroupedBarChart />
          </div>
          <div className="w-1/2 flex items-center justify-center">h</div>
        </section>
      </div>
    </section>
  );
};

export default DashboardMain;
