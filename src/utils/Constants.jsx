const API_KEY = "AIzaSyCf2rfSdKnidLUZDC9c34F36PbrHY6jEVM";
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=80&regionCode=IN&key=" +
  API_KEY;
export const YOUTUBE_SEARCH_KEY =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const LIVE_COUNT = 25;
export const value_converter = (number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  }
};
