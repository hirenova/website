import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

interface FooterProps extends BoxProps {}

const Wrapper = styled(Box)`
  background: #f0e0e0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <Wrapper className={className} {...props}>
      Footer
    </Wrapper>
  );
};

export default Footer;
