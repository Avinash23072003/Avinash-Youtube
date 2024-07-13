import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/NavbarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleAction = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 m-1 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8  cursor-pointer"
          alt="sidebar"
          src="https://icons.veryicon.com/png/o/miscellaneous/we/sidebar-2.png"
          onClick={toggleAction}
        />
        <img
          className="h-8 px-2 cursor-pointer"
          alt="yr logo"
          src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </div>
      <div className="col-span-10 px-10 ">
        <input
          type="text"
          className="w-1/2  p-1 border border-gray rounded-l-3xl bg-gray"
        />
        <button className=" p-1 border border-gray rounded-r-3xl bg-gray">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        />
      </div>
    </div>
  );
};
export default Header;
