import React from "react"
import { Box, Text } from "@chakra-ui/layout"

type tags = string[]

export const PostTags: React.FC<tags> = (props) => {
  return (
    <>
      <Box borderColor="yellow.300">
        <Text color="yellow.300">
          {props}
        </Text>
      </Box>
    </>
  )
}