import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/NavbarSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_KEY } from "../utils/Constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const Timer = setTimeout(() => searchResults(), 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const searchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_KEY + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(searchQuery);
  };

  const dispatch = useDispatch();
  const toggleAction = () => {
    dispatch(toggleMenu());
  };

  const changeMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="grid grid-flow-col p-5 m-1 shadow-lg bg-white dark:bg-black text-black dark:text-white">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
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
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 p-1 border border-s-4 rounded-l-3xl bg-gray-100 dark:bg-gray-800 dark:text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="p-1 border border-gray rounded-r-3xl bg-gray dark:bg-gray-700 dark:text-white">
          🔍
        </button>

        {showSuggestion && (
          <div className="fixed px-1 bg-white dark:bg-gray-800 w-[450px] rounded-md">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="px-2 py-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* <h3 onClick={changeMode} className="cursor-pointer col-span-1">
        Dark mode
      </h3> */}

      <img
        src="https://static-00.iconduck.com/assets.00/dark-theme-icon-2048x2048-ymrfkxsy.png"
        onClick={changeMode}
        className="w-10 cursor-pointer col-span-1"
      />
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
