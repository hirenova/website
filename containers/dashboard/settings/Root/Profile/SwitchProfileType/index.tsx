import Button, { ButtonProps } from "components/Button";
import { updateDoc } from "firebase/firestore";
import useApp from "hooks/useApp";
import { ProfileTypeIdSelected, UserDocumentData } from "providers/AppProvider";
import { MouseEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled(Button)``;

interface SwitchProfileTypeProps extends Partial<ButtonProps> {}

const SwitchProfileType = ({}: SwitchProfileTypeProps) => {
  const { profileTypeIdSelected, userDocument } = useApp();

  const profileTypeIdOther: ProfileTypeIdSelected =
    profileTypeIdSelected == "candidate" ? "employer" : "candidate";

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (userDocument)
      updateDoc<UserDocumentData>(userDocument.ref, {
        profileTypeIdSelected: profileTypeIdOther,
      });
  };

  return (
    <Wrapper onClick={onClick}>Switch to {profileTypeIdOther} profile</Wrapper>
  );
};

export default SwitchProfileType;
