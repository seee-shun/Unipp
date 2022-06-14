import type { Events } from "types/app/events"
import { Timestamp as FirebaseTimeStamp } from "firebase/firestore"

// typeは上書きできないので、intergfaceのがよさげ

export type FirebaseEvents = Events & {
  timestamp: FirebaseTimeStamp
  poster: string
  period: {
    start: FirebaseTimeStamp
    finish: FirebaseTimeStamp
  }
}
