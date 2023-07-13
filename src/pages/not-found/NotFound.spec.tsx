import { render } from "@testing-library/react";
import NotFound from ".";
import { MemoryRouter } from "react-router-dom";

describe("NotFound page", () => {
  it("should render successfully", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });
});
