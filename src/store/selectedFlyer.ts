import { atom } from "recoil"
import { RecoilAtomKeys } from "./RecoilKeys"

export const selectedFlyer = atom({
  key: RecoilAtomKeys.SELECTED_FLYER,
  default: {
    id: "",
    title: "",
    views: 0,
    target: "",
    posterId: "",
    imageURL: "",
    contact: "",
    explain: "",
  },
})
