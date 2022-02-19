import React from "react"
import { Box, Flex, Button, Spacer, Tag, TagLabel } from "@chakra-ui/react"
import { EventTag } from "../Molecules/EventTag"

type Props = {
  tags: string[]
}

export const EventSort: React.FC<Props> = ({ tags }) => {
  return (
    <>
      <Box position="relative" mb="1rem" bgColor="#f4f4f4" w="90vw" h="20vh" borderRadius="10px">
        <Flex alignItems="flex-start" h="4.5vh" maxW="vw">
          <Tag p="8px 12px" size="md" borderRadius="full" variant="solid" bgColor="#F2D672" fontWeight="bold">
            <TagLabel>イベントを絞り込む</TagLabel>
          </Tag>
          <Spacer />
          {/* <Button borderRadius="full" colorScheme="white" bgColor="#E9676A">
                ✗
              </Button> */}
        </Flex>
        <Flex p="0.5rem 1rem" gridGap="0.5em" h="15.5vh" flexWrap="wrap" overflowY="hidden">
          {tags.map((data, index) => {
            return <EventTag key={index}>{data}</EventTag>
          })}
        </Flex>
        <Box position="absolute" bottom="0" width="90vw" borderRadius="10px">
          <Flex h="4.5vh" p="0 1rem" alignItems="center" color="#4e4e4e" fontWeight="bold">
            <Spacer />
            <Box borderRadius="full" bgColor="#ffffff" p="2px">
              <Tag size="md" borderRadius="full" variant="solid" bgColor="#E9676a" fontWeight="bold">
                <TagLabel>拡大🔍</TagLabel>
              </Tag>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  )
}
