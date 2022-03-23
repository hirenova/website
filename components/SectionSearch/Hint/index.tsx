import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 14px;
`;

interface HintProps {
  className?: string;
}

const Hint = ({ className }: HintProps) => {
  return (
    <Wrapper className={className}>
      Find Jobs, Employment & Career Opportunities
    </Wrapper>
  );
};

export default Hint;
