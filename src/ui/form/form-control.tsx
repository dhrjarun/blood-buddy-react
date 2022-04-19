import {
  forwardRef,
  HelpTextProps,
  useFormControlContext,
  FormControl as CFormControl,
  FormHelperText as CFormHelperText,
  FormErrorMessage as CFormErrorMessage,
  FormControlProps as CFormControlProps,
  FormErrorMessageProps as CFormErrorMessageProps,
} from "@chakra-ui/react";
import { useFormContext } from "./form";

export interface FormControlProps extends CFormControlProps {
  id: string;
}

export const FormControl = forwardRef<FormControlProps, "div">((props, ref) => {
  const { errors } = useFormContext() || {};
  const { children, isInvalid, ...rest } = props;
  const id = rest.id;
  return (
    <CFormControl
      ref={ref}
      isInvalid={errors ? (errors[id] ? true : false) : isInvalid}
      {...rest}
    >
      {children}
    </CFormControl>
  );
});

export interface FormHelperTextProps extends HelpTextProps {
  hideOnInvalid?: boolean;
}

export const FormHelperText = forwardRef<FormHelperTextProps, "div">(
  (props, ref) => {
    const { children, hideOnInvalid, ...rest } = props;
    const field = useFormControlContext();
    if (hideOnInvalid && field.isInvalid) return null;
    return (
      <CFormHelperText ref={ref} {...rest}>
        {children}
      </CFormHelperText>
    );
  }
);

FormHelperText.defaultProps = {
  hideOnInvalid: true,
};

export interface FormErrorMessageProps extends CFormErrorMessageProps {}

export const FormErrorMessage = forwardRef<FormErrorMessageProps, "div">(
  (props, ref) => {
    const { children, ...rest } = props;
    const { errors } = useFormContext() || {};
    const { id } = useFormControlContext();
    const _children = errors?.[id]?.message || children;
    return (
      <CFormErrorMessage ref={ref} {...rest}>
        {_children}
      </CFormErrorMessage>
    );
  }
);
