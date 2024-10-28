import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/NavbarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { useState } from "react";
import LiveChat from "./LiveChat";
import moment from "moment";
import { value_converter } from "../utils/Constants";
const WatchPages = () => {
  const [details, setDetails] = useState(null);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const handleTitle = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        searchParams.get("v") +
        "&key=AIzaSyCf2rfSdKnidLUZDC9c34F36PbrHY6jEVM"
    );

    const json = await data.json();
    console.log(json);

    setDetails(json.items[0]);
  };

  useEffect(() => {
    handleTitle();
  }, []);

  const { snippet, statistics } = details || {};
  const { title, publishedAt } = snippet || {};
  const { commentCount, likeCount, viewCount } = statistics || {};

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
          <div className="px-4 pt-4 ">
            <h2 className="font-bold text-xl">{title}</h2>
            <div className="flex">
              <p>{value_converter(viewCount)}views</p>
              <p className="ml-4">{moment(publishedAt).fromNow()}</p>
              <div className="flex mt-94">
                <span>
                  <img
                    src="https://t4.ftcdn.net/jpg/05/54/76/53/360_F_554765365_GV87lL7ynZSvGDQt26BBsJ89hfrYfDzU.jpg"
                    className="w-10 h-6"
                  />
                  {value_converter(likeCount)}
                </span>
                <span>
                  <img
                    src="https://www.creativefabrica.com/wp-content/uploads/2021/07/12/Dislike-icon-Graphics-14628428-1-580x386.jpg"
                    className="w-10 h-6"
                  />
                  dislike
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full h-full">
          <LiveChat></LiveChat>
        </div>
      </div>
      <div>
        <CommentContainer data={commentCount}></CommentContainer>
      </div>
    </div>
  );
};
export default WatchPages;
