import styled from "styled-components";

import Items from "./Items";
import Label from "./Label";

const Wrapper = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
`;

interface PopularSearchesProps {
  className?: string;
}

const Insights = ({ className }: PopularSearchesProps) => {
  return (
    <Wrapper className={className}>
      <Label>Popular Searches :</Label>
      <Items>Designer, Developer, Web, IOS, PHP, Senior, Engineer</Items>
    </Wrapper>
  );
};

export default Insights;
