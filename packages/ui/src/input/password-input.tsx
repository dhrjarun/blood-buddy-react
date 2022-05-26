import React, { useState } from "react";
import {
  Input,
  InputRightElement,
  InputGroup,
  InputProps,
  InputGroupProps,
  InputElementProps,
} from "@chakra-ui/react";
import { EyeFillIcon, EyeSlashFillIcon } from "icons";
import { IconButton, IconButtonProps } from "buttons";

interface PasswordInputProps extends InputGroupProps {
  inputProps?: InputProps;
  inputRigthElementProps?: InputElementProps;
  iconButtonProps?: IconButtonProps;
}
export const PasswordInput: React.FC<PasswordInputProps> = ({
  inputProps,
  inputRigthElementProps,
  iconButtonProps,
  ...inputGroupProps
}) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  return (
    <InputGroup {...inputGroupProps} w="40rem">
      <Input
        role="textbox"
        {...inputProps}
        type={isPasswordVisible ? "text" : "password"}
      />
      <InputRightElement px="2" {...inputRigthElementProps}>
        <IconButton
          data-testid="eye-btn"
          tabIndex={-1}
          aria-label="Hide or unhide password"
          size="xs"
          variant="light"
          colorScheme="neutral"
          icon={isPasswordVisible ? <EyeSlashFillIcon /> : <EyeFillIcon />}
          onClick={(e) => {
            setPasswordVisibility(!isPasswordVisible);
            e.preventDefault();
          }}
          {...iconButtonProps}
        />
      </InputRightElement>
    </InputGroup>
  );
};
