import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  );
};
export default Body;
