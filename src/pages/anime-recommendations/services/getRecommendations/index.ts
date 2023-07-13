import axios from "axios";

export const getRecommendations = async () =>
  axios({
    url: "https://api.jikan.moe/v4/recommendations/anime",
    method: "GET",
  });
