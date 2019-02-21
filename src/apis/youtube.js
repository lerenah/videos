import axios from "axios";

const KEY = "AIzaSyDYNSatW-2goF6y9HoakxsACQhBv3jWd7E";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
