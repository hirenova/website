import styled from "styled-components";

import Count from "./Count";

const Wrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
`;

interface PostingsProps {
  className?: string;
}

const Postings = ({ className }: PostingsProps) => {
  return (
    <Wrapper className={className}>
      There Are <Count /> Postings Here For You!
    </Wrapper>
  );
};

export default Postings;
