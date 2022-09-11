import { Provider, UserCredentials } from "@supabase/supabase-js"
import supabase from "config/supabase"
import { PickFromUnion } from "generics"
import { useRouter } from "next/router"
import { SupabaseContext } from "providers/SupabaseProvider"
import { useContext } from "react"

import useToast from "./useToast"

export type AuthProviderId = PickFromUnion<
  Provider,
  "github" | "google" | "linkedin"
>

interface UserCredentialEmailPassword {
  email: UserCredentials["email"]
  password: Required<UserCredentials>["password"]
}

interface UserCredentialProvider {
  provider: AuthProviderId
}

type UserCredential = UserCredentialEmailPassword | UserCredentialProvider

const useAuth = () => {
  const toast = useToast()
  const router = useRouter()

  const {
    loading,
    session,
    user,
    error,
    profile,
    setError,
    setLoading,
    refreshProfile,
  } = useContext(SupabaseContext)

  const signUp = async (credentials: UserCredential) => {
    setLoading(true)
    const { error } = await supabase.auth.signUp(credentials)
    setError(error)
    if (!error) {
      toast({ description: "Signed up", status: "success" })
    }
    setLoading(false)
  }

  const login = async (credentials: UserCredential) => {
    console.log("logging in 123")
    setLoading(true)
    const { error } = await supabase.auth.signIn(credentials, {
      redirectTo: "/login",
    })
    setError(error)
    if (!error) {
      toast({ description: "Logged in", status: "success" })
    }
    setLoading(false)
  }

  const logout = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signOut()
    setError(error)
    if (!error) toast({ description: "Logged out", status: "success" })
    setLoading(false)
    router.push("/")
  }

  return {
    user,
    profile,
    session,
    loading,
    error,
    signUp,
    login,
    logout,
    refreshProfile,
  }
}

export default useAuth
