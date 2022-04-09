import Box, { BoxProps } from "components/Box";
import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled(Box)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export interface ProfilePictureProps extends BoxProps {}

const ProfilePicture = ({ className, ...props }: ProfilePictureProps) => {
  const { user } = useApp();
  return (
    <Wrapper
      className={className}
      as="img"
      src={user?.photoURL}
      {...props}
    ></Wrapper>
  );
};

export default ProfilePicture;
