import { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/Constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
const VdoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYoutubeVdos();
  }, []);
  const getYoutubeVdos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };
  return (
    <div className="ml-4 flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VdoContainer;
