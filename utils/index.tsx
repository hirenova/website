import { User } from "@supabase/supabase-js"
import Profile from "models/profile"
import {
  DisplayConditionAuthId,
  DisplayConditionProfileTypeId,
} from "navigation"

interface EncodeURIComponentsParams {
  [name: string]: string
}

export const encodeURIComponents = (
  params: EncodeURIComponentsParams
): string => {
  const queryString = Object.entries(params)
    .filter(([, value]) => value !== "")
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&")
  return queryString
}

export const encodeURIAll = (
  directory: string,
  params: EncodeURIComponentsParams | string
): string => {
  if (typeof params !== "string") {
    params = encodeURIComponents(params)
    if (params === "") return directory
  }
  return `${directory}?${params}`
}

export const acceptLogin = (
  displayConditionAuthId: DisplayConditionAuthId,
  user: User | null | undefined
): boolean => {
  const accept = Boolean(
    displayConditionAuthId === "always" ||
      (displayConditionAuthId === "logged_in" && user) ||
      (displayConditionAuthId === "not_logged_in" && !user)
  )
  return accept
}

export const acceptProfileType = (
  displayConditionProfileTypeId: DisplayConditionProfileTypeId,
  activeProfileType: Profile["activeProfileType"] | null | undefined
): boolean => {
  if (displayConditionProfileTypeId === "always") return true
  if (
    displayConditionProfileTypeId === "candidate" &&
    activeProfileType === "CANDIDATE"
  )
    return true
  if (
    displayConditionProfileTypeId === "employer" &&
    activeProfileType === "EMPLOYER"
  )
    return true
  if (displayConditionProfileTypeId === "either" && activeProfileType)
    return true
  if (displayConditionProfileTypeId === "neither" && activeProfileType === null)
    return true
  return false
}
