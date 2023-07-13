import { useLoaderData } from "react-router-dom";

const AnimeRecommendations = () => {
  const data = useLoaderData();
  console.log("data...", data);
  return <div>AnimeRecommendations</div>;
};

export default AnimeRecommendations;
