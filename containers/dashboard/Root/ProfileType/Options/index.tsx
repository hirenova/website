import Box, { BoxProps } from "components/Box";
import Button from "components/Button";
import { db } from "config/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import useApp from "hooks/useApp";
import { MouseEventHandler } from "react";
import styled from "styled-components";

import Item from "./Item";
import List from "./List";
import ListItem from "./ListItem";

const Wrapper = styled(Box)`
  display: flex;
  gap: 40px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

interface OptionsProps extends BoxProps {}

const Options = ({ className, ...props }: OptionsProps) => {
  const { user } = useApp();

  if (!user) return null;

  const onCandidate: MouseEventHandler<HTMLButtonElement> = () => {
    updateDoc(doc(db, "users", user.uid), { candidate: {} });
  };

  const onEmployer: MouseEventHandler<HTMLButtonElement> = () => {
    updateDoc(doc(db, "users", user.uid), { employer: {} });
  };

  return (
    <Wrapper className={className} {...props}>
      <Item>
        <Button colorScheme={"blue"} size="lg" onClick={onCandidate}>
          Candidate
        </Button>
        <List>
          <ListItem>Apply for jobs</ListItem>
          <ListItem>Upload a resume</ListItem>
          <ListItem>Receive referrals</ListItem>
        </List>
      </Item>
      <Item>
        <Button colorScheme={"purple"} size="lg" onClick={onEmployer}>
          Employer
        </Button>
        <List>
          <ListItem>Post jobs</ListItem>
          <ListItem>Create a company page</ListItem>
          <ListItem>Assess applications</ListItem>
        </List>
      </Item>
    </Wrapper>
  );
};

export default Options;
