import Button from "components/Button"
import CardDashboard from "components/CardDashboard"
import FormControl from "components/FormControl"
import FormDashboard from "components/FormDashboard"
import FormLabel from "components/FormLabel"
import Input from "components/Input"
import InputTextarea from "components/InputTextarea"
import write from "database/write"
import { Job } from "models/job"
import { ChangeEventHandler, FormEventHandler, useState } from "react"
import styled from "styled-components"

const Wrapper = styled(CardDashboard)``

interface PostJobProps {
  className?: string
}

const PostJob = ({ className }: PostJobProps) => {
  const [loading, setLoading] = useState<boolean>(false)

  const [title, setTitle] = useState<Job["title"]>("")

  // const [description, setDescription] = useState<EditorState>(() =>
  //   EditorState.createEmpty()
  // );

  const [description, setDescription] = useState<Job["description"]>()

  // const [creator, setCreator] = useState<JobDocumentData["creator"]>("");

  const [company, setCompany] = useState<string>("")

  const [location, setLocation] = useState<Job["locationTitle"]>("")

  // const [deadline, setDeadline] = useState<JobDocumentData["deadline"]>();

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value)
  }

  // const onDescriptionChange = (editorState: EditorState) => {
  //   setDescription(editorState);
  // };

  const onDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setDescription(event.target.value)
  }

  // const onCreatorChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setCreator(event.target.value);
  // };

  const onCompanyChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCompany(event.target.value)
  }

  const onLocationChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocation(event.target.value)
  }

  // const onDeadlineChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   // setDeadline(event.target.value);
  // };

  const clearForm = () => {
    setTitle("")
    setDescription("")
    setCompany("")
    setLocation("")
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = async () => {
    setLoading(true)
    // const jobDocumentData: JobDocumentData = {
    //   title,
    //   description,
    //   company,
    //   location,
    // }

    // await addDoc(collection(db, "jobs"), jobDocumentData)

    write.job({
      title,
      description,
      organizationId: "62e2f8ea-5ba6-4277-b1b6-6feae16a764f", // TODO
      locationTitle: location, // TODO
    })

    clearForm()
    setLoading(false)
  }

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
  )
}

export default PostJob
