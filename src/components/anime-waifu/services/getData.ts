import axios from "axios";

export type GetWaifuResponse = {
  data: string[];
  error: any;
};

export const getUrl = (category: string) => `https://api.waifu.pics/many/sfw/${category}`;

const getData = async (category: string): Promise<GetWaifuResponse> => {
  let response: GetWaifuResponse = { data: [], error: null };
  try {
    const { data } = await axios({
      method: "POST",
      url: getUrl(category),
      data: { type: "sfw", category },
    });
    response = { data: data.files || [], error: null };
  } catch (error) {
    response = { data: [], error: true };
  }
  return response;
};

export default getData;
