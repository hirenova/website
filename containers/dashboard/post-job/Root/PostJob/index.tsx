import Button from "components/Button";
import CardDashboard from "components/CardDashboard";
import FormControl from "components/FormControl";
import FormDashboard from "components/FormDashboard";
import FormLabel from "components/FormLabel";
import Input from "components/Input";
import InputTextarea from "components/InputTextarea";
import { db } from "config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { JobDocumentData } from "providers/AppProvider";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(CardDashboard)``;

interface PostJobProps {
  className?: string;
}

const PostJob = ({ className }: PostJobProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<JobDocumentData["title"]>("");

  // const [description, setDescription] = useState<EditorState>(() =>
  //   EditorState.createEmpty()
  // );

  const [description, setDescription] =
    useState<JobDocumentData["description"]>();

  // const [creator, setCreator] = useState<JobDocumentData["creator"]>("");

  const [company, setCompany] = useState<JobDocumentData["company"]>("");

  const [location, setLocation] = useState<JobDocumentData["location"]>("");

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

  const onLocationChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocation(event.target.value);
  };

  // const onDeadlineChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   // setDeadline(event.target.value);
  // };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setCompany("");
    setLocation("");
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    setLoading(true);
    const jobDocumentData: JobDocumentData = {
      title,
      description,
      company,
      location,
    };

    await addDoc(collection(db, "jobs"), jobDocumentData);

    clearForm();
    setLoading(false);
  };

  return (
    <Wrapper className={className} label="Post a job">
      <FormDashboard onSubmit={onSubmit}>
        <FormControl isRequired>
          <FormLabel>Job title</FormLabel>
          <Input
            placeholder="Job title"
            value={title}
            onChange={onTitleChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Job description</FormLabel>
          <InputTextarea
            maxHeight={500}
            // editorState={description}
            placeholder="Job description"
            value={description}
            onChange={onDescriptionChange}
          />
        </FormControl>
        {/* <FormControl>
            <FormLabel>Job creator</FormLabel>
            <Input placeholder="Job creator" onChange={onCreatorChange} />
          </FormControl> */}
        <FormControl isRequired>
          <FormLabel>Job company</FormLabel>
          <Input
            placeholder="Job company"
            value={company}
            onChange={onCompanyChange}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Job location</FormLabel>
          <Input
            maxHeight={500}
            placeholder="Job location"
            value={location}
            onChange={onLocationChange}
          />
        </FormControl>
        {/* <FormControl>
            <FormLabel>Job deadline</FormLabel>
            <Input placeholder="Job deadline" onChange={onDeadlineChange} />
          </FormControl> */}
        <Button type="submit" isLoading={loading}>
          Submit
        </Button>
      </FormDashboard>
    </Wrapper>
  );
};

export default PostJob;
