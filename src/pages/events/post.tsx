import type { NextPage } from "next"
import { useState } from "react"
import Head from "next/head"
import { EventCard } from "../../components/Organisms/EventCard"
import { EventSort } from "../../components/Organisms/EventSort"
import { Box, Flex } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/react"
import dayjs from "dayjs"
import { firestore } from "../../lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { useRouter } from "next/router"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  VStack,
  StackDivider,
} from "@chakra-ui/react"
import { Divider } from "@chakra-ui/react"

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

interface Events {
  type: String
  title: String
  image: String
  explain: String
  host: String
  capacity: String
  relatedLinks: String
  entryCost: Number
  period: {
    start: String
    finish: String
  }
}

const Post: NextPage = () => {
  const [evetsFormObject, setEventsFormObject] = useState<Events>({
    type: "",
    title: "",
    image: "",
    explain: "",
    host: "",
    capacity: "",
    relatedLinks: "",
    entryCost: 0,
    period: {
      start: "",
      finish: "",
    },
  })

  return (
    <>
      <Head>
        <title>Unipp:Event投稿</title>
        <meta name="description" content="Events of Unipp for every student" />
      </Head>
      <main>
        <VStack
          p={{ base: "1rem", lg: "unset" }}
          divider={<StackDivider borderColor="gray.300" />}
          spacing={4}
          align="stretch"
        >
          <FormControl
            id="text"
            isRequired
            onChange={(e: any) => {
              console.log(e.target.value)
            }}
          >
            <FormLabel>イベントのタイプ</FormLabel>
            <FormHelperText>イベントのタイプを入力してください</FormHelperText>
            <Input type="text" placeholder="例：雑談会" />
          </FormControl>
          <FormControl id="text" isRequired>
            <FormLabel>イベントのタイトル</FormLabel>
            <FormHelperText>イベントのタイトルを入力してください</FormHelperText>
            <Input type="text" placeholder="例：Unipp オンライン雑談会2021" />
          </FormControl>
          <FormControl id="file" isRequired>
            <FormLabel>画像</FormLabel>
            <Input type="file" display="none" placeholder="例：Unipp オンライン雑談会2021" />
            <Button>画像を選択してください</Button>
          </FormControl>
          <FormControl id="text" isRequired>
            <FormLabel>イベントの説明</FormLabel>
            <Textarea placeholder="こんにちわ。Unipp運営の山田太郎です。よろしければみなさんでお酒を飲みながら雑談会でもしませんか？だれでもいいので参加していただけると嬉しいです。"></Textarea>
          </FormControl>
          <FormControl id="text">
            <FormLabel>主催者</FormLabel>
            <Input type="text" placeholder="山田太郎(user.nameにする予定)" />
            <FormHelperText>変更しないようでしたら、あなたの名前が主催者として掲載されます。</FormHelperText>
          </FormControl>
          <FormControl id="period">
            <FormLabel>開始期間</FormLabel>
            <Input type="date" />
            <FormLabel>終了時間</FormLabel>
            <Input type="time" />
            <FormHelperText></FormHelperText>
          </FormControl>
          <FormControl id="address">
            <FormLabel>開催場所</FormLabel>
            <Input type="address" placeholder="富士山山頂" />
          </FormControl>
          <FormControl id="url">
            <FormLabel>オンラインの場合</FormLabel>
            <Input type="url" placeholder="https://online-chat.jp" />
          </FormControl>
          <FormControl id="number">
            <FormLabel>定員</FormLabel>
            <Input type="number" />
            <FormHelperText>never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="url">
            <FormLabel>関連リンク</FormLabel>
            <Input type="url" />
            <FormHelperText>詳細な情報が掲載されているリンク等を記入してください</FormHelperText>
          </FormControl>
          <FormControl id="number">
            <FormLabel>参加費(円)</FormLabel>
            <Input type="range" />
            <FormHelperText>0の場合は無料と表示されます</FormHelperText>
          </FormControl>
        </VStack>
        <Button></Button>
      </main>
    </>
  )
}

// const q= query(collection(firestore, "events"));
// const EventsSnapshot = await getDocs(q);
// EventsSnapshot.forEach(doc => {
//   console.log(doc.data())
// })

export default Post
