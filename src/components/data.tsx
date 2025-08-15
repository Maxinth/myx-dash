import DashboardIcon from "../assets/dash-home.svg";
import ListingsIcon from "../assets/dash-listings.svg";
import UsersIcon from "../assets/dash-profile.svg";
import RequestsIcon from "../assets/dash-request.svg";
import ApplicationIcon from "../assets/dash-applications.svg";
import ImgOne from "../assets/cash-f-1.svg";
import ImgThree from "../assets/cash-f-3.svg";
import ImgFour from "../assets/cash-f-4.svg";
import listingHome from "../assets/listing-home.svg";
import listingUser from "../assets/listing-user.svg";
//* Carousels
import mostClickedOne from "../assets/most-clicked-1.png";
import mostClickedTwo from "../assets/most-clicked-2.png";

import mostWatchListedOne from "../assets/most-watchlisted-1.png";
import mostWatchListedTwo from "../assets/most-watchlisted-2.png";
import mostWatchListedThree from "../assets/most-watchlisted-3.png";
import mostWatchListedFour from "../assets/most-watchlisted-4.png";
import mostWatchListedFive from "../assets/most-watchlisted-5.png";

import hostestListingOne from "../assets/hostest-listing-1.png";
import hostestListingTwo from "../assets/hostest-listing-2.png";
import hostestListingThree from "../assets/hostest-listing-3.png";
import hostestListingFour from "../assets/hostest-listing-4.png";
import hostestListingFive from "../assets/hostest-listing-5.png";

import modalSetting from "../assets/modal-setting.svg";
import modalAdjust from "../assets/modal-adjust.svg";
import modalTrend from "../assets/modal-trend.svg";

const dashMenuData = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Listings",
    icon: <ListingsIcon />,
  },
  {
    name: "Users",
    icon: <UsersIcon />,
  },
  {
    name: "Request",
    icon: <RequestsIcon />,
  },
  {
    name: "Application",
    icon: <ApplicationIcon />,
  },
];

const cashFlowData = [
  {
    amount: "₦120,000,000.00",
    textColor: "text-[#4545FE]",
    img: ImgOne,
    text: "Total Inflow",
    percentageColor: "text-[#12B76A]",
  },
  {
    amount: "₦50,000,000.00",
    textColor: "text-[#12B76A]",
    img: ImgOne,
    text: "MRR",
  },
  {
    amount: "₦200,000,000.00",
    textColor: "text-[#14B8A6]",
    img: ImgThree,
    text: "Commission Revenue",
  },
  {
    amount: "₦100,000,000.00",
    textColor: "text-[#F04438]",
    img: ImgFour,
    text: "GMV",
  },
];

const listingOverviewData = [
  {
    heading: "Listings Overview",
    icon: listingHome,
    stats: [
      {
        name: "Total",
        value: "1.8k",
      },
      {
        name: "Active",
        value: "80",
      },
      {
        name: "Archived",
        value: "1k",
      },
    ],
  },
  {
    heading: "Users Overview",
    icon: listingUser,
    stats: [
      {
        name: "Total",
        value: "20.7k",
      },
      {
        name: "Riders",
        value: "8.5k",
      },
      {
        name: "Subscribers",
        value: "7.5k",
      },
    ],
  },
];

const mostClicked = [mostClickedOne, mostClickedTwo];
const mostWatchListed = [
  mostWatchListedOne,
  mostWatchListedTwo,
  mostWatchListedThree,
  mostWatchListedFour,
  mostWatchListedFive,
];

const hotestListings = [
  hostestListingOne,
  hostestListingTwo,
  hostestListingThree,
  hostestListingFour,
  hostestListingFive,
];

const modalData = [
  {
    title: "Set up annual budgets by account category",
    sub: "Allocate funds across income and expense lines with full visibility.",
    img: modalSetting,
  },
  {
    title: "Track actuals vs budget in real time",
    sub: "See how your community is performing against plan, month by month.",
    img: modalTrend,
  },
  {
    title: "Adjust figures and forecast with ease",
    sub: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place.",
    img: modalAdjust,
  },
];

export {
  modalData,
  dashMenuData,
  cashFlowData,
  listingOverviewData,
  mostClicked,
  mostWatchListed,
  hotestListings,
};
