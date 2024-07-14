import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/NavbarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
const WatchPages = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full h-[450px]">
      <div className="flex ">
        <div>
          <iframe
            width="850"
            height="450"
            className="p-4 shadow-lg rounded-r-3xl rounded-l-3xl"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title={"YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="p-4 w-full h-full">
          <LiveChat></LiveChat>
        </div>
      </div>
      <div>
        <CommentContainer></CommentContainer>
      </div>
    </div>
  );
};
export default WatchPages;
