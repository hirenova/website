import ListUnordered, { ListUnorderedProps } from "components/ListUnordered";
import styled from "styled-components";

const Wrapper = styled(ListUnordered)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

interface ListProps extends ListUnorderedProps {}

const List = ({ className, children, ...props }: ListProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default List;
