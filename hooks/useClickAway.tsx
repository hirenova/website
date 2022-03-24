import { RefObject, useEffect, useRef } from "react";

const useClickAway = (
  callback: () => void,
  ignore?: RefObject<HTMLDivElement>
) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickAway = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickAway, true);
    document.addEventListener("contextmenu", onClickAway, true);
    document.onkeydown = function (event) {
      if (event.key === "Escape") {
        callback();
      }
    };

    return () => {
      document.removeEventListener("click", onClickAway, true);
      document.removeEventListener("contextmenu", onClickAway, true);
    };
  });

  return { ref };
};

export default useClickAway;
