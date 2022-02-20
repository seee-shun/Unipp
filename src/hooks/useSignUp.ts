import { useCallback } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

import { auth } from "../lib/firebase"

type Props = {
  univEmail: string
  password: string
}

export const useSignUp = () => {
  const router = useRouter()
  const signUp = useCallback((props: Props) => {
    const { univEmail, password } = props
    try {
      createUserWithEmailAndPassword(auth, univEmail, password).then((userCredential) => {
        auth.languageCode = 'ja'
        const user = userCredential.user
        sendEmailVerification(user)
        router.push("/signUp/created")
      })
    } catch (err) {
      alert(err)
    }

  }, [])
  return { signUp }
}
