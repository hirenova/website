import styled from "styled-components";

interface FooterProps {
  className?: string;
}

const Wrapper = styled.div<FooterProps>`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
`;

const Footer = ({ className }: FooterProps) => {
  return <Wrapper className={className}>Footer</Wrapper>;
};

export default Footer;
