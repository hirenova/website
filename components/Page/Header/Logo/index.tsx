import styled from "styled-components";

const Wrapper = styled.div``;

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return <Wrapper className={className}>Logo</Wrapper>;
};

export default Logo;
