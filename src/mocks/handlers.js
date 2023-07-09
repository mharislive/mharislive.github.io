import { rest } from "msw";
import { BULLY_DATA, MEGUMIN_DATA } from "../components/anime-waifu/data";

export const handlers = [
  rest.post("https://api.waifu.pics/many/sfw/megumin", (req, res, ctx) => {
    return res(
      ctx.json({
        files: MEGUMIN_DATA,
      })
    );
  }),

  rest.post("https://api.waifu.pics/many/sfw/bully", (req, res, ctx) => {
    return res(
      ctx.json({
        files: BULLY_DATA,
      })
    );
  }),
];
