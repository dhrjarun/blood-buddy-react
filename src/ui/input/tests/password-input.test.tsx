import { fireEvent, render, screen } from "@testing-library/react";
import { PasswordInput } from "../password-input";

it("When eye button of passworInput is clicked, input type should toggle between text and password", () => {
  render(<PasswordInput inputProps={{ placeholder: "password" }} />);

  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByPlaceholderText("password")).toHaveAttribute(
    "type",
    "text"
  );

  fireEvent.click(screen.getByRole("button"));
  expect(screen.getByPlaceholderText("password")).toHaveAttribute(
    "type",
    "password"
  );
});
