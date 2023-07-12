import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const RouterLayout = () => {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RouterLayout;
