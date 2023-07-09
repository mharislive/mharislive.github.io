import { rest } from "msw";
import { BULLY_DATA } from "../data";
import getData from "./getData";
import { server } from "../../../mocks/server";

describe("getData", () => {
  it("should return correct data", async () => {
    server.use(
      rest.post("https://api.waifu.pics/many/sfw/bully", (req, res, ctx) => {
        return res.once(
          ctx.json({
            files: BULLY_DATA,
          })
        );
      })
    );

    const response = await getData("bully");
    expect(response).toEqual({ data: BULLY_DATA, error: null });
  });

  it("should return empty array if response is success but there is not data", async () => {
    server.use(
      rest.post("https://api.waifu.pics/many/sfw/bully", (req, res, ctx) => {
        return res.once(ctx.json({}));
      })
    );

    const response = await getData("bully");
    expect(response).toEqual({ data: [], error: null });
  });

  describe("failure", () => {
    it("should return error", async () => {
      server.use(
        rest.post("https://api.waifu.pics/many/sfw/bully", (req, res, ctx) => {
          return res.once(ctx.status(404));
        })
      );
      const response = await getData("bully");
      expect(response).toEqual({ data: [], error: true });
    });
  });
});
