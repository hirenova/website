import styled from "styled-components";

const Wrapper = styled.span`
  /* color: #3169ad; */
`;

interface CountProps {
  className?: string;
}

const Count = ({ className }: CountProps) => {
  return <Wrapper className={className}>93,178</Wrapper>;
};

export default Count;
