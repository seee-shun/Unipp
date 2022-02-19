import { ChangeEvent, useState } from "react"
import { useRecoilValue } from "recoil"
import { IconButton } from "@chakra-ui/button"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputRightAddon, InputRightElement } from "@chakra-ui/input"
import { Box, Divider, Flex, Heading, Stack } from "@chakra-ui/layout"

import { useSignUp } from "../../hooks/useSignUp"
import { univListState } from "../../store/univListState"
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton"
import router from "next/router"

const User = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const univList: any = useRecoilValue(univListState)
  let univEmail = ''
  if (univList.address !== undefined) {
    univEmail = `${email}${univList.address}`
  } else {
    univEmail = email;
  }

  const { signUp } = useSignUp()

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const handleClick = () => setShowPassword(!showPassword)
  const onClickSignUp = () => signUp({ univEmail, password })

  return (
    <Flex>
      <Box>
        <Heading as="h1" size="lg" textAlign="center">
          新規作成
        </Heading>
        <Divider my={4} />
        <Stack spacing={4} py={4} px={10}>
          <InputGroup>
            <Input placeholder="ユーザ名" value={userName} onChange={onChangeUserName} />
          </InputGroup>
          <InputGroup>
            <Input placeholder="大学メールアドレス" value={email} onChange={onChangeEmail} />
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
        </Stack>
      </Box>
    </Flex>
  )
}

export default User
