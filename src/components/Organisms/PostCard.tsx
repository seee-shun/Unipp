import React from "react"
import { useRouter } from "next/router"
import { Box, Divider, Flex, Spacer, Text, VStack } from "@chakra-ui/layout"
import { HStack } from "@chakra-ui/react"
import { PostTags } from "../Molecules/PostTags"

type Props = {
  userId: string
  userName: string
  userUnivName: string
  content: string
  createdAt: any
  tags: string[]
}

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
            pb={24}
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
              {props.userName}
              {props.userUnivName}
              </Text>
              </HStack>
              <Text>
                {props.content}
              </Text>
            </VStack>
            <Divider orientation="vertical"/>
            <Box width="50%">
                {/* 時間があればちゃんと切り分ける */}
                {/* <PostTags tags={props.tags}/> */}
              {props.tags.map((tag, index) => 
                <Box 
                  key={tag} 
                  borderWidth="2px" 
                  borderColor="#FFD400" 
                  borderRadius={8} 
                  px={4}
                  mb={2}>
                  <script>
                    {index +1} 
                  </script>
                  <Text color="#FFD400" fontWeight="bold">{tag}</Text>  
                </Box> 
              )}
            </Box>
          </HStack>
        </Box>
      </Box>
    </>
  )
}