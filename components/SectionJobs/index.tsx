import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

interface SectionJobsProps {
  className?: string;
}

const SectionJobs = ({ className }: SectionJobsProps) => {
  const [keywords, setKeywords] = useState<string | string[]>("");
  const [location, setLocation] = useState<string | string[]>("");

  const router = useRouter();

  useEffect(() => {
    const { keywords, location } = router.query;
    if (keywords !== undefined) setKeywords(keywords);
    if (location !== undefined) setLocation(location);
  }, [router]);
  return <Wrapper className={className}>SectionJobs</Wrapper>;
};

export default SectionJobs;
