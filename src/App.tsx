import "./App.css";
import DashboardMenu from "./components/DashboardMenu";
import Navbar from "./components/Navbar";
import DashboardMain from "./components/DashboardMain";
// import { BudgetingModal } from "./components/BudgetingModal";

function App() {
  return (
    <main className="!font-ecb w-full max-w-[1440px] mx-auto ">
      <section className=" w-full ">
        <Navbar />
        <div className=" w-full mt-24">
          <DashboardMenu />
          <DashboardMain />
        </div>
      </section>
      {/* <div className="bg-red-800">
        <BudgetingModal />
      </div> */}
    </main>
  );
}

export default App;
