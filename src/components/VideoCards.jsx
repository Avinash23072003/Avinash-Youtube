import { value_converter } from "../utils/Constants";
import moment from "moment";

const videoCards = ({ info }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      <div className="w-64 h-80 shadow-xl rounded-2xl flex-shrink-0 flex flex-col">
        <img
          className="h-40 w-full object-cover rounded-t-2xl"
          src={thumbnails.medium.url}
          alt={title}
        />
        <ul className="flex-grow p-2">
          <li>{title}</li>
          <li>{channelTitle}</li>
          <li>{moment(snippet.publishedAt).fromNow()}</li>
          <li className="text-sm text-black-400 font-bold">
            {value_converter(statistics.viewCount)} views
          </li>
        </ul>
      </div>
    </div>
  );
};

export default videoCards;
