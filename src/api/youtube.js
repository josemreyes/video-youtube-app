import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: key,
    // access_token: "oauth2-token",
    // Authorization: "Bearer oauth2-token",
  },
});
