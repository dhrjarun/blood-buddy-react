import { forwardRef, HTMLChakraProps, chakra } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FieldError } from "react-hook-form";

interface FormContextProps {
  isSubmitting?: boolean;
  isValid?: boolean;
  isValidating?: boolean;
  isDirty?: boolean;
  errors?:
    | {
        [x: string]: FieldError;
      }
    | undefined;
  dirtyFields?:
    | {
        [x: string]: boolean;
      }
    | undefined;
}
const FormContext = React.createContext<null | FormContextProps>(null);

export function useFormContext() {
  const value = useContext(FormContext);
  return value;
}

export interface FormProps extends HTMLChakraProps<"form">, FormContextProps {}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => {
    const [contextProps, { children, ...rest }] = separateFormProps(props);
    return (
      <FormContext.Provider value={contextProps}>
        <chakra.form ref={ref} {...rest}>
          {children}
        </chakra.form>
      </FormContext.Provider>
    );
  }
);
Form.defaultProps = {};

function separateFormProps(
  props: FormProps
): [FormContextProps, Omit<FormProps, keyof FormContextProps>] {
  const {
    isSubmitting,
    isValid,
    isValidating,
    isDirty,
    errors,
    dirtyFields,
    ...rest
  } = props;

  return [
    { isSubmitting, isValid, isValidating, isDirty, errors, dirtyFields },
    rest,
  ];
}
