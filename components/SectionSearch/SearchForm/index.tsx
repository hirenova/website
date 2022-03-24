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
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgb(64 79 104 / 5%);
  @media (min-width: 1000px) {
    align-items: center;
    max-width: fit-content;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Separator = styled.div`
  background: lightgrey;
  @media (min-width: 1000px) {
    height: 100%;
    width: 1px;
  }
  @media (max-width: 1000px) {
    height: 1px;
    width: 100%;
    flex-direction: column;
  }
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
