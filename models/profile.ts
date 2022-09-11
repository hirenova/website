import { Boolean, Literal, Record, Static, String, Union } from "runtypes"

const profile = Record({
  id: String,
  activeProfileType: Union(Literal("CANDIDATE"), Literal("EMPLOYER")),
  hasEmployerProfile: Boolean,
  hasCandidateProfile: Boolean,
  firstName: String,
  lastName: String,
})

type Profile = Static<typeof profile>

export default Profile
