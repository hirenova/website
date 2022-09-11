import supabase from "config/supabase"
import { JobRead } from "models/job"
import Organization from "models/organization"
import Profile from "models/profile"

const jobs = async () => {
  const response = await supabase.from<JobRead>("Job").select()
  return response.data
}

export interface JobCardResponse
  extends Pick<
    JobRead,
    | "createdAt"
    | "experienceLevel"
    | "extent"
    | "format"
    | "id"
    | "locationTitle"
    | "payAmount"
    | "payCurrency"
    | "payPeriod"
    | "time"
    | "title"
  > {
  Organization: Pick<Organization, "title">
}

const jobCards = async () => {
  const { data, error } = await supabase
    .from("Job")
    .select(
      `
        createdAt,
        experienceLevel,
        extent,
        format,
        id,
        locationTitle,
        payAmount,
        payCurrency,
        payPeriod,
        time,
        title,
        Organization:organizationId ( title )
    `
    )
    .eq("active", "true")
  console.log(data)
  if (error || !data) throw error
  return data as JobCardResponse[]
}

const jobCount = async () => {
  const { error, count } = await supabase
    .from("Job")
    .select("*", { count: "exact", head: true })

  if (error || !count) throw error
  return count
}

interface ProfileResponse
  extends Pick<
    Profile,
    | "id"
    | "activeProfileType"
    | "hasEmployerProfile"
    | "hasCandidateProfile"
    | "firstName"
    | "lastName"
  > {}

const profile = async (profileId: string) => {
  const { data, error } = await supabase
    .from("Profile")
    .select()
    .eq("id", profileId)
    .maybeSingle()
  console.log(data)
  if (error || !data) throw error
  return data as ProfileResponse
}

const organizations = async () => {
  const response = await supabase.from<Organization>("Organization").select()
  return response.data
}

const read = { jobs, jobCards, jobCount, organizations, profile }

export default read
