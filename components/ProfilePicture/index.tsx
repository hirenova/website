import Image, { ImageProps } from "components/Image"
import styled from "styled-components"

const Wrapper = styled(Image)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export interface ProfilePictureProps extends ImageProps {}

const ProfilePicture = ({ className, ...props }: ProfilePictureProps) => {
  return (
    <Wrapper
      className={className}
      as="img"
      src={"/profile_picture_default.png"} // TODO
      referrerPolicy="no-referrer"
      {...props}
    ></Wrapper>
  )
}

export default ProfilePicture
