import React from "react"
import { Box, Flex, Button, Spacer, Tag, TagLabel } from "@chakra-ui/react"
import { EventTag } from "../Molecules/EventTag"

type Props = {
  tags: string[]
}

export const EventSort: React.FC<Props> = ({ tags }) => {
  return (
    <>
      <Box
        position="relative"
        mb="1rem"
        bgColor="#f4f4f4"
        w="100%"
        h="20vh"
        borderRadius="10px"
        overflowY="hidden"
      >
        <EventTag size="lg" color="#F2D672">
          イベントを絞り込む
        </EventTag>
        <Flex
          p="0.5rem 1rem"
          gridGap="0.5rem"
          flexWrap="wrap"
          overflowY="hidden"
        >
          {tags.map((data, index) => {
            return <EventTag key={index}>{data}</EventTag>
          })}
        </Flex>
      </Box>
    </>
  )
}
