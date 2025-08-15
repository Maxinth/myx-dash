import listingHome from "../assets/listing-home.svg";
import RightArrow from "../assets/arrow.svg";

const ListingOverviewBox = () => {
  return (
    <div className="border border-[#E4E4E4] rounded-2xl p-4 ">
      <div className="flex items-center justify-between">
        <p className="flex items-center text-sm gap-3">
          <img src={listingHome} alt="listing" />
          <span className="font-medium">Listings Overview</span>
        </p>
        <p className="flex items-center text-sm text-[#4545FE] font-medium">
          View all <img src={RightArrow} alt="arrow" className="ml-2" />
        </p>
      </div>
    </div>
  );
};

export default ListingOverviewBox;
