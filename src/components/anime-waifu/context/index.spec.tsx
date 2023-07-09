import { render, screen } from "@testing-library/react";
import WaifuProvider from ".";
import { CATEGORIES } from "../data";

const setup = () => {
  render(
    <WaifuProvider categories={CATEGORIES}>
      <h1>Data</h1>
    </WaifuProvider>
  );
};

describe("AnimeWaifuContext", () => {
  it("should render successfully", () => {
    setup();
  });

  it("should render children", () => {
    setup();
    expect(screen.getByRole("heading", { name: "Data" })).toBeInTheDocument();
  });
});
