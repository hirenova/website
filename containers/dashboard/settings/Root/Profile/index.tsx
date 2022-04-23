import Card from "components/Card";
import Section from "components/Section";
import SectionContent from "components/SectionContent";
import SectionLabel from "components/SectionLabel";
import styled from "styled-components";

import SwitchProfileType from "./SwitchProfileType";

const Wrapper = styled(Section)``;

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <Wrapper as={Card}>
      <SectionLabel>Profile settings</SectionLabel>
      <SectionContent>
        <SwitchProfileType />
      </SectionContent>
    </Wrapper>
  );
};

export default Profile;
