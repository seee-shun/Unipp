import type { NextPage } from "next"
import Head from "next/head"
import { EventCard } from "../../components/Organisms/EventCard"
import { Box, Flex } from "@chakra-ui/layout"
import { IconButton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"
import dayjs from "dayjs"
// import { firestore } from "../../lib/firebase"
// import { collection, getDocs, query } from "firebase/firestore"
import { useRouter } from "next/router"

type Props = {
  tags: string[]
  events: [
    {
      type: string
      host: string
      image: string
      title: string
      cliped: boolean
      finished?: boolean
      period?: {
        start: string
        finish: string
      }
    }
  ]
}

const Events: NextPage<Props> = (props) => {
  const router = useRouter()
  const pushToEventPost = () => {
    router.push("events/post")
  }
  // const tags = ["音楽", "新歓", "ゆる募", "学会", "サークル・イベント", "勉強会", "朝活", "旅行"]
  const start = new Date("February 28, 1995 03:24:00").toJSON()
  const start2 = new Date("February 24, 1995 03:24:00").toJSON()
  const start3 = new Date("February 22, 1995 03:24:00").toJSON()
  const finish = new Date("March 4, 1995 03:24:00").toJSON()
  const finish2 = new Date("March 12, 1995 03:24:00").toJSON()
  const finish3 = new Date("March 6, 1995 03:24:00").toJSON()
  const events = [
    {
      type: "新歓",
      host: "おれ",
      image: "https://source.unsplash.com/user/erondu/1800x1500",
      title: "テスト",
      cliped: false,
      period: {
        start: dayjs(start).format("MM月DD日"),
        finish: dayjs(finish).format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "未来研究所",
      image: "https://source.unsplash.com/user/erondu/1800x1510",
      title: "奇跡的ハッカソン",
      cliped: false,
      period: {
        start: dayjs(start2).format("MM月DD日"),
        finish: dayjs(finish2).format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "Y-lab",
      image: "https://source.unsplash.com/user/erondu/1800x1490",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs(finish3).format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "Ayaka",
      image: "https://source.unsplash.com/user/erondu/1800x1600",
      title: "テスト",
      cliped: false,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs(finish2).format("MM月DD日"),
      },
    },
    {
      type: "新歓",
      host: "sayNo",
      image: "https://source.unsplash.com/user/erondu/1700x1504",
      title: "テスト",
      cliped: true,
      period: {
        start: dayjs().format("MM月DD日"),
        finish: dayjs(finish3).format("MM月DD日"),
      },
    },
  ]

  return (
    <>
      <Head>
        <title>Unipp:Events</title>
        <meta name="description" content="Events of Unipp for every student" />
      </Head>
      <main>
        <Box h="calc(100vh - 80px)" overflowY="scroll">
          <IconButton
            colorScheme="pink"
            aria-label="新規イベント追加"
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
            {events.map((event, index) => {
              return <EventCard key={index} {...event} />
            })}
          </Flex>
        </Box>
      </main>
    </>
  )
}

// export const getServerSideProps = async () => {
//   // ここでfirebaseのコードを書く or Recoilのコード

//   // const q = query(collection(firestore, "events"))
//   // const EventsSnapshot = await getDocs(q)
//   // EventsSnapshot.forEach((doc) => {
//   //   console.log(doc.data())
//   // })
//   const tags = ["音楽", "新歓", "ゆる募", "学会", "サークル・イベント", "勉強会", "朝活", "旅行"]
//   const start = new Date("December 17, 1995 03:24:00").toJSON()
//   const finish = new Date("December 17, 1995 03:24:00").toJSON()
//   const events = [
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1500",
//       title: "テスト",
//       cliped: false,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "未来研究所",
//       image: "https://source.unsplash.com/user/erondu/1800x1501",
//       title: "奇跡的ハッカソン",
//       cliped: false,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1501",
//       title: "テスト",
//       cliped: true,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1503",
//       title: "テスト",
//       cliped: false,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1504",
//       title: "テスト",
//       cliped: true,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1505",
//       title: "テスト",
//       cliped: true,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1506",
//       title: "テスト",
//       cliped: true,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1507",
//       title: "テスト",
//       cliped: true,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//     {
//       type: "新歓",
//       host: "おれ",
//       image: "https://source.unsplash.com/user/erondu/1800x1508",
//       title: "テスト",
//       cliped: true,
//       period: {
//         start: dayjs().format("MM月DD日"),
//         finish: dayjs().format("MM月DD日"),
//       },
//     },
//   ]

//   return {
//     props: { tags, events },
//   }
// }

export default Events
