import "./App.css";
import DashboardMenu from "./components/DashboardMenu";
// import CalendarSidebar from "./components/Calendar";

import Navbar from "./components/Navbar";
import DashboardMain from "./components/DashboardMain";

function App() {
  return (
    <main className="!font-ecb w-full max-w-[1440px] mx-auto ">
      <section className=" w-full ">
        <Navbar />
        <div className=" w-full ">
          <DashboardMenu />
          <DashboardMain />
        </div>
      </section>
    </main>
  );
}

export default App;
