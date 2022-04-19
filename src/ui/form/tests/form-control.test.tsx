import { FormLabel, Input } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { FormControl, FormErrorMessage, FormHelperText } from "../form-control";

test("helper text should hide when there is an error inside of FormControl and when hideOnInvalid is true", () => {
  render(
    <FormControl data-testid="form" id="form" isInvalid={true}>
      <FormLabel>Enter your name</FormLabel>
      <Input />
      <FormHelperText data-testid="helperText">helperText</FormHelperText>
      <FormErrorMessage>This is not a valid name</FormErrorMessage>
    </FormControl>
  );

  try {
    expect(screen.queryByTestId("helperText")).not.toBeVisible();
  } catch {
    expect(screen.queryByTestId("helperText")).toBeNull();
  }
});
