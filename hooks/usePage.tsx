import { PageContext } from "providers/PageProvider";
import { useContext } from "react";

const usePage = () => {
  return useContext(PageContext);
};

export default usePage;
