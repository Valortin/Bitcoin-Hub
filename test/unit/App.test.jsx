import { render, screen } from "@testing-library/react";
import App from "../../src/App";

test("renders Bitcoin-Hub header", () => {
  render(<App />);
  expect(screen.getByText(/Bitcoin-Hub/i)).toBeInTheDocument();
});