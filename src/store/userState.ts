import { atom } from "recoil"
import { RecoilAtomKeys } from "./RecoilKeys"
import { recoilPersist } from "recoil-persist"

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: typeof window === "undefined" ? undefined : sessionStorage,
})

export const userState = atom({
  key: RecoilAtomKeys.USER_STATE,
  default: {
    id: "",
    name: "",
    email: "",
    univercity: "",
    univercity_area: "",
    univercity_school_color: "",
    iconURL: "",
  },
  effects_UNSTABLE: [persistAtom],
})
