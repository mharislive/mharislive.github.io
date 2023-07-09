import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AnimeWaifu from ".";
import { CATEGORIES } from "./data";

const setup = (props?: string[]) => {
  render(<AnimeWaifu {...(props && { categories: props })} />);
};

describe("AnimeWaifu", () => {
  it("should render successfully", () => {
    setup();
  });

  it("should render heading", () => {
    setup();
    expect(screen.getByRole("heading", { name: /anime waifus/i })).toBeInTheDocument();
  });

  it("should render select box", () => {
    setup();
    expect(screen.getByRole("combobox", { name: "category" })).toBeInTheDocument();
  });

  it("should render 2 options", () => {
    setup(CATEGORIES);
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });

  it("should render 5 images", async () => {
    setup();
    await waitFor(() => {
      const images = screen.getAllByRole("img");
      expect(images.length).toBe(5);
    });
  });

  describe("events and interactions", () => {
    it("should render render different results if select box value is changed", async () => {
      setup();

      const selectBox = screen.getByRole("combobox", { name: "category" });
      fireEvent.change(selectBox, { target: { value: "bully" } });

      await waitFor(() => {
        const images = screen.getAllByRole("img");
        expect(images.length).toBe(3);
      });
    });
  });
});
