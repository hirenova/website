export type DisplayConditionAuthId = "logged_in" | "not_logged_in" | "always"

export type DisplayConditionProfileTypeId =
  | "candidate"
  | "employer"
  | "always"
  | "either"
  | "neither"

export interface NavigationItem {
  children: string
  redirect: { pathname: string }
  displayConditionAuthId: DisplayConditionAuthId
  displayConditionProfileTypeId: DisplayConditionProfileTypeId
}

export type Navigation = NavigationItem[]

const navigation: Navigation = [
  {
    children: "Home",
    redirect: { pathname: "/" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Dashboard",
    redirect: { pathname: "/dashboard/profile" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Candidates",
    redirect: { pathname: "/candidates" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Jobs",
    redirect: { pathname: "/jobs" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Contact",
    redirect: { pathname: "/contact" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "About",
    redirect: { pathname: "/about" },
    displayConditionAuthId: "always",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Profile",
    redirect: { pathname: "/dashboard/profile" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Post a job",
    redirect: { pathname: "/dashboard/post-job" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "employer",
  },
  {
    children: "Resume",
    redirect: { pathname: "/dashboard/resume" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "candidate",
  },
  {
    children: "Applications",
    redirect: { pathname: "/dashboard/applications" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "candidate",
  },
  {
    children: "Jobs posted",
    redirect: { pathname: "/dashboard/jobs-posted" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "employer",
  },
  {
    children: "Notifications",
    redirect: { pathname: "/dashboard/notifications" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "TEST candidate",
    redirect: { pathname: "/dashboard/candidate" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "candidate",
  },
  {
    children: "TEST employer",
    redirect: { pathname: "/dashboard/employer" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "employer",
  },
  {
    children: "TEST either",
    redirect: { pathname: "/dashboard/either" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "either",
  },
  {
    children: "TEST neither",
    redirect: { pathname: "/dashboard/neither" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "neither",
  },
  {
    children: "TEST always",
    redirect: { pathname: "/dashboard/always" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
  {
    children: "Settings",
    redirect: { pathname: "/dashboard/settings" },
    displayConditionAuthId: "logged_in",
    displayConditionProfileTypeId: "always",
  },
]

export default navigation
