import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./MainLayout.css";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="outlet">
        <Outlet></Outlet>
      </div>
      <div style={{ background: "#d5b942" }}>
        <Footer />
      </div>
    </div>
  );
}
