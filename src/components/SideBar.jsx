import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const toggleAction = useSelector((store) => store.app.isMenuOpen);

  if (!toggleAction) return null;
  return (
    <div className="p-6 w-47 shadow-lg">
      <h1 className="font-bold text-l">Subscriptions</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <li>shorts</li>
        <li>Movies</li>
        <li>Videos</li>
        <li>library</li>
      </ul>

      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>shorts</li>
        <li>Movies</li>
        <li>Videos</li>
        <li>library</li>
      </ul>

      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>shorts</li>
        <li>Movies</li>
        <li>Videos</li>
        <li>library</li>
      </ul>
      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Home</li>
        <li>shorts</li>
        <li>Movies</li>
        <li>Videos</li>
        <li>library</li>
      </ul>
    </div>
  );
};
export default SideBar;
