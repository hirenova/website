import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

const Wrapper = styled(Box)``;

interface CompanyProps extends BoxProps {}

const Company = ({ className, children, ...props }: CompanyProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default Company;
