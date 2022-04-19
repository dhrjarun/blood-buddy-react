import { forwardRef } from "@chakra-ui/react";
import React from "react";
import { Button, ButtonProps } from "../buttons";
import { useFormContext } from "./form";

interface FormButtonProps
  extends Omit<ButtonProps, "isValid" | "isLoading" | "disabled"> {}

export const FormButton = forwardRef<FormButtonProps, "button">(
  (props, ref) => {
    const { isValid, isSubmitting } = useFormContext()!;
    const { children } = props;
    return (
      <Button type="submit" isLoading={isSubmitting} disabled={!isValid}>
        {children}
      </Button>
    );
  }
);
