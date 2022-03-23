import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)`
  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const Image = styled.img`
  height: 40px;
`;

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Wrapper href="/">
      <Image src="header_logo.png" alt="" />
    </Wrapper>
  );
};

export default Logo;
