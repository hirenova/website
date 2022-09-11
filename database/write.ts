import { User } from "@supabase/supabase-js"
import supabase from "config/supabase"
import { JobWrite } from "models/job"
import Profile from "models/profile"

export interface ProfileResponse
  extends Pick<
    Profile,
    | "id"
    | "activeProfileType"
    | "hasEmployerProfile"
    | "hasCandidateProfile"
    | "firstName"
    | "lastName"
  > {}

const profile = async (user: User) => {
  // TODO this is called multiple times
  const { data, error } = await supabase
    .from("Profile")
    .upsert({ id: user.id })
    .select()
    .eq("id", user.id)
    .maybeSingle()
  console.log(data)
  if (error || !data) throw error
  return data as ProfileResponse
}

const job = async (job: JobWrite) => {
  const { data, error } = await supabase.from("Job").insert(job)
  console.log(data)
  if (error || !data) throw error
}

const activateProfileType = async (
  profileId: string,
  profileType: Profile["activeProfileType"]
) => {
  const { error } = await supabase
    .from("Profile")
    .update({ activeProfileType: profileType })
    .eq("id", profileId)
  if (error) throw error
}

const enableCandidateProfile = async (profileId: string) => {
  const { error } = await supabase
    .from("Profile")
    .update({ hasCandidateProfile: true })
    .eq("id", profileId)
  if (error) throw error
}

const enableEmployerProfile = async (profileId: string) => {
  const { error } = await supabase
    .from("Profile")
    .update({ hasEmployerProfile: true })
    .eq("id", profileId)
  if (error) throw error
}

const write = {
  profile,
  job,
  enableCandidateProfile,
  enableEmployerProfile,
  activateProfileType,
}

export default write
