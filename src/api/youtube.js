import axios from "axios";

const KEY = "AIzaSyAHWSW3d9IyaWuTvvoJ7DjpSOTnI4-vjJQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
