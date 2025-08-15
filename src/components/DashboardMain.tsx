import CashFlowBox from "./CashFlowBox";
import GroupedBarChart from "./LineChart";
import SalesOverview from "./SalesOverview";
import { cashFlowData, listingOverviewData } from "../components/data";
import { Fragment } from "react/jsx-runtime";
import ListingOverviewBox from "./ListingOverviewBox";
import DashboardCarousels from "./DashboardCarousels";

const DashboardMain = () => {
  return (
    <section className="px-2 md:px-4 xl:px-19 bg-[#F9FAFB]   pt-3">
      <h1 className="font-semibold text-pri-black mb-3 text-xl">
        Welcome, Ahmed
      </h1>
      <section className="flex items-start flex-wrap gap-5 h-full">
        <div className="border border-[#E4E4E4] bg-white rounded-2xl w-3/4 flex-1">
          <SalesOverview />
          <hr className="text-[#E4E4E4] w-full" />
          <section className="flex items-center flex-wrap flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 px-2 py-4">
              <GroupedBarChart />
            </div>
            <div className="w-full lg:w-1/2  grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 lg:pb-0 px-4">
              {cashFlowData?.map((item) => (
                <Fragment key={item.text}>
                  <CashFlowBox {...item} />
                </Fragment>
              ))}
            </div>
          </section>
        </div>
        <div className="w-full lg:w-1/4 ml-1 flex flex-col sm:flex-row lg:flex-col justify-center  gap-5 ">
          {listingOverviewData?.map((item) => (
            <Fragment key={item.heading}>
              <ListingOverviewBox {...item} />
            </Fragment>
          ))}
        </div>
      </section>
      <DashboardCarousels />
    </section>
  );
};

export default DashboardMain;
