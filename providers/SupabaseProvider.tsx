import { ApiError, Session, User } from "@supabase/supabase-js"
import { Auth } from "@supabase/ui"
import read from "database/read"
import write from "database/write"
import useToast from "hooks/useToast"
import Profile from "models/profile"
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react"

interface SupabaseProviderProps {
  children: React.ReactNode
}

interface SupabaseContextValue {
  error?: ApiError | null
  loading: boolean
  profile?: Profile
  session: Session | null
  user: User | null
  setError: Dispatch<SetStateAction<ApiError | null | undefined>>
  setLoading: Dispatch<SetStateAction<boolean>>
  refreshProfile: () => void
}

const initialSupabaseContextValue = {
  error: undefined,
  loading: false,
  profile: undefined,
  session: null,
  user: null,
  setError: () => undefined,
  setLoading: () => undefined,
  refreshProfile: () => undefined,
}

export const SupabaseContext = createContext<SupabaseContextValue>(
  initialSupabaseContextValue
)

const SupabaseProvider = ({ children }: SupabaseProviderProps) => {
  const { session, user } = Auth.useUser()
  const [error, setError] = useState<SupabaseContextValue["error"]>(
    initialSupabaseContextValue["error"]
  )
  const [loading, setLoading] = useState<SupabaseContextValue["loading"]>(
    initialSupabaseContextValue["loading"]
  )
  const [profile, setProfile] = useState<SupabaseContextValue["profile"]>(
    initialSupabaseContextValue["profile"]
  )

  const toast = useToast()

  useEffect(() => {
    if (!error) return
    console.log(error)
    toast({ description: error?.message, status: "error" })
  }, [error])

  useEffect(() => {
    const updateProfile = async () => {
      if (user && !profile) {
        const profile = await write.profile(user)
        setProfile(profile)
      }
      if (!user && profile) {
        setProfile(undefined)
      }
      if (profile && !profile.activeProfileType) {
        if (profile.hasCandidateProfile)
          write.activateProfileType(profile.id, "CANDIDATE")
        else if (profile.hasEmployerProfile)
          write.activateProfileType(profile.id, "EMPLOYER")
        await refreshProfile()
      }
    }
    updateProfile()
  }, [user])

  useEffect(() => {
    console.log("profile changed", profile)
  }, [profile])

  const refreshProfile = async () => {
    console.log("refreshing profile")
    if (!profile) throw `cannot read ${typeof profile} profile`
    const newProfile = await read.profile(profile.id)
    setProfile(newProfile)
  }

  return (
    <SupabaseContext.Provider
      value={{
        error,
        loading,
        profile,
        session,
        user,
        setError,
        setLoading,
        refreshProfile,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  )
}

export default SupabaseProvider
