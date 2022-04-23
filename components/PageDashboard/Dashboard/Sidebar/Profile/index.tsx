import Box, { BoxProps } from "components/Box";
import styled from "styled-components";

import ProfilePicture from "./ProfilePicture";

const Wrapper = styled(Box)``;

interface ProfileProps extends BoxProps {}

const Profile = ({ className, ...props }: ProfileProps) => {
  return (
    <Wrapper className={className} {...props}>
      <ProfilePicture />
    </Wrapper>
  );
};

export default Profile;
