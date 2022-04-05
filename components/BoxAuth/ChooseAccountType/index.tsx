import { Button, ButtonProps } from "@chakra-ui/react";
import Box from "components/Box";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled(Box)`
  display: flex;
  gap: 20px;
`;

interface ButtonAccountTypeProps extends ButtonProps {
  $selected: boolean;
}

const ButtonType = styled(Button)<ButtonAccountTypeProps>`
  ${({ $selected }) =>
    $selected
      ? css`
          background: #3169ad;
          color: white;
          :hover {
            color: white;
            background: #3169ad;
          }
        `
      : css``}
`;

type AccountType = "candidate" | "employer";

interface ChooseAccountTypeProps {
  className?: string;
  setAccountType: Dispatch<SetStateAction<AccountType>>;
  accountType: AccountType;
}

const ChooseAccountType = ({
  className,
  accountType,
  setAccountType,
}: ChooseAccountTypeProps) => {
  const onClickCandidate: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAccountType("candidate");
  };

  const onClickEmployer: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAccountType("employer");
  };

  return (
    <Wrapper className={className}>
      <ButtonType
        onClick={onClickCandidate}
        $selected={accountType === "candidate"}
      >
        Candidate
      </ButtonType>
      <ButtonType
        onClick={onClickEmployer}
        $selected={accountType === "employer"}
      >
        Employer
      </ButtonType>
    </Wrapper>
  );
};

export default ChooseAccountType;
