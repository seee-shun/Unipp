import { useCallback } from "react"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

import { auth } from "../lib/firebase"

type Props = {
  email: string
  password: string
}

export const useSignUp = () => {
  const router = useRouter()
  const signUp = useCallback((props: Props) => {
    const { email, password } = props
    try {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
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
