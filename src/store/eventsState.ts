import { atom } from "recoil"
import { RecoilAtomKeys } from "./RecoilKeys"
import { FirebaseEvents } from "types/firebase/events"

export const eventsState = atom({
  key: RecoilAtomKeys.EVENTS_STATE,
  default: [],
})
