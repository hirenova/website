import Form from "components/Form";
import Input from "components/Input";
import Section from "components/Section";
import SectionContent from "components/SectionContent";
import SectionLabel from "components/SectionLabel";
import styled from "styled-components";

const Wrapper = styled(Section)``;

interface PostJobProps {
  className?: string;
}

const PostJob = ({ className }: PostJobProps) => {
  return (
    <Wrapper className={className} label="Post a job">
      <SectionLabel>Post a job</SectionLabel>
      <SectionContent>
        <Form>
          <Input />
        </Form>
      </SectionContent>
    </Wrapper>
  );
};

export default PostJob;
