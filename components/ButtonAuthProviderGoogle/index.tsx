import ButtonAuth, {
  ButtonAuthProviderProps,
} from "components/ButtonAuthProvider";
import { FaGoogle } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled(ButtonAuth)``;

interface ButtonAuthProviderGoogleProps
  extends Pick<ButtonAuthProviderProps, "method"> {
  className?: string;
}

const ButtonAuthProviderGoogle = ({
  className,
  ...props
}: ButtonAuthProviderGoogleProps) => {
  return (
    <Wrapper
      className={className}
      provider="google"
      label="Google"
      icon={<FaGoogle />}
      {...props}
    />
  );
};

export default ButtonAuthProviderGoogle;
