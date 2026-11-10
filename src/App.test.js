import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio owner and primary projects navigation", () => {
  window.scrollTo = jest.fn();
  render(<App />);
  expect(screen.getByRole("heading", { name: /thama mabatha.*interfaces people can use/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /explore projects/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /contact me/i })).toBeInTheDocument();
});
