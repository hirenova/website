import Button from "components/Button";
import Card, { CardProps } from "components/Card";
import Form from "components/Form";
import FormControl from "components/FormControl";
import FormLabel from "components/FormLabel";
import Input from "components/Input";
import InputTextarea from "components/InputTextarea";
import SectionContent from "components/SectionContent";
import SectionLabel from "components/SectionLabel";
import { db } from "config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { JobDocumentData } from "providers/AppProvider";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(Card)``;

interface PostJobProps extends CardProps {}

const PostJob = ({ className, ...props }: PostJobProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<JobDocumentData["title"]>("");

  // const [description, setDescription] = useState<EditorState>(() =>
  //   EditorState.createEmpty()
  // );

  const [description, setDescription] =
    useState<JobDocumentData["description"]>();

  // const [creator, setCreator] = useState<JobDocumentData["creator"]>("");

  const [company, setCompany] = useState<JobDocumentData["company"]>("");

  // const [deadline, setDeadline] = useState<JobDocumentData["deadline"]>();

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  // const onDescriptionChange = (editorState: EditorState) => {
  //   setDescription(editorState);
  // };

  const onDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setDescription(event.target.value);
  };

  // const onCreatorChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setCreator(event.target.value);
  // };

  const onCompanyChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCompany(event.target.value);
  };

  // const onDeadlineChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   // setDeadline(event.target.value);
  // };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    setLoading(true);
    const jobDocumentData: JobDocumentData = { title, description, company };

    const documentReference = await addDoc(
      collection(db, "jobs"),
      jobDocumentData
    );
    setLoading(false);
  };

  return (
    <Wrapper className={className} {...props}>
      <SectionLabel>Post a job</SectionLabel>
      <SectionContent>
        <Form onSubmit={onSubmit}>
          <FormControl isRequired>
            <FormLabel>Job title</FormLabel>
            <Input placeholder="Job title" onChange={onTitleChange} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Job description</FormLabel>
            <InputTextarea
              // editorState={description}
              value={description}
              placeholder="Job description"
              onChange={onDescriptionChange}
            />
          </FormControl>
          {/* <FormControl>
            <FormLabel>Job creator</FormLabel>
            <Input placeholder="Job creator" onChange={onCreatorChange} />
          </FormControl> */}
          <FormControl isRequired>
            <FormLabel>Job company</FormLabel>
            <Input placeholder="Job company" onChange={onCompanyChange} />
          </FormControl>
          {/* <FormControl>
            <FormLabel>Job deadline</FormLabel>
            <Input placeholder="Job deadline" onChange={onDeadlineChange} />
          </FormControl> */}
          <Button type="submit" isLoading={loading}>
            Submit
          </Button>
        </Form>
      </SectionContent>
    </Wrapper>
  );
};

export default PostJob;
