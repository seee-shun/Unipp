import { atom } from "recoil"
import { RecoilAtomKeys } from "./RecoilKeys"

export const selectedFlyer = atom({
  key: RecoilAtomKeys.SELECTED_FLYER,
  default: {
    id: "",
    title: "",
    views: "",
    target: "",
    posterId: "",
    imageURL: "",
    contacts: "",
    explain: "",
  },
})
