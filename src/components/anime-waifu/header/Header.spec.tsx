import { render, screen } from "@testing-library/react";
import Header from ".";
import { WaifuContext } from "../context";
import { CATEGORIES, MEGUMIN_DATA } from "../data";

const setup = async () => {
  render(
    <WaifuContext.Provider
      value={{
        data: MEGUMIN_DATA,
        error: null,
        category: CATEGORIES[0],
        setCategory: () => undefined,
        categories: CATEGORIES,
      }}
    >
      <Header />
    </WaifuContext.Provider>
  );
};

describe("Header", () => {
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
    setup();
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });
});
