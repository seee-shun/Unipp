import { atom } from "recoil"
import { RecoilAtomKeys } from "./RecoilKeys"

export const userState = atom({
  key: RecoilAtomKeys.USER_STATE,
  default: {
    id: "",
    name: "",
    email: "",
    univercity: "",
    iconURL: "",
  },
})
