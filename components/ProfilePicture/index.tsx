import Image, { ImageProps } from "components/Image";
import useApp from "hooks/useApp";
import styled from "styled-components";

const Wrapper = styled(Image)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export interface ProfilePictureProps extends ImageProps {}

const ProfilePicture = ({ className, ...props }: ProfilePictureProps) => {
  const { user } = useApp();
  return (
    <Wrapper
      className={className}
      as="img"
      src={user?.photoURL || "/profile_picture_default.png"}
      referrerPolicy="no-referrer"
      {...props}
    ></Wrapper>
  );
};

export default ProfilePicture;
