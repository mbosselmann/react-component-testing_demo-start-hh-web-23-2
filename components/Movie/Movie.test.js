import Movie from "./index.js";
import { render, screen } from "@testing-library/react";

// test("renders a movie", () => {
//   render(<Movie name="Super Mario Brothers" />);

//   const superMarioBrothers = screen.getByText("Super Mario Brothers");

//   expect(superMarioBrothers).toBeInTheDocument();
// });

test("renders a movie", () => {
  render(<Movie name="Super Mario Brothers" />);

  const superMarioBrothers = screen.getByRole("heading", {
    name: "Super Mario Brothers",
  });

  expect(superMarioBrothers).toBeInTheDocument();
});
