import "./App.css";
import DashboardMenu from "./components/DashboardMenu";
import Navbar from "./components/Navbar";
import DashboardMain from "./components/DashboardMain";

function App() {
  return (
    <main className="!font-ecb w-full max-w-[1440px] mx-auto main">
      <section className="w-full ">
        <Navbar />
        <div className=" w-full mt-24 ">
          <DashboardMenu />
          <DashboardMain />
        </div>
      </section>
    </main>
  );
}

export default App;
