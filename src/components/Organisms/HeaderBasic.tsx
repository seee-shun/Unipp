import React from "react"
import Link from "next/link"
import { AppLogo } from "../atoms/appLogo"
import { HeaderBase as Base } from "./HeaderBase"
import { Avatar, color, Text } from "@chakra-ui/react"
import { Spacer, Flex } from "@chakra-ui/layout"
// import { useBreakpointValue } from "@chakra-ui/media-query"
import { useRouter } from "next/router"

export const HeaderBasic: React.FC = (props) => {
  const router = useRouter()
  return (
    <>
      <Base>
        <Flex alignItems="center">
          <AppLogo />
        </Flex>
        <Spacer />
        {router.pathname !== "/" && (
          <Flex alignItems="center">
            <Link href="/mypage">
              {/* <Avatar size={useBreakpointValue({ base: "sm", md: "md" })} src="https://bit.ly/dan-abramov"></Avatar> */}
              <Avatar size="md" src="https://bit.ly/dan-abramov"></Avatar>
            </Link>
          </Flex>
        )}
        {router.pathname === "/" && (
          <Flex justifyContent="space-between" alignItems="center" gridGap={3}>
            <Link href="/">
              <Text color="#4e4e4e">ログイン</Text>
            </Link>
            <Link href="/">
              <Text fontWeight={"bold"} color="#4e4e4e">
                新規登録
              </Text>
            </Link>
          </Flex>
        )}
      </Base>
    </>
  )
}
