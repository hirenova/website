import Form from "components/Form";
import { useRouter } from "next/router";
import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import styled from "styled-components";
import { encodeURIAll, encodeURIComponents } from "utils";

import InputKeywords from "./InputKeywords";
import InputLocation from "./InputLocation";
import SubmitButton from "./SubmitButton";

const Wrapper = styled(Form)`
  background: white;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 5px 5px 15px rgb(64 79 104 / 5%);
  display: flex;
  gap: 20px;
  align-items: center;
  width: fit-content;
`;

const Separator = styled.div`
  height: 40px;
  background: grey;
  width: 1px;
`;

interface SearchFormProps {
  className?: string;
}

const SearchForm = ({ className }: SearchFormProps) => {
  const [keywords, setKeywords] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    router.push(encodeURIAll("/jobs", { keywords, location }));
  };

  const onKeywordsChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setKeywords(event.target.value);
  };

  const onLocationChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Wrapper className={className} onSubmit={onSubmit}>
      <InputKeywords onChange={onKeywordsChange} />
      <Separator />
      <InputLocation onChange={onLocationChange} />
      <SubmitButton />
    </Wrapper>
  );
};

export default SearchForm;
