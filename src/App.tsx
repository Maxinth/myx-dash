import "./App.css";
import DashboardMenu from "./components/DashboardMenu";
// import CalendarSidebar from "./components/Calendar";
// import GroupedBarChart from "./components/LineChart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="!font-ecb w-full max-w-[1440px] mx-auto ">
      <section className=" w-full ">
        <Navbar />
        <div className=" w-full ">
          <DashboardMenu />
        </div>
      </section>
    </main>
  );
}

export default App;
