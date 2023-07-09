import { render, screen, waitFor } from "@testing-library/react";
import WaifuList from ".";
import { WaifuContext, WaifuProviderType } from "../context";
import { CATEGORIES, MEGUMIN_DATA } from "../data";

const defaultProps: WaifuProviderType = {
  data: MEGUMIN_DATA,
  error: null,
  category: CATEGORIES[0],
  setCategory: () => undefined,
  categories: CATEGORIES,
};

const setup = (props = defaultProps) => {
  render(
    <WaifuContext.Provider value={props}>
      <WaifuList />
    </WaifuContext.Provider>
  );
};

describe("WaifuList", () => {
  it("should render successfully", () => {
    setup();
  });

  it("should render 5 images", async () => {
    setup();
    await waitFor(() => {
      const images = screen.getAllByRole("img");
      expect(images.length).toBe(5);
    });
  });

  it("should render error message if any error occurs", async () => {
    setup({ ...defaultProps, error: true });
    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Something went wrong" })).toBeInTheDocument();
    });
  });
});
