import React from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import { EventTag } from "../Molecules/EventTag"
import { EventClipButton } from "../Molecules/EventClipButton"
import { Box, Divider, Flex, Spacer, Text, VStack } from "@chakra-ui/layout"
import { HStack } from "@chakra-ui/react"

type Props = {
  userId: string
  userName: string
  userUnivName: string
  content: string
  createdAt: any
}

// const PostCardImage = styled.div`
//   .event-image {
//     border-radius: 10px;
//     filter: brightness(0.8);
//   }
// `

export const PostCard: React.FC<Props> = (props) => {
  const router = useRouter()
  const pushToDetails = () => {
    router.push("posts/details")
  }

  return (
    <>
      {/* <Box w={{ base: "50%", md: "33%", lg: "25%" }} p={1}> */}
      <Box w="100%">
        <Box　
            w="full"
            mb={4}
            bgColor="white" 
            pt={8} 
            pb={12}
            px={16} 
            borderRadius={32} 
            boxShadow="md"
            borderColor="gray.100"
            borderWidth="2px"
            onClick={pushToDetails}
            >
          <HStack align="start">
            <VStack align="start">
              <HStack>
                <Box bgColor="yellow.400" px={4} py={2} borderRadius={8} mr={4}>
                 <Text color="white" fontWeight="bold">
                 #メインタグ
                 </Text>
              </Box>
              <Text>
              {props.createdAt}
              {props.userName}名前
              {props.userUnivName}大学名
              </Text>
              </HStack>
              <Text>
                {props.content}
              </Text>
            </VStack>
            {/* <Box>
              ここに内容とかが入る
            </Box> */}
            <Divider orientation="vertical"/>
            <Box width="50%">
              # ここに
              # タグが
              {/* tags - ここにタグがVStackされるよ */}
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  )
}