import type { NextPage } from "next"
import Head from "next/head"
import { PostCard } from "../../components/Organisms/PostCard"
import { Box, Flex } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import dayjs from "dayjs"
import { useRouter } from "next/router"

type Props = {
  postTags: string[]
  events: [
    {
      tags: string[]
      userId: string
      userName: string //firestoreから引き当て 
      userUnivName: string //引き当て
      content: string
      createdAt: string
    }
  ]
}

const Posts: NextPage<Props> = (props) => {
  const router = useRouter()
  const pushToEventPost = () => {
    router.push("posts/post")
  }
  const start = new Date("February 28, 1995 03:24:00").toJSON()
  const start2 = new Date("February 24, 1995 03:24:00").toJSON()
  const start3 = new Date("February 22, 1995 03:24:00").toJSON()
  const finish = new Date("March 4, 1995 03:24:00").toJSON()
  const finish2 = new Date("March 12, 1995 03:24:00").toJSON()
  const finish3 = new Date("March 6, 1995 03:24:00").toJSON()
  const createdTime = new Date("March 6, 1995 03:24:00").toJSON()
  const posts = [
    {
      tags: ["#サークル" , "#日常"],
      userId: "thisIsUserId",
      userName: "表 梨花子",
      userUnivName: "静岡大学",
      content: "これは投稿のコンテンツテキストでーす、ここに投稿内容（本文）が表示されるよ、本当はfirestoreからとってくるんだけど、、、ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      createdAt: dayjs(createdTime).format("YYYY/MM/DD HH:ss")
    },
    {
      tags: ["#サークル" , "#課外活動"],
      userId: "thisIsUserId",
      userName: "表 梨花子",
      userUnivName: "静岡大学",
      content: "これは投稿のコンテンツテキストでーす、ここに投稿内容（本文）が表示されるよ、本当はfirestoreからとってくるんだけど、、、ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      createdAt: dayjs(createdTime).format("YYYY/MM/DD HH:ss")
    },
  ]

  return (
    <>
      <Head>
        <title>Unipp:Posts</title>
        <meta name="description" content="Events of Unipp for every student" />
      </Head>
      <main>
        <Box h="calc(100vh - 80px)" overflowY="scroll">
          <IconButton
            colorScheme="pink"
            aria-label="新規投稿"
            onClick={pushToEventPost}
            icon={<AddIcon />}
            size="lg"
            position="absolute"
            borderRadius="full"
            bottom={6}
            zIndex={100}
            right={{ base: "4", lg: "8" }}
          ></IconButton>

          <Flex flexWrap="wrap" justifyContent="justify-between" w="100%">
            {posts.map((post, index) => {
              return <PostCard key={index} {...post} />
            })}
          </Flex>
        </Box>
      </main>
    </>
  )
}

export default Posts