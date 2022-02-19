import { useCallback } from "react"
import { useRouter } from "next/router"
import { signInWithEmailAndPassword } from "@firebase/auth"

import { auth } from '../lib/firebase'

type Props = {
    email: string
    password: string
}

export const useSignIn = () => {
    const router = useRouter()
    const signIn = useCallback((props: Props) => {
        const { email, password } = props
        try {
            signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                const user = userCredential.user
                if (!user.emailVerified) {
                    alert('認証メールを確認して下さい。認証メールが届かない場合は、迷惑フォルダの確認もお願いします。')
                } else {
                    router.push('/events')
                }
            }).catch(err => {
                alert(err)
            })
        } catch (err) {
            alert("メールアドレスまたはパスワードが違います。メールアドレスで認証がまだの場合は、迷惑メールフォルダなども確認してください。")
        }

    }, [])
    return { signIn }
}