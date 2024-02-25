import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);

  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
});
