import { useCallback } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import { auth, firestore } from "../lib/firebase"
import { useRecoilValue } from "recoil"
import { univListState } from "store/univListState"

type Props = {
  email: string
  password: string
  userName: string
}

export const useSignUp = () => {
  const router = useRouter()
  const univList = useRecoilValue(univListState)

  const creteUserDocument = async (uid: string, email: string | null, userName: string, univList: any) => {
    const defaultIcon =
      "https://firebasestorage.googleapis.com/v0/b/unipp-develop.appspot.com/o/default_icon%2Fdf_ic_1.jpeg?alt=media&token=8cb1ea1a-1e0a-4005-9c6c-77c63f042d2e"
    try {
      const usersField = {
        name: userName,
        email: email,
        userIcon: defaultIcon,
        createdAt: Timestamp.now(),
        univName: univList.name,
        univAddress: univList.address,
        univArea: univList.area,
        univSchoolColor: univList.school_color,
        updatedAt: Timestamp.now(),
      }
      await setDoc(doc(firestore, "users", uid), usersField).then(() => {
        const events = "events"
        setDoc(doc(firestore, "users", uid, events, "read"), { ids: [] })
        setDoc(doc(firestore, "users", uid, events, "post"), { ids: [] })
        setDoc(doc(firestore, "users", uid, events, "join"), { ids: [] })
        setDoc(doc(firestore, "users", uid, events, "favorite"), { ids: [] })
        const flyers = "flyers"
        setDoc(doc(firestore, "users", uid, flyers, "post"), { ids: [] })
        setDoc(doc(firestore, "users", uid, flyers, "favorite"), { ids: [] })
      })
    } catch (error) {
      console.error("failed to register user's doc")
      alert(error)
    }
  }

  const signUp = useCallback((props: Props) => {
    const { email, password, userName } = props
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        auth.languageCode = "ja"
        const user = userCredential.user
        sendEmailVerification(user)
        creteUserDocument(user.uid, user.email, userName, univList)
          .then(() => {
            router.push("/signUp/created")
          })
          .catch((err) => {
            console.log(err)
          })
      })
    } catch (err) {
      alert(err)
      console.error("failed to create New Account")
    }
  }, [])
  return { signUp }
}
