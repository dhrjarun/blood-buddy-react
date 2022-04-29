import React from "react";
import { Button, ButtonProps } from "../buttons";
import { useFormContext } from "./form";

interface FormButtonProps
  extends Omit<ButtonProps, "isValid" | "isLoading" | "disabled"> {}

export const FormButton = React.forwardRef<HTMLButtonElement, FormButtonProps>(
  (props, ref) => {
    const { isValid, isSubmitting } = useFormContext()!;
    const { children } = props;
    return (
      <Button
        ref={ref}
        type="submit"
        isLoading={isSubmitting}
        disabled={!isValid}
      >
        {children}
      </Button>
    );
  }
);
