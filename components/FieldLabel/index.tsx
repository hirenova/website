import Box, { BoxProps } from "components/Box";
import FormLabel, { FormLabelProps } from "components/FormLabel";
import styled from "styled-components";

const Wrapper = styled(FormLabel)``;

interface FieldLabelProps extends FormLabelProps {}

const FieldLabel = ({ className, children, ...props }: FieldLabelProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default FieldLabel;
