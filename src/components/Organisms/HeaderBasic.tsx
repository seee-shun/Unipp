import React from "react"
import Link from "next/link"
import { AppLogo } from "../atoms/appLogo"
import { HeaderBase as Base } from "./HeaderBase"
import { Avatar } from "@chakra-ui/react"
import { Spacer, Flex } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { useRouter } from "next/router"

export const HeaderBasic: React.FC = (props) => {
  const router = useRouter()
  console.log(router.pathname)
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
              <Avatar size={useBreakpointValue({ base: "sm", md: "md" })} src="https://bit.ly/dan-abramov"></Avatar>
            </Link>
          </Flex>
        )}
      </Base>
    </>
  )
}
