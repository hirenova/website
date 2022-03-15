import React from "react";
import styled from "styled-components";

import Content from "./Content";
import Label from "./Label";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  label: string;
}

interface InitialProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = styled.div<InitialProps>`
  height: calc(100vh - 100px);
`;

const Section = ({ className, children, label }: SectionProps) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Content className={className}>{children}</Content>
    </Wrapper>
  );
};

export default Section;
