import Movies from "./index.js";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const exampleMovies = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders a movie list", () => {
  render(<Movies initialMovies={exampleMovies} />);

  const hulkHeading = screen.getByRole("heading", {
    name: "The Incredible Hulk",
  });

  expect(hulkHeading).toBeInTheDocument();

  const spiderHeading = screen.getByRole("heading", { name: "Spiderman 1-25" });

  expect(spiderHeading).toBeInTheDocument();

  const lordOfTheRingsHeading = screen.getByRole("heading", {
    name: "Lord of the Rings",
  });

  expect(lordOfTheRingsHeading).toBeInTheDocument();
});

test("renders a new movie when the form is submitted with new movie data", async () => {
  const user = userEvent.setup();

  render(<Movies initialMovies={exampleMovies} />);

  const input = screen.getByLabelText("Name");

  await user.type(input, "Super Mario Brothers");

  const button = screen.getByRole("button", { name: "Add" });

  await user.click(button);

  const superMarioBrothersHeading = screen.getByRole("heading", {
    name: "Super Mario Brothers",
  });

  expect(superMarioBrothersHeading).toBeInTheDocument();
});
