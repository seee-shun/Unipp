import React from "react"
import Link from "next/link"
import { AppLogo } from "../atoms/appLogo"
import { HeaderBase as Base } from "./HeaderBase"
import { Avatar, color, Text } from "@chakra-ui/react"
import { Spacer, Flex } from "@chakra-ui/layout"
// import { useBreakpointValue } from "@chakra-ui/media-query"
import { useRouter } from "next/router"
import { userState } from "store/userState"
import { useRecoilValue } from "recoil"

type Props = {
  showIcon?: boolean
}

export const HeaderBasic: React.FC<Props> = ({ showIcon = true }) => {
  const user = useRecoilValue(userState)
  const router = useRouter()
  const textHover = {
    cursor: "pointer",
    color: "red",
    transition: "color 0.5s ease",
  }
  return (
    <>
      <Base>
        <Flex alignItems="center">
          <AppLogo />
        </Flex>
        <Spacer />
        {showIcon && (
          <Flex alignItems="center">
            <Link href="/mypage">
              <Avatar size="md" src={user.iconURL}></Avatar>
            </Link>
          </Flex>
        )}
        {router.pathname === "/" && (
          <Flex justifyContent="space-between" alignItems="center" gridGap={3}>
            <Link href="/signIn">
              <Text _hover={textHover}>ログイン</Text>
            </Link>
            <Link href="/signUp/selectUniv">
              <Text fontWeight={"bold"} color="#4e4e4e" _hover={textHover}>
                新規登録
              </Text>
            </Link>
          </Flex>
        )}
      </Base>
    </>
  )
}
