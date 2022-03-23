import styled from "styled-components";

const Wrapper = styled.span`
  color: #792e8f;
`;

interface CountProps {
  className?: string;
}

const Count = ({ className }: CountProps) => {
  return <Wrapper className={className}>93,178</Wrapper>;
};

export default Count;
