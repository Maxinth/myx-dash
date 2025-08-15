import "./App.css";
// import CalendarSidebar from "./components/Calendar";
// import GroupedBarChart from "./components/LineChart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="!font-ecb w-full max-w-[1440px] mx-auto ">
      <section className=" w-full ">
        <Navbar />
        <div className="h-screen bg-red-300 px-19 text-black text-4xl ">
          others go here
        </div>
      </section>
    </main>
  );
}

export default App;
