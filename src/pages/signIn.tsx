import { ChangeEvent, useState } from "react"
import Link from 'next/link'
import { IconButton } from "@chakra-ui/button"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout"

import { PrimaryButton } from "../components/atoms/button/PrimaryButton"
import { useSignIn } from "../hooks/useSignIn"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { signIn } = useSignIn();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleClick = () => setShowPassword(!showPassword)
  const onClickLogin = () => signIn({ email, password })

  return (
    <Flex>
      <Box>
        <Heading as="h1" size="lg" textAlign="center">
          ログイン
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <Input placeholder="大学メールアドレス" value={email} onChange={onChangeEmail} />
          <InputGroup>
            <Input
              placeholder="パスワード"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChangePassword}
            />
            <InputRightElement>
              <IconButton
                size="sm"
                bgColor="white"
                _focus={{ boxShadow: "none" }}
                aria-label="ShowPassword Switch"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
          <PrimaryButton disabled={email === "" || password === ""} onClick={onClickLogin}>
            ログイン
          </PrimaryButton>
          <Link href='signUp/selectUniv'>ユーザー登録されていない方はこちら</Link>
          <Link href='/resetPassword'>パスワードを忘れた方はこちら</Link>
        </Stack>
      </Box>
    </Flex>
  )
}

export default SignIn
