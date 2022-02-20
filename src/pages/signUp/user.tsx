import { ChangeEvent, useState } from "react"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { IconButton } from "@chakra-ui/button"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightAddon, InputRightElement } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout"

import { useSignUp } from "../../hooks/useSignUp"
import { univListState } from "../../store/univListState"
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton"

const User = () => {
  const [userName, setUserName] = useState("")
  const [univEmail, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const univList: any = useRecoilValue(univListState)
  let email = ''
  if (univList.address !== undefined) {
    email = `${univEmail}${univList.address}`
  } else {
    email = univEmail;
  }

  const { signUp } = useSignUp()

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleClick = () => setShowPassword(!showPassword)
  const onClickSignUp = () => signUp({ email, password })

  return (
    <Flex>
      <Box>
        <Heading as="h1" size="lg" textAlign="center">
          アカウントを作成
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <InputGroup>
            <Input placeholder="ユーザ名" value={userName} onChange={onChangeUserName} />
          </InputGroup>
          <InputGroup>
            <Input placeholder="大学メールアドレス" value={univEmail} onChange={onChangeEmail} />
            <InputRightAddon>{univList.address}</InputRightAddon>
          </InputGroup>
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
          <PrimaryButton disabled={userName === "" || email === "" || password === ""} onClick={onClickSignUp}>
            新規作成
          </PrimaryButton>
          <Link href='/signUp'>大学メールが違う場合はこちら</Link>
        </Stack>
      </Box>
    </Flex>
  )
}

export default User
