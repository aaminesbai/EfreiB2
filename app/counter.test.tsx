/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./counter";

it("Should add one to counter when clicking add button", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("heading")).toHaveTextContent("1");
});

it("Should remove one to counter when clicking substract button", () => {
  render(<Counter />);
  expect(screen.getByRole("heading")).toHaveTextContent("0");
  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("heading")).toHaveTextContent("-1");
});