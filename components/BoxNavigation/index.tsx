import Box, { BoxProps } from "components/Box";
import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation";
import styled from "styled-components";

const Wrapper = styled(Box)``;

export interface BoxNavigationProps extends BoxProps {
  navigation: Array<ButtonNavigationProps>;
}

const BoxNavigation = ({
  className,
  children,
  navigation,
  ...props
}: BoxNavigationProps) => {
  return (
    <Wrapper className={className} {...props}>
      {children}
    </Wrapper>
  );
};

export default BoxNavigation;
