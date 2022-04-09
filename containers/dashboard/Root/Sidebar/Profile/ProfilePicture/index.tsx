import ProfilePicture, { ProfilePictureProps } from "components/ProfilePicture";
import styled from "styled-components";

const Wrapper = styled(ProfilePicture)`
  border-radius: 50%;
`;

interface PictureProps extends ProfilePictureProps {}

const Picture = ({ className, ...props }: PictureProps) => {
  return <Wrapper className={className} {...props}></Wrapper>;
};

export default Picture;
