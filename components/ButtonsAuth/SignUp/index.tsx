import Button, { ButtonProps } from "components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled(Button)``;

interface SignUpProps extends ButtonProps {}

const SignUp = ({ className, ...props }: SignUpProps) => {
  const router = useRouter();

  return (
    <Wrapper
      className={className}
      redirect={{
        pathname: "/signup",
        query: ["", "/", "/login", "/signup"].includes(router.pathname)
          ? undefined
          : { path: router.pathname },
      }}
      {...props}
    >
      Sign up
    </Wrapper>
  );
};

export default SignUp;
