import useAuth from "hooks/useAuth";
import styled from "styled-components";

import Login from "./Login";
import Logout from "./Logout";
import SignUp from "./SignUp";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
  height: 100%;
  align-items: center;
`;

interface AuthProps {
  className?: string;
}

const Auth = ({ className }: AuthProps) => {
  return (
    <Wrapper className={className}>
      <Logout />
      <Login />
      <SignUp />
    </Wrapper>
  );
};

export default Auth;
