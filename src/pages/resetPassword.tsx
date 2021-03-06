import { ChangeEvent, ReactElement, ReactNode, useState } from "react"
import { useRouter } from "next/router"
import { Input, InputGroup } from "@chakra-ui/input"
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout"
import { sendPasswordResetEmail } from "@firebase/auth"

import { auth } from "../lib/firebase"
import { PrimaryButton } from "../components/atoms/button/PrimaryButton"
import { Basic } from "components/Layouts/Basic"
import { NextPage } from "next"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

const ResetPassword = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onClickResetPassword = () => {
    auth.languageCode = "ja"
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("メールを送信しました。")
        router.push("/signIn")
      })
      .catch(() => {
        alert("メールの送信に失敗しました。")
      })
  }
  return (
    <Flex>
      <Box>
        <Heading as="h3" size="md">
          Unippに登録した覚えのあるメールアドレスを入力して下さい。
        </Heading>
        <Text>※ 迷惑メールの設定をしている場合は、事前に unipp.firebaseapp.com のドメイン受信設定をお願いします。</Text>
        <Stack spacing={4} py={4} px={10}>
          <InputGroup>
            <Input placeholder="メールアドレス" value={email} onChange={onChangeEmail} />
          </InputGroup>
          <PrimaryButton disabled={email === ""} onClick={onClickResetPassword}>
            パスワードを再設定する
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  )
}

ResetPassword.getLayout = (page: ReactElement) => {
  return <Basic showIcon={false}>{page}</Basic>
}

export default ResetPassword
