import Box, { BoxProps } from "components/Box";
import ButtonNavigation, {
  ButtonNavigationProps,
} from "components/ButtonNavigation";
import styled from "styled-components";

const Wrapper = styled(Box)``;

export interface BoxNavigationProps extends BoxProps {
  navigation: Array<ButtonNavigationProps>;
  buttonAs?: ButtonNavigationProps["as"];
}

const BoxNavigation = ({
  className,
  children,
  navigation,
  buttonAs,
  ...props
}: BoxNavigationProps) => {
  return (
    <Wrapper className={className} {...props}>
      {navigation.map((item, index) => (
        <ButtonNavigation key={index} as={buttonAs} {...item} />
      ))}
      {children}
    </Wrapper>
  );
};

export default BoxNavigation;
