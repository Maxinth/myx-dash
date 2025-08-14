import "./App.css";
import CalendarSidebar from "./components/Calendar";
import GroupedBarChart from "./components/LineChart";

function App() {
  return (
    <main className="!font-ecb w-full max-w-[1440px] mx-auto">
      <section className=" w-full">hello</section>
      <CalendarSidebar />
      <div className="max-w-[300px]">
        <GroupedBarChart />
      </div>
    </main>
  );
}

export default App;
