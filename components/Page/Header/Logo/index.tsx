import Link from "components/Link";
import styled from "styled-components";

const Wrapper = styled(Link)``;

const Image = styled.img`
  height: 100%;
`;

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Wrapper href="/">
      <Image src="/header_logo.png" alt="" />
    </Wrapper>
  );
};

export default Logo;
