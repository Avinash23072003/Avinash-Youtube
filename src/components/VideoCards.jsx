const videoCards = ({ info }) => {
  if (!info) return;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-4 w-50 shadow-xl ">
      <img className="rounded-2xl rounded-t-lg" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold w-72">{title}</li>
        <li>{channelTitle}</li>
        <li>{snippet.publishedAt}</li>
        <li>{statistics.viewCount} view</li>
      </ul>
    </div>
  );
};
export default videoCards;
