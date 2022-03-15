import styled from "styled-components";

const Wrapper = styled.div``;

interface MessageProps {
  className: string;
}

const Message = ({ className }: MessageProps) => {
  return <Wrapper className={className}>Message</Wrapper>;
};

export default Message;
