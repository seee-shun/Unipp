import React from "react"
import { AppLogo } from "../atoms/appLogo"
import { Flex, Spacer, Box, Avatar } from "@chakra-ui/react"

export const AppHeader: React.FC = ({ children }) => {
  return (
    <>
      <Box p="1rem">
        <Flex justifyContent="center" alignContent="center">
          <Flex alignItems="center">
            <AppLogo />
          </Flex>
          <Spacer />
          <Box>
            <Avatar size="md" name="user name" src="https://bit.ly/ryan-florence" />{" "}
          </Box>
        </Flex>
      </Box>
    </>
  )
}
