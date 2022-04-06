import Button, { ButtonProps } from "components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled(Button)``;

interface LoginProps extends ButtonProps {}

const Login = ({ className, ...props }: LoginProps) => {
  const router = useRouter();
  return (
    <Wrapper
      className={className}
      redirect={{
        pathname: "/login",
        query: ["", "/", "/login", "/signup"].includes(router.pathname)
          ? undefined
          : { path: router.pathname },
      }}
      {...props}
    >
      Log in
    </Wrapper>
  );
};

export default Login;
