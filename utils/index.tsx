import {
  DisplayConditionAuthId,
  DisplayConditionProfileTypeId,
} from "components/ButtonNavigation";
import { User } from "firebase/auth";
import { ProfileTypeIdSelected } from "providers/AppProvider";

interface EncodeURIComponentsParams {
  [name: string]: string;
}

export const encodeURIComponents = (
  params: EncodeURIComponentsParams
): string => {
  const queryString = Object.entries(params)
    .filter(([key, value]) => value !== "")
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  return queryString;
};

export const encodeURIAll = (
  directory: string,
  params: EncodeURIComponentsParams | string
): string => {
  if (typeof params !== "string") {
    params = encodeURIComponents(params);
    if (params === "") return directory;
  }
  return `${directory}?${params}`;
};

export const redirectLogin = () => {};

export const redirectSignUp = () => {};

export const acceptLogin = (
  displayConditionAuthId: DisplayConditionAuthId,
  user: User | null | undefined
): boolean => {
  const accept = Boolean(
    displayConditionAuthId === "always" ||
      (displayConditionAuthId === "logged_in" && user) ||
      (displayConditionAuthId === "not_logged_in" && !user)
  );
  return accept;
};

export const acceptProfileType = (
  displayConditionProfileTypeId: DisplayConditionProfileTypeId,
  profileTypeIdSelected: ProfileTypeIdSelected
): boolean => {
  const accept = Boolean(
    (displayConditionProfileTypeId === "candidate" &&
      profileTypeIdSelected === "candidate") ||
      (displayConditionProfileTypeId === "employer" &&
        profileTypeIdSelected === "employer") ||
      displayConditionProfileTypeId === "always" ||
      (displayConditionProfileTypeId === "either" &&
        typeof profileTypeIdSelected === "string" &&
        ["candidate", "employer"].includes(profileTypeIdSelected)) ||
      (displayConditionProfileTypeId === "neither" &&
        profileTypeIdSelected === null)
  );

  return accept;
};
