import { useCallback } from "react"
import { useRouter } from "next/router"
import { signInWithEmailAndPassword } from "@firebase/auth"
import { doc, getDoc } from "@firebase/firestore"
import { auth, firestore } from "../lib/firebase"
import { useSetRecoilState } from "recoil"
import { userState } from "store/userState"

type Props = {
  email: string
  password: string
}

export const useSignIn = () => {
  const router = useRouter()
  const setUserState = useSetRecoilState(userState)
  const getUser = async (uid: string) => {
    const userRef = doc(firestore, "users", uid)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      const userData = userSnap.data()
      setUserState({
        id: uid,
        name: userData.name,
        email: userData.email,
        univercity: userData.univName,
        univercity_area: userData.univName,
        univercity_school_color: userData.univSchoolColor,
        iconURL: userData.userIcon,
      })
    } else {
      console.error("can't find doc")
    }
  }

  const signIn = useCallback((props: Props) => {
    const { email, password } = props
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          if (!user.emailVerified) {
            alert("認証メールを確認して下さい。認証メールが届かない場合は、迷惑フォルダの確認もお願いします。")
          } else {
            getUser(user.uid).then(() => {
              router.push("/events")
            })
          }
        })
        .catch((err) => {
          alert(err)
        })
    } catch (err) {
      alert(
        "メールアドレスまたはパスワードが違います。メールアドレスで認証がまだの場合は、迷惑メールフォルダなども確認してください。"
      )
    }
  }, [])
  return { signIn }
}
