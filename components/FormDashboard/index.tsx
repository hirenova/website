import Form, { FormProps } from "components/Form";
import styled from "styled-components";

const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

interface FormDashboardProps extends FormProps {}

const FormDashboard = ({
  className,
  children,
  ...props
}: FormDashboardProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default FormDashboard;
