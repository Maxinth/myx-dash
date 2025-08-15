/* eslint-disable @typescript-eslint/no-explicit-any */
import LeftPlay from "../assets/left-play.svg";
import RightPlay from "../assets/right-play.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GroupedBarChart() {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Series 1",
        data: [35, 8, 14, 12, 10, 32, 22, 20, 31],
        backgroundColor: "#4545FE",
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
      {
        label: "Series 2",
        data: [28, 27, 7, 25, 4, 45, 31, 8, 29],
        backgroundColor: "#12B76A",
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
      {
        label: "Series 3",
        data: [10, 9, 4, 8, 8, 7, 15, 15, 8],
        backgroundColor: "#F04438",
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback(this: any, value: string | number) {
            return `${value}m`;
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section className="w-full flex items-center  h-full lg:h-[200px] px-4">
      <img src={LeftPlay} alt="left-play" className="hidden lg:block" />
      <Bar data={data} options={options} />
      <img src={RightPlay} alt="right-play" className="hidden lg:block" />
    </section>
  );
}
