import CashFlowBox from "./CashFlowBox";
import GroupedBarChart from "./LineChart";
import SalesOverview from "./SalesOverview";
import { cashFlowData, listingOverviewData } from "../components/data";
import { Fragment } from "react/jsx-runtime";
import ListingOverviewBox from "./ListingOverviewBox";

const DashboardMain = () => {
  return (
    <section className="px-19 bg-[#F9FAFB] h-screen pt-3">
      <h1 className="font-semibold text-pri-black mb-3 text-xl">
        Welcome, Ahmed
      </h1>
      <section className="flex items-start gap-5 h-full">
        <div className="border border-[#E4E4E4] bg-white rounded-2xl w-3/4 flex-1">
          <SalesOverview />
          <hr className="text-[#E4E4E4] w-full" />
          <section className="flex items-center">
            <div className="w-1/2 px-2 py-4">
              <GroupedBarChart />
            </div>
            <div className="w-1/2  grid grid-cols-2 gap-4 px-0 pr-4">
              {cashFlowData?.map((item) => (
                <Fragment key={item.text}>
                  <CashFlowBox {...item} />
                </Fragment>
              ))}
            </div>
          </section>
        </div>
        <div className="w-1/4 ml-1 flex   flex-col justify-center  gap-5 text-4xl">
          {listingOverviewData?.map((item) => (
            <Fragment key={item.heading}>
              <ListingOverviewBox {...item} />
            </Fragment>
          ))}
        </div>
      </section>
    </section>
  );
};

export default DashboardMain;
